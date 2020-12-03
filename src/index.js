import "./styles.css";
import { WebCache } from "../WebCache";

const wc = new WebCache();

window.getQuote = () => {
  const quote = wc.get("https://api.quotable.io/random");
  quote.then((res) => {
    document.getElementById("app").innerHTML = `
      <h1>Your daily quote</h1>
      <div>${res.content}</div>
    `;
  });
};
