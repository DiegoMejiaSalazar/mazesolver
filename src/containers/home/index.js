import React, {useContext} from 'react';
import NavigationBar from "../../components/navbar";
import Button from "../../components/button";
import Maze from "../../containers/maze";
import style from './style.module.css';
import {DataContext} from "../../HOC/ContextProvider";



function Home() {
    const {mazeData, setMazeData, mazeDimensions, setMazeDimensions} = useContext(DataContext)

    function setUpMaze() {
        const result = []
        for (let i = 0; i < mazeDimensions.rows; i++) {
            result.push([])
            for (let j = 0; j < mazeDimensions.columns; j++) {
                result[i].push({
                    isPath: false,
                    isObstacle: false,
                    isVisited: false
                })
            }
        }
        setMazeData(result)
    }
    return (
        <section className={style.mazeContainer}>
            <NavigationBar>
            <div className={style.container}>
                <div className={style.containerOptions}>
                    <Button text="start"/>
                    <Button text="settings"/>
                </div>
                <div className={style.containerOptions}>
                    <Button text="small" onClick={() => {
                        setMazeDimensions({rows: 15, columns: 30})
                        setUpMaze()
                    }}/>
                    <Button text="medium" onClick={() => {
                        setMazeDimensions({rows: 20, columns: 40})
                        setUpMaze()
                    }}/>
                    <Button text="big" onClick={() => {
                        setMazeDimensions({rows: 25, columns: 60})
                        setUpMaze()
                    }}/>
                </div>

            </div>
            </NavigationBar>
            <Maze rows={mazeDimensions.rows} columns={mazeDimensions.columns} agentPosition={[3,4]} />
        </section>
    );
}

export default Home;
