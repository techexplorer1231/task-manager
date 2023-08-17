import { TODO_CHANGE_LIST } from "../constants/actionTypes";

const Navlinks = ({ toggleSidebar, dispatch, titles }) => {
  const updateTodos = (collectionId) => {
    toggleSidebar && toggleSidebar();
    dispatch({ type: TODO_CHANGE_LIST, payload: collectionId });
  };

  return (
    <div className="btn-links">
      {titles.map((todo) => {
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
      })}
    </div>
  );
};

export default Navlinks;
