import React, {createContext, useState } from 'react';

export const DataContext = createContext()

export const ContextProvider = ({children}) => {

    const [mazeDimensions, setMazeDimensions] = useState({rows: 0, columns: 0})
    const [mazeIsBuilt, setMazeIsBuilt] = useState(true)
    const [agentPosition, setAgentPosition] = useState([0, 0])
    const [targetPosition, setTargetPosition] = useState([3, 10])
    const [mazeData, setMazeData] = useState([])
    return <DataContext.Provider value={{
        mazeData,
        setMazeData,
        mazeDimensions,
        setMazeDimensions,
        setMazeIsBuilt,
        mazeIsBuilt,
        agentPosition,
        setAgentPosition,
        targetPosition,
        setTargetPosition
    }}>
        {children}
    </DataContext.Provider>

}
