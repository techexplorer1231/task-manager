export default function todoReducer(todos, action) {
  const { type, payload } = action;
  switch (type) {
    case "TODO_ADD": {
      const { id, text } = payload;
      return [
        ...todos,
        {
          id,
          text,
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
        if (todo.id === action.task.id) {
          return action.task;
        } else {
          return todo;
        }
      });
    }
    case "TODO_DELETE": {
      return todos.filter((todo) => todo.id !== payload);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const initialTodos = [
  { id: 0, text: "Visit Kafka Museum", completed: true },
  { id: 1, text: "Watch a puppet show", completed: false },
  { id: 2, text: "Lennon Wall pic", completed: false },
];
