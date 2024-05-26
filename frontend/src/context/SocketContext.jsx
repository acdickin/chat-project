import { createContext, useState, useEffect, useContext } from 'react'
import { useAuthContext } from './AuthContext';

import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id
                }
            })
            setSocket(socket)
            // listens for events for both client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })
            // clean up when component is unmounted
            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [authUser])


    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
}