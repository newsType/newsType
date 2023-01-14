import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Footer from './components/common/Footer';
import Detail from './Detail';
import Header from './components/common/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Detail />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
