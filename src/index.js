import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// rules for function in react, using Capital and using return
// never neste the function declaration, still works, but bad ideas, so just declare all component in top level, like this we make pizza function, and call in App
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Firyal Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      <>
        {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, ricotta cheese"
        price="20000"
        photoName="pizzas/spinaci.jpg"
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushroom"
        price="20000"
        photoName="pizzas/funghi.jpg"
      /> */}
      </>
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("sorry, we are clossed");

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're currently Open until {closeHour}. Come Visit us or order
            online
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
