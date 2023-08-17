import { TODO_CHANGE_LIST } from "../constants/actionTypes";

const Navlinks = ({ toggleSidebar, dispatch, todos }) => {
  const updateTodos = (collection_id) => {
    toggleSidebar && toggleSidebar();
    dispatch({ type: TODO_CHANGE_LIST, payload: collection_id });
  };

  return (
    <div className="btn-links">
      {todos
        ? todos.map((todo) => {
            const { collection_id, collection_title, isActive } = todo;
            return (
              <button
                key={collection_id}
                onClick={() => updateTodos(collection_id)}
                className={isActive ? "btn-link active" : "btn-link"}
              >
                {collection_title}
              </button>
            );
          })
        : null}
    </div>
  );
};

export default Navlinks;
