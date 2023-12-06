import { Box, ScoreBoard,Buttons } from "./index";
import React, { useState, useEffect, ReactElement } from 'react'
import "./index.css";
interface boxValues {
    id: string;
    value: string;
}
const winnerPermutation = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
export const GameBox = () => {
    const [playerOneScore, setplayerOneScore] = useState("0"); 
    const [playerTwoScore,setplayerTwoScore] = useState("0");
    const [chance ,setChance] = useState(9);
    const [boxes, setBoxes] = useState(Array<string>(9).fill(''));
    const [winner, setWinner] = useState("Progress...");
    const [current, setCurrent] = useState('X');
    const handleRematch = ():void=>{
        setBoxes(Array<string>(9).fill(''));
        setCurrent('X');
        setWinner('Progress...');
        setChance(9);
    }
    const handleNextGame  =():void=>{
        setBoxes(Array<string>(9).fill(''));
        setplayerOneScore("0");
        setplayerTwoScore("0");
        setCurrent('X');
        setWinner('Progress...');
        setChance(9);
    }

    const winTest = (cur:string) => {
       
        winnerPermutation.forEach((arr)=>{
            const check = [...arr]
            const checkBox = [...boxes];
            // console.log(checkBox); 
            if(checkBox[check[0]]===cur && checkBox[check[1]]===cur && checkBox[check[2]]===cur ){

                
                setWinner(()=>{
                    return `Winner: Player${cur==='X'? '1':'2'}`;
                });



            }
        })
    }
    const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
       
        if (e.currentTarget.innerText===''&& winner==='Progress...') {           
            setBoxes((b)=>{
                const id = (e.target as HTMLButtonElement).id;
                const updateBox = [...b];
                updateBox[Number(id)]= current;
                return [...updateBox];
            });
            setCurrent((c)=>{
                
                
                let  updatedCurrent:string = (c)==='X'?'0':'X';
                return updatedCurrent;

            });
            setChance((x)=>x-1);
        }

    }

    useEffect(() => {
        
        winTest((current)==='X'? '0':'X');
        if(winner==='Winner: Player1'){
            setplayerOneScore((x)=>(Number(x)+1).toString());
        }
        else if(winner==='Winner: Player2'){
            setplayerTwoScore((x)=>(Number(x)+1).toString());
        }
        else if(chance===0 && winner==='Progress...')  {
            setWinner('Draw');
            
        }
    }, [boxes,winner,setWinner]);

    return (
        <>  
            <h1>{winner}</h1>
            <ScoreBoard playerOneScore={playerOneScore}  playerTwoScore={playerTwoScore} />
            <div className='gameBox'>
                {boxes.map((d, i) => <Box key={i + 1} boxIndex={(i).toString()} handleOnClick={handleOnClick} data={d} />)}
            </div>
            <Buttons handleRematch={handleRematch} handleNextGame ={handleNextGame}  />
        </>

    )
}

export default GameBox