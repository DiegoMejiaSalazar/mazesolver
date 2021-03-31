import React, {useState} from "react";
import MazeComponent from '../../components/maze'
import {DragDropContext, Draggable} from "react-beautiful-dnd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons";
import MazeCell from '../../containers/box';

function Maze({rows, columns, agentPosition, targetPosition}) {
    const [isPressed, setIsPressed] = useState(false)
	const [isDragging, setIsDragging] = useState(false)
    const maze = () => {
        const result = []
        for(let i = 0; i < rows; i++) {
            result.push([])
            for(let j = 0; j < columns; j++) {
                result[i].push(<MazeCell
									isPressed={isPressed}
									setIsPressed={setIsPressed}
									mazeId={`${i}-${j}`}
									xaxis={i}
									yaxis={j}
									columns={columns}
								/>)
            }
        }

        result[agentPosition[0]][agentPosition[1]] = <MazeCell
														mazeId={`${agentPosition[0]}-${agentPosition[1]}`}
														isPressed={isPressed}
														setIsPressed={setIsPressed}
														xaxis={agentPosition[0]}
														yaxis={agentPosition[1]}
														columns={result[0].length}
														isDragging={isDragging}
														setIsDragging={setIsDragging}
														>
            <FontAwesomeIcon icon={faDotCircle} />
        </MazeCell>
        return result
    }
    return <DragDropContext>
                <MazeComponent rows={rows}
                               columns={columns}
                               targetPosition={targetPosition}
                               agentPosition={agentPosition}
                               isPressed={isPressed}
                               setIsPressed={setIsPressed}
							   maze={maze}
                />
            </DragDropContext>
}

export default Maze
