interface scores {
    playerOneScore: string;
    playerTwoScore: string;
}
export const ScoreBoard :React.FC<scores> = ({playerOneScore,playerTwoScore})=>{
    return (
        <div className="scoreBoard">
            <span>Player1:</span>
            <span>{playerOneScore}</span>
            <span>Player2: </span>
            <span>{playerTwoScore}</span>
        </div>


    )
} 
