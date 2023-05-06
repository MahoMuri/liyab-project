import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1">
        <App />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
