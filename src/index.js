// Component Dependecies
import React from "react";
import ReactDOM from "react-dom";

// Css
import "./css/pure-min.css";
import "./css/style.css";

// Custom Components
import App from "./components/App";

// Other
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
