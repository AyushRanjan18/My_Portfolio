//import logo from './logo.svg';
import  MyNavbar  from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/mycarousal.components";
import TitleMessage from './components/title-message/titlemess.components';
import MyScroll from './components/scroll-down/scrolldown.components';
import './App.css';

const App=() => {
  return (
    <div>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <MyScroll />
    </div>
  );
}

export default App;
