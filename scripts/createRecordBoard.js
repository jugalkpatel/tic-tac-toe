export function createRecordBoard() {
  const recordBoard = document.createElement("div");
  recordBoard.style.display = "flex";
  recordBoard.style.justifyContent = "center";

  const updateLabel = {
    drawLabel: (newValue) => {
      document.querySelector(".draw-label").textContent = newValue;
    },
    winnerOLabel: (newValue) => {
      document.querySelector(".player1-label").textContent = newValue;
    },
    winnerXLabel: (newValue) => {
      document.querySelector(".player2-label").textContent = newValue;
    },
  };

  recordBoard.innerHTML = `
    <section class="label-container">
      <label>Draw</label>
      <label class="draw-label">0</label>
    </section>

    <section class="label-container">
      <label>Player 1(O)</label>
      <label class="player1-label">0</label> 
    </section>

    <section class="label-container">
      <label>Player 2(X)</label>
      <label class="player2-label">0</label>
    </section>
  `;

  return { recordBoard, updateLabel };
}
