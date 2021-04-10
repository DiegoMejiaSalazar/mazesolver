import React, {useState, useContext, useEffect} from "react";
import MazeComponent from '../../components/maze'
import MazeCell from '../../containers/box';
import {DataContext} from '../../HOC/ContextProvider';

function Maze() {
    const {mazeDimensions} = useContext(DataContext)
    const [isPressed, setIsPressed] = useState(false)
    const [displayableLaberinth, setDisplayableLaberinth] = useState([])
    useEffect(() => {
        console.log("aa")
        setDisplayableLaberinth((() => {
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
        })())
    }, [isPressed, setIsPressed])
    return <MazeComponent
                   laberinth={displayableLaberinth}
    />
}

export default Maze
