import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/Main';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <Header />
      <Detail />
      <Footer />
    </div>
  );
}

export default App;
