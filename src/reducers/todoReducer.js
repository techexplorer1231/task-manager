import { generateUniqueTitle } from "../utils/generateUniqueTitle";

export default function todoReducer(todosCollection, action) {
  const { type } = action;
  switch (type) {
    case "TODO_ADD": {
      const { payload } = action;
      console.log("todoReducer", action);
      const updatedTodos = todosCollection.map((collection) => {
        if (collection.isActive) {
          return {
            ...collection,
            todos: [...collection.todos, payload],
          };
        }
        return collection;
      });
      return updatedTodos;
    }
    case "TODO_TOGGLE": {
      const todoId = action.payload;
      const updatedTodos = todosCollection.map((collection) => {
        if (collection.isActive) {
          return {
            ...collection,
            todos: collection.todos.map((todo) =>
              todo.id === todoId
                ? { ...todo, completed: !todo.completed }
                : todo
            ),
          };
        }
        return collection;
      });
      return updatedTodos;
    }
    case "TODO_EDIT": {
      const { id, title } = action.payload;
      const updatedTodos = todosCollection.map((collection) => {
        if (collection.isActive) {
          const updatedCollection = {
            ...collection,
            todos: collection.todos.map((todo) =>
              todo.id === id ? { ...todo, title } : todo
            ),
          };
          return updatedCollection;
        }
        return collection;
      });
      return updatedTodos;
    }
    case "TODO_DELETE": {
      const todoId = action.payload;
      const updatedTodos = todosCollection.map((collection) => {
        if (collection.isActive) {
          return {
            ...collection,
            todos: collection.todos.filter((todo) => todo.id !== todoId),
          };
        }
        return collection;
      });
      return updatedTodos;
    }
    case "TODO_CHANGE_LIST": {
      const collectionId = action.payload;
      const updatedState = todosCollection.map((collection) => ({
        ...collection,
        isActive: collection.collection_id === collectionId,
      }));
      return updatedState;
    }
    case "TODO_NEW_LIST": {
      const id = Date.now();
      const op = [
        ...todosCollection,
        {
          collection_title: generateUniqueTitle(
            "Untitled List",
            todosCollection
          ),
          collection_id: Date.now(),
          isActive: false,
          todos: [{ id, title: "Your first Todo", completed: false }],
        },
      ];
      return op;
    }
    case "EDIT_COLLECTION_TITLE": {
      const { id, collectionTitle } = action.payload;
      const updatedState = todosCollection.map((collection) => {
        if (collection.collection_id === id) {
          return {
            ...collection,
            collection_title: collectionTitle,
          };
        }
        return collection;
      });
      return updatedState;
    }
    case "TODO_EDIT_TOGGLE": {
      console.log("TODO_EDIT_TOGGLE", action.payload);
      const todoId = action.payload;
      const updatedTodos = todosCollection.map((collection) => {
        if (collection.isActive) {
          return {
            ...collection,
            todos: collection.todos.map((todo) =>
              todo.id === todoId ? { ...todo, isEditing: true } : todo
            ),
          };
        }
        return collection;
      });
      return updatedTodos;
    }
    case "DELETE_LIST": {
      const collectionId = action.payload;
      const updatedState = todosCollection.filter(
        (collection) => collection.collection_id !== collectionId
      );
      // loop through the updated state and set the first list as active
      if (updatedState.length > 0) {
        updatedState[0].isActive = true;
      }
      if (updatedState.length === 0) {
        return initialTodosCollection;
      }
      return updatedState;
    }
    case "TODO_DELETE_MULTIPLE": {
      const updatedTodos = todosCollection.map((collection) => {
        if (collection.isActive) {
          return {
            ...collection,
            todos: collection.todos.filter((todo) => !todo.completed),
          };
        }
        return collection;
      });
      return updatedTodos;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const initialTodosCollection = [
  {
    collection_title: "Daily Tasks 📝",
    collection_id: 0,
    isActive: true,
    isTitleEditing: false,
    todos: [
      { id: 0, title: "Sample Todo", completed: false, isEditing: false },
    ],
  },
];
