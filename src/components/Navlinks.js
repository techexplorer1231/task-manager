import links from "../utils/links";

const Navlinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <button to={path} key={id} onClick={toggleSidebar}>
            <span className="icon">{icon}</span>
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default Navlinks;
