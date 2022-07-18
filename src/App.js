import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <Dialogs />
      {/* <Content /> */}
    </div>

  );
}





export default App;
