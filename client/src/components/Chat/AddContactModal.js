import React, { useRef, useContext, useState } from 'react'
import { useContacts } from '../../context/ContactProvider'
import { MainContext } from '../../context/MainContext'

export default function AddContactModal() {

    const [alreadyExistsMessage, setAlreadyExistsMessage] = useState(false)
    const { showChatAddContactModal, setShowChatAddContactModal } = useContext(MainContext)
    const emailRef = useRef()   
    const nameRef = useRef()
    const { conversations, createContact, contacts } = useContacts()

    const handleSubmit = () => {
        
        console.log(JSON.parse(localStorage.getItem('chat-app-conversations')).filter(e => e.id === emailRef.current.value).length > 0);
        if (JSON.parse(localStorage.getItem('chat-app-conversations')).filter(e => e.id === emailRef.current.value).length > 0) {
            setAlreadyExistsMessage(true)
        } else {
            createContact( emailRef.current.value, nameRef.current.value)
            setShowChatAddContactModal(false)
            setAlreadyExistsMessage(false)
        }

    }

    if (!showChatAddContactModal) return null

  return (
        <div className="modal 
                        flex 
                        justify-center 
                        items-center 
                        fade 
                        fixed 
                        top-0 
                        left-0 
                        w-full 
                        h-full 
                        outline-none 
                        overflow-x-hidden 
                        overflow-y-auto"

                        style={{ backgroundColor: "rgba(0,0,0,.5)" }}>
               
                <div className="modal-dialog 
                                modal-dialog-centered 
                                relative 
                                w-auto 
                                pointer-events-none">

                    <div className="modal-content 
                                    border-none 
                                    shadow-lg 
                                    relative 
                                    flex 
                                    flex-col 
                                    w-full 
                                    pointer-events-auto 
                                    bg-secondary
                                    bg-clip-padding 
                                    rounded-md 
                                    outline-none 
                                    text-current">

                        <div className="modal-header 
                                        flex 
                                        flex-shrink-0 
                                        items-center 
                                        justify-between 
                                        p-4 
                                        rounded-t-md">

                        <h5 className="text-xl 
                                       font-medium 
                                       leading-normal
                                       text-accent-primary" id="exampleModalScrollableLabel">

                            Add Contact

                        </h5>

                        </div>

                        <div className="modal-body 
                                        relative 
                                        p-4 
                                        text-accent-primary">

                        <p className="text-left">Email of new Contact</p>

                        <input className="bg-secondary border-2 rounded p-2 mb-4"
                                type="email" placeholder="exampe@placeholder.com" ref={emailRef}></input>
                        

                        <p className="text-left">Username of new Contact</p>

                        <input className="bg-secondary border-2 rounded p-2"
                                type="text" placeholder="Name" ref={nameRef}></input>
                        
                        {alreadyExistsMessage? <p className='text-accent-tertiary pt-2'>Contact with this email already exists</p> : null}
                        </div>
                        <div className="modal-footer 
                                        flex 
                                        flex-shrink-0 
                                        flex-wrap 
                                        items-center 
                                        justify-end 
                                        p-4 
                                        rounded-b-md">
                        
                        
                        
                        <button type="button"
                                onClick={handleSubmit}
                                className="inline-block
                                           mx-2 
                                           px-6 
                                           py-2.5 
                                           bg-accent-secondary
                                           text-white 
                                           font-medium 
                                           text-xs 
                                           leading-tight 
                                           uppercase 
                                           rounded 
                                           shadow-md 
                                           hover:bg-hover-secondary 
                                           hover:shadow-lg 
                                           focus:bg-hover-secondary 
                                           focus:shadow-lg 
                                           focus:outline-none 
                                           focus:ring-0 
                                           active:bg-active 
                                           active:shadow-lg 
                                           transition 
                                           duration-150 
                                           ease-in-out 
                                           ml-1">
                            Add
                        </button>
                        <button type="button"
                            className="inline-block 
                                       px-6 
                                       py-2.5
                                       bg-accent-tertiary
                                       text-white 
                                       font-medium 
                                       text-xs 
                                       leading-tight 
                                       uppercase 
                                       rounded 
                                       shadow-md 
                                       hover:bg-hover-tertiary 
                                       hover:shadow-lg 
                                       focus:bg-hover-tertiary 
                                       focus:shadow-lg 
                                       focus:outline-none 
                                       focus:ring-0 
                                       active:bg-active 
                                       active:shadow-lg 
                                       transition 
                                       duration-150 
                                       ease-in-out"

                            data-bs-dismiss="modal" onClick={() => setShowChatAddContactModal(false)}>
                            Cancel
                        </button>

                        </div>
                    </div>
                </div>
        </div>
  )
}
