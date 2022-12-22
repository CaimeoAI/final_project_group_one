import React from 'react'
import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

export default function AddContactModal() {

    const { showChatAddContactModal, setShowChatAddContactModal } = useContext(MainContext)

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
               
                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                            Add Contact
                        </h5>
                        </div>
                        <div className="modal-body relative p-4 text-black">
                        <p>Email of new Contact</p>
                        <input type="email" placeholder="exampe@placeholder.com"></input>
                        </div>
                        <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button"
                            className="inline-block mx-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                            Add
                        </button>
                        <button type="button"
                            className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-dismiss="modal" onClick={() => setShowChatAddContactModal(false)}>
                            Cancel
                        </button>

                        </div>
                    </div>
                </div>
        </div>
  )
}
