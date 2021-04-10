function isInMaze(position, maze) {
    if (!(position[0] < 0 || position[1] < 0 || position[0] >= maze.length || position[1] >= maze[0].length)) {
        if (!maze[position[0]][position[1]].isObstacle) {
            return true
        }
    }
    return false
}

export {isInMaze}
