import BFSNode from "../../helpers/BFSNode";
import { isInMaze } from "../Services/validation";

function isInList(mylyst, element) {
    return mylyst.filter(el => el.x === element.x && el.y === element.y).length > 0;
}

function BFS(agentPosition, targetPosition, mazeData) {
    let openList = [];
    let closedList = [];
    openList.push(new BFSNode(agentPosition.row, agentPosition.column, null));
    let current = null;
    let child = null;
    while (openList.length > 0) {
        current = openList[0];
        openList = openList.slice(1);
        closedList.push(current)
        if (current.x === targetPosition.row && current.y === targetPosition.column) {
            const result = [];
            while (current.parent !== null) {
                result.push([current.x, current.y])
                current = current.parent
            }
            result.push([current.x, current.y])
            return [closedList,result];
        }
        [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(element => {
            if (isInMaze([current.x + element[0], current.y + element[1]], mazeData)) {
                child = new BFSNode(current.x + element[0], current.y + element[1], current)
                if (!isInList(closedList, child)) {
                    if (!isInList(openList, child)) {
                        openList.push(child)
                    }
                    current = child
                }
            }
        })
    }
    return [[],[]];
}

export default BFS;
