interface reMatch{
    handleRematch :()=>void;
    handleNextGame :()=>void;
}
export const Buttons: React.FC<reMatch>= ({handleRematch, handleNextGame})=>{
    return(
        <div className="matchButton">
            <button onClick={handleRematch}>Re-match</button>
            <button onClick={handleNextGame}>Next Game</button>
        </div>
    )
}