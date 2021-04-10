import React, {useContext, useEffect} from 'react';
import NavigationBar from "../../components/navbar";
import Button from "../../components/button";
import LoadingMask from "../../components/loading-mask";
import Maze from "../../containers/maze";
import style from './style.module.css';
import {DataContext} from "../../HOC/ContextProvider";



function Home() {
    const {mazeIsBuilt,mazeData, setMazeIsBuilt, setMazeData, mazeDimensions, setMazeDimensions, agentPosition, targetPosition} = useContext(DataContext)

    useEffect(() => {
        setMazeIsBuilt(true)
    },[mazeData, setMazeIsBuilt, agentPosition, targetPosition])
    async function setUpMaze(rows, columns) {
        const result = []
        for (let i = 0; i < rows; i++) {
            result.push([])
            for (let j = 0; j < columns; j++) {
                result[i].push({
                    isPath: false,
                    isObstacle: false,
                    isVisited: false,
                    isTarget: false,
                    isTraveler: false
                })
            }
        }

        return result;
    }

    return (
        <section className={style.mazeContainer}>
            <NavigationBar>
            <div className={style.container}>
                <div className={style.containerOptions}>
                    <Button text="start" onClick={() => {console.log("start")}}/>
                    <Button text="settings"/>
                </div>
                <div className={style.containerOptions}>
                    <Button text="small" onClick={async () => {
                        setMazeDimensions({rows: 15, columns: 30})
                        setMazeIsBuilt(false)
                        await setMazeData(await setUpMaze(15, 30))
                    }}/>
                    <Button text="medium" onClick={async () => {
                        setMazeIsBuilt(false)
                        setMazeDimensions({rows: 20, columns: 40})
                        await setMazeData(await setUpMaze(20, 40))
                    }}/>
                    <Button text="big" onClick={async () => {
                        setMazeDimensions({rows: 25, columns: 60})
                        setMazeIsBuilt(false)
                        await setMazeData(await setUpMaze(25, 60))
                    }}/>
                </div>

            </div>
            </NavigationBar>
            {mazeIsBuilt ?
                (<Maze/>) :
                    <LoadingMask/> }

        </section>
    );
}

export default Home;
