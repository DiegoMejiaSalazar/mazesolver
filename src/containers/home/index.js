import React from 'react';
import NavigationBar from "../../components/navbar";
import Button from "../../components/button";
import Maze from "../../containers/maze";
import style from './style.module.css';



function Home() {
    return (
        <section className={style.mazeContainer}>
            <NavigationBar>
            <div className={style.container}>
                <Button text="start"/>
                <Button text="settings"/>
            </div>
            </NavigationBar>
            <Maze rows={10} columns={30} agentPosition={[3,4]} />
        </section>
    );
}

export default Home;
