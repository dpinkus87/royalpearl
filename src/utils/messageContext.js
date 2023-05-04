import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext()

export function useMessage() {
        return useContext(MessageContext)
}

const MessageProvider = ({children}) => {
    const [messages, setMessages ]= useState()
}
