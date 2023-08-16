export default function todoReducer(todos, action) {
  const { type, payload } = action;
  switch (type) {
    case "TODO_ADD": {
      const { id, title } = payload;
      return [
        ...todos,
        {
          id,
          title,
          completed: false,
        },
      ];
    }
    case "TODO_TOGGLE": {
      return todos.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    }
    case "TODO_EDIT": {
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, title: payload.title };
        } else {
          return todo;
        }
      });
    }
    case "TODO_DELETE": {
      return todos.filter((todo) => todo.id !== payload);
    }
    case "TODO_CHANGE_LIST": {
      return todos;
    }
    case "TODO_NEW_LIST": {
      const id = Date.now();
      return [
        ...todos,
        {
          title: "Untitled List",
          id,
          todos: [{ id, text: "Your first Todo", completed: true }],
        },
      ];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const initialTodosCollection = [
  {
    collection_title: "personal",
    collection_id: 0,
    isActive: true,
    todos: [{ id: 0, title: "Visit Kafka Museum", completed: false }],
  },
];
