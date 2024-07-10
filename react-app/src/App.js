import './App.css';
import armazenamento from "./assets/armazenamento.png"

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <h1>Portal Tech S.A.</h1>
        <p>Escolha uma categoria</p>
      </div>
      <div className="links-container">
        <div className="item-container">
          <img src={armazenamento} alt=""/>
          <p>item-container</p>
        </div>
      </div>
    </div>
  );
}

export default App;
