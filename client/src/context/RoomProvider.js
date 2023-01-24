import { createContext, useContext, useState, useEffect } from "react"
import io from 'socket.io-client'
import axios from "axios";

const RoomContext = createContext()

export const useRooms = () => {
     return useContext(RoomContext)
}

const socket = io.connect('http://localhost:3001')

export function RoomsProvider({ children }) {

    const [username, setUserName] = useState(localStorage.getItem('name'))
    const [userIcon, setUserIcon] = useState(localStorage.getItem('photo'))
    const [room, setRoom] = useState('')
    const [currentRoom, setCurrentRoom] = useState('')
    const [roomList, setRoomList] = useState([])

    const [currentMessage, setCurrentMessage] = useState('')
    const [messageList, setMessageList] = useState([])

    
    const getLocalStorageData = (data) => {
        return data === "token"
          ? "Bearer " + localStorage.getItem(data)
          : localStorage.getItem(data);
    }

    const joinRoom = () => {
        if (room !== '') {
            socket.emit('join_room', room)
            addRoomToDatabase()
        }
    }

    const addMessageToDatabase = async(room, author, message, time, userIcon) => {
        const token = getLocalStorageData("token")
        const data = { room, author, message, time, userIcon }
        const URL = `${process.env.REACT_APP_BE_URL}/chat/rooms/message`
        const configuration = {
          headers: {
            authorization: token,
          },
        }
        try {
          await axios.post(URL, data, configuration);
        } catch (error) {
          console.log(error);
        }
    }

    const getAllRoomMessages = async() => {
        const URL = `${process.env.REACT_APP_BE_URL}/chat/rooms/messages/${room}`
        const configuration = {
            headers: {
              authorization: getLocalStorageData("token"),
            },
          }
        try {
            const result = await axios.get(URL, configuration)
            setMessageList(result.data.messages);
        } catch (error) {
            console.log(error);
        }
    }

    const sendMessage = async() => {
        if (currentMessage !== '' && room !== '') {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
                photo: userIcon
            }
            await socket.emit('send_message', messageData)
            addMessageToDatabase(messageData.room, messageData.author, messageData.message, messageData.time, messageData.photo)
            setMessageList((list) => [...list, messageData])
        }
    }

    useEffect(() => {
        socket.on('receive_message', (data) => {  
            setMessageList((list) => [...list, data])
        })
        getAllRooms()
    },[socket])

    useEffect(() => {
        getAllRoomMessages();
    }, [currentRoom])

    const getAllRooms = async() => {
        const URL = `${process.env.REACT_APP_BE_URL}/chat/rooms/${username}`
        const configuration = {
            headers: {
              authorization: getLocalStorageData("token"),
            },
          }
        try {
            const result = await axios.get(URL, configuration)
            setRoomList(result.data.user.rooms);
        } catch (error) {
            console.log(error);
        }
    }

    const addRoomToDatabase = async () => {
        const token = getLocalStorageData("token")
        const data = { username, room }
        const URL = `${process.env.REACT_APP_BE_URL}/chat/rooms`
        const configuration = {
          headers: {
            authorization: token,
          },
        }
        try {
          const res = await axios.post(URL, data, configuration);
          setRoomList(res.data.user.rooms);
        } catch (error) {
          console.log(error);
        }
    }

    const deleteRoomFromDatabase = async () => {
        const token = getLocalStorageData("token")
        const data = { username, room }
        const URL = `${process.env.REACT_APP_BE_URL}/chat/roomDelete`
        const configuration = {
          headers: {
            authorization: token,
          },
        }
        console.log(data);
        try {
          const res = await axios.patch(URL, data, configuration);
          console.log(res);
        } catch (error) {
          console.log(error);
        }
    }
    console.log(room);
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
            socket,
            addRoomToDatabase,
            getAllRooms,
            getAllRoomMessages,
            userIcon, 
            setUserIcon,
            deleteRoomFromDatabase
        }}>
            { children }
        </RoomContext.Provider>
    )
}