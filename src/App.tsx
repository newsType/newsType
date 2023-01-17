import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
