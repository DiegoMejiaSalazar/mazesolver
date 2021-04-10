import React, {useState, useContext} from "react";
import MazeComponent from '../../components/maze'
import MazeCell from '../../containers/box';
import {DataContext} from '../../HOC/ContextProvider';

function Maze() {
    const {mazeDimensions} = useContext(DataContext)
    const [isPressed, setIsPressed] = useState(false)
    const displayableLaberinth = () => {
        const result = []
        for (let i = 0; i < mazeDimensions.rows; i++) {
            result.push([])
            for (let j = 0; j < mazeDimensions.columns; j++) {
                result[i].push(<MazeCell
                    isPressed={isPressed}
                    setIsPressed={setIsPressed}
                    xaxis={i}
                    yaxis={j}
                />)
            }
        }
        return result
    }
    return <MazeComponent
                   laberinth={displayableLaberinth}
    />
}

export default Maze
