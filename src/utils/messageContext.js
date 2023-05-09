import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext()

export function useMessage() {
        return useContext(MessageContext)
}

const MessageProvider = () => {
    const [messages, setMessages ]= useState()
}

// TODO: 