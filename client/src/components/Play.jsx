import { useState } from "react"
import { Chess } from "chess.js"
import { Chessboard } from "react-chessboard"
import { motion } from "framer-motion"

export default function Play() {
  const [game, setGame] = useState(new Chess())
  const [moveFrom, setMoveFrom] = useState(null)

  let status = "Make a move to start the match!"
  if (game.history().length > 0) {
    if (game.isCheckmate()) {
      status = game.turn() === "w" ? "Checkmate! You lost." : "Checkmate! You won!"
    } else if (game.isDraw()) {
      status = "Draw! Game over."
    } else if (game.isCheck()) {
      status = "Check!"
    } else {
      status = game.turn() === "w" ? "Your turn!" : "Kumar Devansh is thinking..."
    }
  }

  const makeBotMove = (currentGame) => {
    const possibleMoves = currentGame.moves()
    if (currentGame.isGameOver() || currentGame.isDraw() || possibleMoves.length === 0) return

    const randomIndex = Math.floor(Math.random() * possibleMoves.length)
    const move = possibleMoves[randomIndex]
    
    setTimeout(() => {
      setGame((prevGame) => {
        const gameCopy = new Chess(prevGame.fen())
        try {
          gameCopy.move(move)
        } catch (e) {
          console.error("Bot move failed: ", e)
        }
        return gameCopy
      })
    }, 600) // Adding a slight delay for realism
  }

  const resetGame = () => {
    setGame(new Chess())
    setMoveFrom(null)
  }

  const onDrop = (sourceSquare, targetSquare) => {
    if (game.turn() === "b") return false // Prevent moving bot's pieces

    const gameCopy = new Chess(game.fen())
    let move = null

    try {
      move = gameCopy.move({ from: sourceSquare, to: targetSquare })
    } catch {
      move = null
    }

    if (!move) {
      try {
        move = gameCopy.move({ from: sourceSquare, to: targetSquare, promotion: "q" })
      } catch {
        return false // Illegal move entirely
      }
    }

    if (!move) return false

    setGame(gameCopy)
    
    // Trigger bot immediately after successful human move
    if (!gameCopy.isGameOver() && gameCopy.turn() === "b") {
      makeBotMove(gameCopy)
    }
    
    return true
  }

  const onSquareClick = (square) => {
    if (game.turn() === "b") return // Lock board during bot's turn

    if (!moveFrom) {
      const piece = game.get(square)
      if (piece && piece.color === "w") {
        setMoveFrom(square)
      }
    } else {
      const moved = onDrop(moveFrom, square)
      if (!moved) {
        const piece = game.get(square)
        setMoveFrom(piece && piece.color === "w" ? square : null)
      } else {
        setMoveFrom(null)
      }
    }
  }

  return (
    <section className="py-32 px-6 w-full max-w-5xl mx-auto flex flex-col items-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-4 flex items-center justify-center gap-4">
          Play chess with me ♟️
        </h2>
        <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-bold tracking-wide mb-6">
          Opponent: Kumar Devansh
        </div>
        <p className="text-lg max-w-xl mx-auto font-medium text-white/60">
          {status}
        </p>
      </motion.div>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={resetGame}
          className="px-6 py-3 border rounded-full font-bold transition-colors border-red-500/50 text-red-400 hover:bg-red-500/10"
        >
          Reset Board
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-[600px] aspect-square rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white/5 bg-white/5 backdrop-blur-sm p-4"
      >
        <Chessboard 
          position={game.fen()} 
          onPieceDrop={onDrop}
          onSquareClick={onSquareClick}
          customSquareStyles={moveFrom ? { [moveFrom]: { backgroundColor: 'rgba(255, 255, 0, 0.4)' } } : {}}
          customBoardStyle={{
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
          }}
          customDarkSquareStyle={{ backgroundColor: '#2d4766' }}
          customLightSquareStyle={{ backgroundColor: '#e2e8f0' }}
        />
      </motion.div>
    </section>
  )
}
