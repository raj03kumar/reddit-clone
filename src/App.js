import logo from './logo.svg';
import './App.css';
import SideNav from './SideNav'
import Main from './Main'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <SideNav />
        <Main />
      </div>
    </div>
  );
}

export default App;
