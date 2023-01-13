import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
