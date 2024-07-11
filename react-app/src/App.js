import "./App.css";
import armazenamento from "./assets/armazenamento.png";
import sanityClient from "./services/sanity/client";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    sanityClient
      .fetch(
       `*[_type == "background"]{
    _id,
    _createdAt,
    _updatedAt,
    _rev,
    altText,
    backgroundImage {
      asset->{
        _id,
        url
      }
    }
  }`
      )
      .then(backgrounds => {
        console.log(backgrounds[0]);
      })
      .catch(console.error);
  });

  return (
    <div className="app-container">
      <div className="header-container">
        <h1>Portal Tech S.A.</h1>
        <p>Escolha uma categoria</p>
      </div>
      <div className="links-container">
        <div className="item-container">
          <img src={armazenamento} alt="" />
          <p>item-container</p>
        </div>
      </div>
    </div>
  );
}

export default App;
