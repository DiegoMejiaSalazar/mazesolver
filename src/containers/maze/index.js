import React, {useState, useContext} from "react";
import MazeComponent from '../../components/maze'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DataContext} from '../../HOC/ContextProvider'
import {faDotCircle} from "@fortawesome/free-solid-svg-icons";
import MazeCell from '../../containers/box';

function Maze({rows, columns, agentPosition, targetPosition}) {
    const [isPressed, setIsPressed] = useState(false)
    const {mazeData, setMazeData} = useContext(DataContext)
    const maze = () => {
        const result = []
        for (let i = 0; i < rows; i++) {
            result.push([])
            for (let j = 0; j < columns; j++) {
                result[i].push(<MazeCell
                    isPressed={isPressed}
                    setIsPressed={setIsPressed}
                    mazeId={`${i}-${j}`}
                    xaxis={i}
                    yaxis={j}
                />)
            }
        }

        return result
    }
    return <MazeComponent rows={rows}
                   maze={maze}
    />
}

export default Maze
