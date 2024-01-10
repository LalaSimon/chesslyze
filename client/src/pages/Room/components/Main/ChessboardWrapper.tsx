import { Chess } from 'chess.js'
import { ChessboardComponent } from './ChessboardWrapper/ChessboardComponent'
import { ChessboardButtons } from './ChessboardWrapper/ChessboardButtons'
import { Dispatch, SetStateAction } from 'react'
import { ChessboardFenInput } from './ChessboardWrapper/ChessboardFenInput'

type ChessboardWrapperProps = {
  roomID: string
  game: Chess
  setGame: Dispatch<SetStateAction<Chess>>
}

export const ChessboardWrapper = ({ roomID, game, setGame }: ChessboardWrapperProps) => {
  return (
    <section className="flex w-2/4 flex-col items-center justify-center gap-4">
      <ChessboardComponent setGame={setGame} game={game} roomID={roomID!} />
      <ChessboardButtons setGame={setGame} roomID={roomID} />
      <ChessboardFenInput roomID={roomID} setGame={setGame} />
    </section>
  )
}
