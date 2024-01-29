import './App.scss'
import { LogoComp, ProfileBox, SearchBox } from "./layout/wave-C";
import { MenuContainer, ShortcutContainer } from "./layout/super-C";


function App() {

  return (
    <div className="main_site_container">
      <div className="left_aside">Hello!
        <LogoComp />
        <ProfileBox />
        <MenuContainer />
        <ShortcutContainer />
      </div>
      <div className="right_main">
        <div className="nav_bar">
          <SearchBox />
        </div>
        <div className="main_body_container"></div>
      </div>
    </div>
  );
}

export default App
