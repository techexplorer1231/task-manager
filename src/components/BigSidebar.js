import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { useSidebarContext } from "../hooks/useSidebarContext";

function BigSidebar() {
  const { isSidebarOpen } = useSidebarContext();

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
