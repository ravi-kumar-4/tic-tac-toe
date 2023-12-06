import React,{useState} from 'react'
import { GameBox } from '../components';
import './index.css';
import { ScoreBoard } from '../components/ScoreBoard';
export const HomePage = () => {


  return (
    <div className='homePage'>
      <GameBox />
    </div>
  )
}
