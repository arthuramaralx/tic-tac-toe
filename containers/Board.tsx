import { useState } from "react";
import Square from "../components/Square";
type Player = "X" | "O" | "BOTH" | null;

function Board(){
    
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
      Math.round(Math.random() * 1) === 1 ? "X" : "O"
    );
    const [winner, setWinner] = useState<Player>(null);


            
            function setSquareValue(index: any) {
                const newData = squares.map((val, i) =>{
                    if(i === index){
                        return currentPlayer
                    }
                    return val
                });
                setSquares(newData)
                setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
            }
            
            function reset(){
                setSquares(Array(9).fill(null))
                setWinner(null)
                setCurrentPlayer(   Math.round(Math.random() * 1) === 1 ? "X" : "O")
            }

    return (
        <div  suppressHydrationWarning={true}>
   <h3 suppressHydrationWarning={true}>hey {currentPlayer}, its your turn!</h3>
        <div className="grid">

        {Array(9).fill(null).map((_, i) => {
            return <Square
            winner={winner}
            key={i}
            onClick={()=> setSquareValue(i)}
            value={squares[i]}

            />
        })}
    

    </div>
    <button className='reset' onClick={reset}>Reset</button>
    </div>
     )

    }
export default Board;

