import React from 'react';
import "./index.css" ;
interface properties {
    boxIndex:string;
    data: string;
    handleOnClick: (e:React.MouseEvent<HTMLElement>)=>void;
}

export const Box: React.FC<properties> =({boxIndex,data, handleOnClick}) => {
 
  return (
    <button id ={boxIndex} key={boxIndex}  className="box" onClick={handleOnClick}>{data}</button>
  )
}

// export default Box;