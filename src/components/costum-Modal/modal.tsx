
import { IoMdClose } from "react-icons/io";
type ModalProps = {
    handleClose: (e: boolean) => void;
};
export default function Modal({ handleClose }: ModalProps ) {
  return (
     <div className='modal_container'>
          <div className='contentModel'>
              <span className='close' onClick={() => { handleClose(false) }}><IoMdClose /></span>
              <div className="header">
                  title of modal 
              </div>
              <div className="body">
                  the content of the modal
              </div>
              <div className="footer">
                  footer
              </div>
          </div>   
    </div>
  )
}
