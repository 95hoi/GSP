import React from "react";
import "./Random-Meme.css";

function RandomMeme() {
  //Variables
  const opa = document.querySelector("body");
  const url = "https://meme-api.com/gimme";
  //Functions
  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    const img = data.url;
    const root = document.querySelector(".roots");
    root.innerHTML = `<img src="${img}"> `;
  }
  //Event listeners
  opa.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    const proba = setInterval(getData(), 100);
    const stop = clearInterval(proba);
  });

  return (
    <div>
      <h1 className="naslov">Random-Meme</h1>
      <div className="roots"></div>
    </div>
  );
}

export default RandomMeme;
