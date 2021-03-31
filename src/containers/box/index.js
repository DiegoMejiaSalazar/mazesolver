import React, {useState} from "react";
import Box from '../../components/box'
import style from './style.module.css'
import {Droppable, Draggable} from "react-beautiful-dnd";

function MazeCell({children, isPressed, setIsPressed, mazeId, xaxis, yaxis, columns, isDragging, setIsDragging}) {

    function eventMouseEnter() {
		if (!isPressed) {
			return;
		}
        setIsObstacle(!isObstacle)
    }
    const [isVisited, setIsVisited] = useState(false)
    const [isPath, setIsPath] = useState(false)
    const [isObstacle, setIsObstacle] = useState(false)
    return <div className={style.container}>
        <Droppable droppableId={mazeId}>
			{(dropppableProvided) => {
				return <Box
					providerProps={dropppableProvided}
	                isVisited={isVisited}
	                isPath={isPath}
	                isObstacle={isObstacle}
	                mouseEnterEvent={() => {
	                    eventMouseEnter()
	                }}
	                mouseDownEvent={() => {
	                    setIsPressed(true)
	                    setIsObstacle(!isObstacle)
	                }}
	                mouseUpEvent={() =>  {setIsPressed(false)}}
	            >
					<Draggable draggableId={`${(xaxis * columns) + yaxis}`} index={(xaxis * columns) + yaxis}>
						{(provided) => (<div 
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>{children}</div>)}
					</Draggable>
					</Box>	
			}}
        </Droppable>
    </div>
}

export default MazeCell;
