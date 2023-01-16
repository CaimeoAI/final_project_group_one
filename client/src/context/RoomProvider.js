import { createContext, useContext, useState, useEffect } from "react"
import io from 'socket.io-client'

const RoomContext = createContext()

 export const useRooms = () => {
     return useContext(RoomContext)
}

const socket = io.connect('http://localhost:3001')

export function RoomsProvider({ children }) {

    const [username, setUserName] = useState(localStorage.getItem('username'))
    const [room, setRoom] = useState('')
    const [currentRoom, setCurrentRoom] = useState('')
    const [roomList, setRoomList] = useState([])

    const [currentMessage, setCurrentMessage] = useState('')
    const [messageList, setMessageList] = useState([])

    const joinRoom = () => {
        if (room !== '') {
            socket.emit('join_room', room)
        }
    }

    const sendMessage = async() => {
        if (currentMessage !== '' && room !== '') {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
            }
            await socket.emit('send_message', messageData)
            setMessageList((list) => [...list, messageData])
        }
    }

    useEffect(() => {
        socket.on('receive_message', (data) => {  
            setMessageList((list) => [...list, data])
        })
    },[socket])


    return (
        <RoomContext.Provider value={{
            username, 
            setUserName,
            room,
            setRoom,
            currentRoom, 
            setCurrentRoom,
            roomList,
            setRoomList,
            joinRoom,
            currentMessage, 
            setCurrentMessage,
            sendMessage,
            messageList, 
            setMessageList,
            socket
        }}>
            { children }
        </RoomContext.Provider>
    )
}