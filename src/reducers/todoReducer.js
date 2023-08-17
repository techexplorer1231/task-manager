import { generateUniqueTitle } from "../utils/generateUniqueTitle";
import {
  TODO_ADD,
  TODO_TOGGLE,
  TODO_EDIT,
  TODO_DELETE,
  TODO_CHANGE_LIST,
  TODO_NEW_LIST,
  TODO_EDIT_collectionTitle,
  TODO_EDIT_TOGGLE,
  TODO_DELETE_LIST,
  TODO_DELETE_MULTIPLE,
} from "../constants/actionTypes";

export default function todoReducer(todosCollection, action) {
  const { type } = action;
  switch (type) {
    case TODO_ADD: {
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
    case TODO_TOGGLE: {
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
    case TODO_EDIT: {
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
    case TODO_DELETE: {
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
    case TODO_CHANGE_LIST: {
      const collectionId = action.payload;
      const updatedState = todosCollection.map((collection) => ({
        ...collection,
        isActive: collection.collectionId === collectionId,
      }));
      return updatedState;
    }
    case TODO_NEW_LIST: {
      const id = Date.now();
      const op = [
        ...todosCollection,
        {
          collectionTitle: generateUniqueTitle(
            "Untitled List",
            todosCollection
          ),
          collectionId: Date.now(),
          isActive: false,
          todos: [{ id, title: "Your first Todo", completed: false }],
        },
      ];
      return op;
    }
    case TODO_EDIT_collectionTitle: {
      const { id, collectionTitle } = action.payload;
      const updatedState = todosCollection.map((collection) => {
        if (collection.collectionId === id) {
          return {
            ...collection,
            collectionTitle: collectionTitle,
          };
        }
        return collection;
      });
      return updatedState;
    }
    case TODO_EDIT_TOGGLE: {
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
    case TODO_DELETE_LIST: {
      const collectionId = action.payload;
      const updatedState = todosCollection.filter(
        (collection) => collection.collectionId !== collectionId
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
    case TODO_DELETE_MULTIPLE: {
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
    collectionTitle: "Daily Tasks 📝",
    collectionId: 0,
    isActive: true,
    isTitleEditing: false,
    todos: [
      { id: 0, title: "Sample Todo", completed: false, isEditing: false },
    ],
  },
];
