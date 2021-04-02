import React, {useState, useContext} from "react";
import Box from '../../components/box'
import { DataContext } from '../../HOC/ContextProvider';

function MazeCell({children, isPressed, setIsPressed, mazeId, xaxis, yaxis}) {

    function eventMouseEnter() {
        if (!isPressed) {
            return;
        }
        const aux = [...mazeData]
        setMazeData([...aux.slice(0, xaxis), [...aux[xaxis].slice(0, yaxis), {isObstacle: !aux[xaxis][yaxis].isObstacle, isPath: false, isVisited: false}, ...aux[xaxis].slice(yaxis + 1)], ...aux.slice(xaxis + 1)])
    }
    const {mazeData, setMazeData} = useContext(DataContext)


    return <div>
                <Box
                    isVisited={mazeData[xaxis][yaxis].isVisited}
                    isPath={mazeData[xaxis][yaxis].isPath}
                    isObstacle={mazeData[xaxis][yaxis].isObstacle}
                    mouseEnterEvent={() => {
                        eventMouseEnter()
                    }}
                    mouseClicked={() => {
                        setIsPressed(!isPressed)
                    }
                    }
                >
                    {children}
                </Box>
            </div>
}

export default MazeCell;
