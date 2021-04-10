import React, {useContext, useEffect, useState} from 'react';
import NavigationBar from "../../components/navbar";
import Button from "../../components/button";
import style from './style.module.css';
import {DataContext} from "../../HOC/ContextProvider";
import Maze from '../maze'
import LoadingMask from '../../components/loading-mask'
import BFS from "../../SearchAlgorithms/BFS";



function Home() {
    const {
        mazeIsBuilt,
        setMazeIsBuilt,
        setMazeData,
        mazeDimensions,
        setMazeDimensions,
        agentPosition,
        targetPosition,
        mazeData,
    } = useContext(DataContext)

    useEffect(() => {
        setMazeIsBuilt(true)
        setMazeData(setUpMaze(mazeDimensions.rows, mazeDimensions.columns))
    },[mazeDimensions, setMazeDimensions])
    function setUpMaze(rows, columns) {
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
                    <Button text="start" onClick={() => {
                        const result = BFS(agentPosition, targetPosition, mazeData)[1];
                        mazeData[1][0].isUnknown = false;
                        mazeData[2][0].isVisited = true;
                        setMazeData(mazeData)
                    }} />
                    <Button text="settings"/>
                </div>
                <div className={style.containerOptions}>
                    <Button text="small" onClick={() => {
                        setMazeDimensions({rows: 15, columns: 30})
                        setMazeIsBuilt(false)
                    }}/>
                    <Button text="medium" onClick={ () => {
                        setMazeDimensions({rows: 20, columns: 40})
                        setMazeIsBuilt(false)
                    }}/>
                    <Button text="big" onClick={ () => {
                        setMazeDimensions({rows: 25, columns: 60})
                        setMazeIsBuilt(false)
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
