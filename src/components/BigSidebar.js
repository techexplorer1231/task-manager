import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
import Logo from "./Logo";

function BigSidebar() {
  const isSidebarOpen = false;

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;
