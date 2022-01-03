import "./style.css";
import { createPlayBoard } from "./scripts/createPlayBoard";

const app = document.querySelector("#app");
const gameBoard = createPlayBoard();
app.appendChild(gameBoard);
