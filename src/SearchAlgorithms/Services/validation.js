function isInMaze(position, maze) {
    return !(position[0] < 0 || position[1] < 0 || position[0] >= maze.length || position[1] > maze[0].length);
}

function isInObstacle(position, maze) {
    return maze[position[0]][position[1]].isObstacle
}

export {isInMaze, isInObstacle}
