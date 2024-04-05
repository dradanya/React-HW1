import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='main-wrapper'>
      <div className='side-wrapper'>
      <SideBar></SideBar>
      </div>
      <div className='middle-wrapper'>
        <div className='header-wrapper'>
        <Header></Header>
        </div>
      <div className='central-wrapper'>
      <Main></Main>
      </div>
      </div>
    </div>
  );
}

export default App;