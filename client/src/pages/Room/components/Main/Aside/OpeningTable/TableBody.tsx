<<<<<<< HEAD
import type { MovesEval } from '../../../../../../shared/types/MovesEval'

interface TableBodyProps {
  movesEval: MovesEval[]
}

export const TableBody = ({ movesEval }: TableBodyProps) => {
  return (
    <tbody>
      {movesEval.map((dataObj, index) => (
        <tr key={index} className="border">
          <td>{index + 1}.</td>
          <td>{dataObj.san}</td>
=======
import type { openingFenEvalType } from '../../../../../../shared/types/openingFenEval'

type TableBodyProps = {
  openingList: openingFenEvalType[]
}

export const TableBody = ({ openingList }: TableBodyProps) => {
  return (
    <tbody>
      {openingList.map((dataObj, index) => (
        <tr key={index} className="border">
          <td>{index + 1}.</td>
          <td>{dataObj.san}</td>
          <td>{dataObj.black + dataObj.white + dataObj.draws}</td>
>>>>>>> main
          <td className="flex w-full">
            <div
              className="flex-1 bg-white"
              style={{
                flex: `0 1 ${(
                  (dataObj.white / (dataObj.black + dataObj.white + dataObj.draws)) *
                  100
                ).toFixed(2)}%`,
              }}>
              {dataObj.white !== 0
                ? ((dataObj.white / (dataObj.black + dataObj.white + dataObj.draws)) * 100).toFixed() + '%'
                : '0%'}
            </div>
            <div
              className="bg-gray-500 text-white"
              style={{
                flex: `0 1 ${(
                  (dataObj.draws / (dataObj.black + dataObj.white + dataObj.draws)) *
                  100
                ).toFixed(2)}%`,
              }}>
              {dataObj.draws !== 0
                ? ((dataObj.draws / (dataObj.black + dataObj.white + dataObj.draws)) * 100).toFixed() + '%'
                : '0%'}
            </div>
            <div
              className="flex-1 bg-black text-white"
              style={{
                flex: `0 1 ${(
                  (dataObj.black / (dataObj.black + dataObj.white + dataObj.draws)) *
                  100
                ).toFixed(2)}%`,
              }}>
              {dataObj.black !== 0
<<<<<<< HEAD
                ? ((dataObj.white / (dataObj.black + dataObj.white + dataObj.draws)) * 100).toFixed() + '%'
=======
                ? ((dataObj.black / (dataObj.black + dataObj.white + dataObj.draws)) * 100).toFixed() + '%'
>>>>>>> main
                : '0%'}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
