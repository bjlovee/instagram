import styles from '../NewPostModal/NewPostModal.module.scss'
import NavBarBottom from '../NavBarBottom/NavBarBottom'
import { useState } from 'react'


export default function NewPostModal({
    showModal,
    setShowModal
}){
console.log(showModal)
    return(
    <>
        {showModal 
            ?
            <>
            <button className={styles.closeButton} 
                onClick={()=>{
                    setShowModal(false)
                }}
            
            >&#x2715;</button>
            <div className={styles.modal}>

              <div className={styles.postCreation}>


                <div className={styles.modalContainer}>
                    <h5>Create A New Post</h5>
                </div>

                <div className={styles.formContainer}>
                  {/* <button>Add Images</button> */}
                  <form>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                  </form>
                </div>


                <div className={styles.buttonContainer}>
                  <button>Add Images</button>
                </div>

              </div>

            </div>
            </>
            :
            ''
        }
    </>
    )
}





        // {/* <button onClick={()=>{console.log('here')}}></button> */}
        // <button onClick={()=>
        //     {setShowModal(false)
        //     console.log(showModal)}
        // }></button>