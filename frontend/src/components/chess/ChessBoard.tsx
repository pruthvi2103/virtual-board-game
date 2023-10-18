import { useState } from "react";
import { Chess, Move } from "chess.js";
import { Chessboard } from "react-chessboard";
import toast from "react-hot-toast";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import ReactModal from "react-modal";

export default function PlayRandomMoveEngine() {
  const [game] = useState(new Chess());
  const [count, setCount] = useState(0);
  const [winningTeam, setWinningTeam] = useState(null);
  function getCurrentTurnColor() {
    return game.turn() === "w" ? "White" : "Black";
  }
  function resetHandler() {
    game.reset();
    setCount(count + 1);
  }
  function makeAMove(move: Move) {
    try {
      const result = game.move(move);
      setCount(count + 1);
      return result;
    } catch (error) {
      toast.error("Illegal Move", {
        position: "bottom-right",
      });
    }
  }

  function onDrop(sourceSquare: string, targetSquare: string) {
    if (game.isGameOver() || game.isCheckmate() || game.isDraw()) {
      // setWinningTeam(game.)
      document.getElementById("end-game")?.click();
    }
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    // illegal move
    if (move === null) {
      toast("Illegal Move");
    }
    // setTimeout(makeRandomMove, 200);
    return true;
  }

  return (
    <div className="chess-wrapper">
      <Chessboard boardWidth={360} position={game.fen()} onPieceDrop={onDrop} />
      <p>{getCurrentTurnColor()} Plays</p>
      <Flex>
        <Button onClick={resetHandler}>Reset</Button>
      </Flex>
      <ReactModal
        isOpen={game.isGameOver() || game.isCheckmate() || game.isDraw()}
      >
        <Heading>Game Ended</Heading>
        <Text>{getCurrentTurnColor()}</Text>
        <Flex gap="3" mt="4" justify="end">
          <Button variant="soft" color="gray">
            Close
          </Button>

          <Button onClick={resetHandler}>Reset</Button>
        </Flex>
      </ReactModal>
    </div>
  );
}
