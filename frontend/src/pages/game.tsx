import React from "react";
import Chessboard from "../components/chess/ChessBoard";

export const Game = () => {
  return (
    <div style={{ maxHeight: "80vh", maxWidth: "80vw" }}>
      Chess
      <Chessboard />
    </div>
  );
};
