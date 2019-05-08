const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
