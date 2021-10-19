import logo from './logo.svg';
import './App.css';

import Main from "./components/Main/Main";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
