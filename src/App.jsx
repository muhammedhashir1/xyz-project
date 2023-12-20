import "./App.css";
import Header from "./components/header/header";
import Logo from "./components/logo/logo";
import Logout from "./components/logout/logout";
import Main from "./components/main/main";
import Nav from "./components/nav/nav";
import Notification from "./components/notification/notification";
import Profile from "./components/profile/profile";

function App() {
  return (
    <div className="app-container">
      <Logo />
      <Header />
      <Profile />
      <Nav />
      <Logout />
      <Main />
      <Notification />
    </div>
  );
}

export default App;
