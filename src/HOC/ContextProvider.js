import React, {createContext, useState} from 'react';

export const DataContext = createContext()

export const ContextProvider = ({children}) => {

    const [mazeDimensions, setMazeDimensions] = useState({rows: 15, columns: 30})
    const result = []
    for (let i = 0; i < mazeDimensions.rows; i++) {
        result.push([])
        for (let j = 0; j < mazeDimensions.columns; j++) {
            result[i].push({
                isPath: false,
                isObstacle: false,
                isVisited: false
            })
        }
    }
    const [mazeData, setMazeData] = useState(result)
    return <DataContext.Provider value={{
        mazeData,
        setMazeData,
        mazeDimensions,
        setMazeDimensions
    }}>
        {children}
    </DataContext.Provider>

}
