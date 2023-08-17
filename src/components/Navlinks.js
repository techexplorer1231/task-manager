import { TODO_CHANGE_LIST } from "../constants/actionTypes";

const Navlinks = ({ toggleSidebar, dispatch, todos }) => {
  const updateTodos = (collectionId) => {
    toggleSidebar && toggleSidebar();
    dispatch({ type: TODO_CHANGE_LIST, payload: collectionId });
  };

  return (
    <div className="btn-links">
      {todos
        ? todos.map((todo) => {
            const { collectionId, collectionTitle, isActive } = todo;
            return (
              <button
                key={collectionId}
                onClick={() => updateTodos(collectionId)}
                className={isActive ? "btn-link active" : "btn-link"}
              >
                {collectionTitle}
              </button>
            );
          })
        : null}
    </div>
  );
};

export default Navlinks;
