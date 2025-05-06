
import Modal from './modal'
import  './index.css'
import { useState } from 'react'

export default function CustomModal() {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
  return (
    <div>
          <button className='button_open' onClick={()=>{setOpen(true)}}>Open Modal</button>
          {open && <Modal handleClose={handleClose} />} 
    </div>
  )
}
