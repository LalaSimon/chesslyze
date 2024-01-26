import { useTypedSelector } from '../../../../../../../redux/store'
import { TableProps } from './Table'

export const BlackMoves = ({ setRenderSmallBoard, setSmallBoardFen }: TableProps) => {
  const { blackMoves } = useTypedSelector(state => state.moveList)

  return (
    <tr className="flex w-full flex-col gap-1 text-center">
      White
      {blackMoves.map(move => (
        <th
          onMouseEnter={() => {
            setSmallBoardFen(move.fen)
            setRenderSmallBoard(true)
          }}
          onMouseLeave={() => {
            setRenderSmallBoard(false)
          }}
          className="h-10 w-full border bg-white text-center">
          {move.move}
        </th>
      ))}
    </tr>
  )
}
