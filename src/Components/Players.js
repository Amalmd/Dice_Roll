import React from "react";

export const Player1 = ({ activePlayer, isGameOver, currentScore, score1 }) => {
  return (
    <section
      className={` player-0-panel ${
        activePlayer === 1 && !isGameOver ? "active" : null
      }`}
    >
      <h2 className="player-name" id="name-0">
        Player 1
      </h2>
      <p className="player-score" id="score-0">
        {score1}
      </p>
      <h3 className="winner">
        {activePlayer === 1 && isGameOver ? "The winner is Player 1" : null}
        {activePlayer === 2 && isGameOver ? "You Lost" : null}
      </h3>
      <div className="player-current-box">
        <p className="player-current-label">Current</p>
        <p className="player-current-score" id="current-0">
          {activePlayer === 1 ? currentScore : 0}
        </p>
      </div>
    </section>
  );
};
export const Player2 = ({ activePlayer, isGameOver, currentScore, score2 }) => {
  return (
    <section
      className={`player-1-panel ${
        activePlayer === 2 && !isGameOver ? "active" : null
      }`}
    >
      <h2 className="player-name" id="name-1">
        Player 2
      </h2>
      <p className="player-score" id="score-1">
        {score2}
      </p>
      <h3 className="winner">
        {activePlayer === 2 && isGameOver ? "The winner is Player 2" : null}
        {activePlayer === 1 && isGameOver ? "You Lost" : null}
      </h3>
      <div className="player-current-box">
        <p className="player-current-label">Current</p>
        <p className="player-current-score" id="current-1">
          {activePlayer === 2 ? currentScore : 0}
        </p>
      </div>
    </section>
  );
};
