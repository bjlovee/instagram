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
        {showModal === true
            ?
            <>
            <button className={styles.closeButton} 
                onClick={()=>{
                    setShowModal(false)
                    console.log('here')
                }}
            
            >&#x2715;</button>
                <div className={styles.modal}>
                {/* <button
                    onClick={(e)=>{
                        e.preventDefault()
                        setShowModal(false)
                        // console.log(showModal)
                    }}
                >&#x2715;</button> */}
                <div className={styles.postCreation}></div>
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