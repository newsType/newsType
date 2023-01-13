import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <Detail />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
