import React from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';


function Maze({
		laberinth
	}) {
	return <section className={style.maze}>
		<div className={style.maze}>
			{laberinth.map((x, index) => {
				return <div key={index} className={style.row}>
					{x.map((y, indexy) => {
						return <div key={`${index}-${indexy}`}>{y}</div>
					})}
				</div>
			})}
		</div>
	</section>
}

Maze.propTypes = {
	rows: PropTypes.number,
	columns: PropTypes.number,
	agentPosition: PropTypes.array,
	targetPosition: PropTypes.array,
	isPressed: PropTypes.bool,
	setIsPressed: PropTypes.func
}

Maze.defaultProps = {
	rows: 0,
	columns: 0,
	agentPosition: null,
	targetPosition: null,
	isPressed: false,
	setIsPressed: () => { }
}

export default Maze
