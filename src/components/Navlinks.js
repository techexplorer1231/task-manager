const Navlinks = ({ toggleSidebar, dispatch, todos }) => {
  const updateTodos = (collection_id) => {
    toggleSidebar();
    dispatch({ type: "TODO_CHANGE_LIST", payload: collection_id });
  };

  return (
    <div className="nav-links">
      {todos &&
        todos.map((todo) => {
          const { collection_id, collection_title } = todo;
          return (
            <button
              key={collection_id}
              onClick={() => updateTodos(collection_id)}
              className="nav-link active"
            >
              {collection_title}
            </button>
          );
        })}
    </div>
  );
};

export default Navlinks;
