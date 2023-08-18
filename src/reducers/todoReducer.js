import { generateUniqueTitle } from "../utils/generateUniqueTitle";
import {
  TODO_ADD,
  TODO_TOGGLE,
  TODO_EDIT,
  TODO_DELETE,
  TODO_CHANGE_LIST,
  TODO_NEW_LIST,
  TODO_EDIT_COLLECTION_TITLE,
  TODO_EDIT_ENABLE,
  TODO_DELETE_LIST,
  TODO_DELETE_MULTIPLE,
} from "../constants/actionTypes";

export default function todoReducer(todosCollection, action) {
  const { type } = action;
  switch (type) {
    case TODO_ADD: {
      const { payload } = action;
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
              todo.id === id ? { ...todo, title, isEditing: false } : todo
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
      console.log("TODO_CHANGE_LIST", updatedState);
      return updatedState;
    }
    case TODO_NEW_LIST: {
      const id = Date.now();
      return [
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
    }
    case TODO_EDIT_COLLECTION_TITLE: {
      const { id, collectionTitle } = action.payload;
      const updatedState = todosCollection.map((collection) => {
        if (collection.collectionId === id) {
          return {
            ...collection,
            collectionTitle: collectionTitle,
            isTitleEditing: !collection.isTitleEditing,
          };
        }
        return collection;
      });
      return updatedState;
    }
    case TODO_EDIT_ENABLE: {
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
        return [initialTodos.slice()[0]];
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

export const initialTodos = [
  {
    collectionTitle: "Daily Tasks 1 🤖",
    collectionId: 0,
    isActive: true,
    isTitleEditing: false,
    todos: [
      { id: 0, title: "Sample Todo 1", completed: false, isEditing: false },
      { id: 1, title: "Sample Todo 2", completed: false, isEditing: false },
      { id: 2, title: "Sample Todo 3", completed: false, isEditing: false },
    ],
  },
  {
    collectionTitle: "Daily Tasks 2 👜",
    collectionId: 1,
    isActive: false,
    isTitleEditing: false,
    todos: [
      { id: 0, title: "Sample Todo 1", completed: false, isEditing: false },
      { id: 1, title: "Sample Todo 2", completed: false, isEditing: false },
    ],
  },
  {
    collectionTitle: "Daily Tasks 3  🧘🏼‍♂️",
    collectionId: 2,
    isActive: false,
    isTitleEditing: false,
    todos: [
      { id: 0, title: "Sample Todo 1", completed: false, isEditing: false },
    ],
  },
];
