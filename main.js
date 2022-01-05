import "./style.css";
import { createPlayBoard } from "./scripts/createPlayBoard";
import { createRecordBoard } from "./scripts/createRecordBoard";

const app = document.querySelector("#app");
const { recordBoard, updateLabel } = createRecordBoard();
const gameBoard = createPlayBoard(updateLabel);

app.appendChild(gameBoard);
app.appendChild(recordBoard);
