import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Content/>}/>
            <Route path='/dialogs/*' element={<Dialogs/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}





export default App;
