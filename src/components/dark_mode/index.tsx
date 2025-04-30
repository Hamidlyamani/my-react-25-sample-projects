import { useEffect, useState } from 'react'
import  './style.css'
import { useDarkMode } from './useDarkMode'

export default function DarkMode() {
    const mode = useDarkMode();

    

  return (
      <div className={`darkMode ${mode.modeIsDark ? 'active' : null}`}>
          <h4>Hello World !</h4>
          <button onClick={mode.hendelMode}>Change thame</button>
    </div>
  )
}
