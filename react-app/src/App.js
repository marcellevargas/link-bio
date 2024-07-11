import "./App.css";
import armazenamento from "./assets/armazenamento.png";
import sanityClient from "./services/sanity/client";
import AppContainer from "./components/AppContainer"
import { useEffect, useState } from "react";

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");

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
      .then(data => {
        console.log(data[0].backgroundImage.asset.url);
        setBackgroundImage(data[0].backgroundImage.asset.url)
      })
      .catch(console.error);
  });

  return (
    <AppContainer backgroundImage={backgroundImage}>
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
    </AppContainer>
  );
}

export default App;
