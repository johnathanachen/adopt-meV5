import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),

    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Husky"
    }),

    React.createElement(Pet, {
      name: "biiiirdy",
      animal: "bird",
      breed: "peas"
    }),

    React.createElement(Pet, {
      name: "squirtle",
      animal: "turtle",
      breed: "sea"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
