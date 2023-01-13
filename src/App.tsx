import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Footer from './components/common/Footer';
import Detail from './Detail';


function App() {
  return (
    <div className="App">
      <Detail />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
