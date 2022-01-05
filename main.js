import "./style.css";
import { createPlayBoard } from "./scripts/createPlayBoard";
import { createRecordBoard } from "./scripts/createRecordBoard";

const app = document.querySelector("#app");
const { recordBoard } = createRecordBoard();
const gameBoard = createPlayBoard();

app.appendChild(gameBoard);
app.appendChild(recordBoard);
