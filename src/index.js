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

function Header() {
  return (
    <header className="header">
      <div>
        <h1>Fastes Pizza Delivery Co.</h1>
      </div>
    </header>
  );
}

function Menu() {
  const pizzes = pizzaData;
  // const pizzes = [];
  const numPizze = pizzes.length;
  return (
    <menu className="menu">
      <h2>Our Menu</h2>
      {/* {numPizze > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {numPizze > 0 ? (
        <>
          {" "}
          <p>
            Authentic Italian culsine. 6 creative dishes to chose from. All from
            our stone oven, all organic, all delidious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <span>Sorry now Pizza is available now</span>
      )}
    </menu>
  );
}

function Pizza(props) {
  // if (props.pizzaObj.soldOut) return null;  //make the disply nun if the pizza is sold out
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? 'sold-out':''}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>

        {/* {props.pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{props.pizzaObj.price}</span>
        )} */}
        <span>
          
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 8;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Open openHour={openHour} closeHour={closeHour} />
      ) : (
        <div className="order">
          <p>
            We're Happy to Welcome you bettween {openHour}:00 AM and {closeHour}
            :00 PM
          </p>
          <p>Now the time is {new Date().toLocaleTimeString()}. </p>
        </div>
      )}
    </footer>
  );
  // return React.createElement("footer", null , "we'r open now.");
}

function Open(props) {
  return (
    <div className="order">
      <p>
        We're Open Until {props.openHour}:00 AM and {props.closeHour}
        :00 PM{" "}
      </p>
      <button className="btn">Oder Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
