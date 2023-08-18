import { TODO_CHANGE_LIST } from "../constants/actionTypes";
import Button from "../assets/wrappers/Button";

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
          <Button
            key={collectionId}
            onClick={() => updateTodos(collectionId)}
            className={isActive ? "btn-link active" : "btn-link"}
          >
            {collectionTitle.slice(0, 20)}
          </Button>
        );
      })}
    </div>
  );
};

export default Navlinks;
