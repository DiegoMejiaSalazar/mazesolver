import React, {useContext} from "react";
import Box from '../../components/box'
import { DataContext } from '../../HOC/ContextProvider';

function MazeCell({isPressed, setIsPressed, xaxis, yaxis}) {
    function eventMouseEnter() {
        if (!isPressed) {
            return;
        }
        const aux = [...mazeData]
        setMazeData([...aux.slice(0, xaxis), [...aux[xaxis].slice(0, yaxis), {
            ...aux[xaxis][yaxis],
            isObstacle: !aux[xaxis][yaxis].isObstacle,
        }, ...aux[xaxis].slice(yaxis + 1)], ...aux.slice(xaxis + 1)])
    }
    const {mazeIsBuilt , mazeData, setMazeData} = useContext(DataContext)

    if (mazeIsBuilt) {
        return <div>
            <Box
                {...mazeData[xaxis][yaxis]}
                mouseEnterEvent={() => {
                    eventMouseEnter()
                }}
                mouseClicked={() => {
                    setIsPressed(!isPressed)
                }
                }
            />
        </div>
    } else {
        return <div>cargando</div>
    }


}

export default MazeCell;
