export default function todoReducer(todos, action) {
  switch (action.type) {
    case "TODO_ADD": {
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "TODO_EDIT": {
      return todos.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "TODO_DELETE": {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
