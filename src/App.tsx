import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Test/>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
