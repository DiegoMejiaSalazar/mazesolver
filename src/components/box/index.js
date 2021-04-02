import React from 'react'
import './style.css'
import classNames from "classnames";
import PropTypes from "prop-types";


function Box({
                 isVisited,
                 isPath,
                 isObstacle,
                 children,
                 mouseEnterEvent,
                 mouseClicked,
			}) {
    return 	<div
	            onMouseEnter={mouseEnterEvent}
	            onClick={mouseClicked}
	            className={`box ${classNames({
	                'isObstacle': isObstacle,
	                'isVisited': isVisited,
	                'isPath': isPath,
                    'isUnknown': !isObstacle && !isVisited && !isPath 
	            })}`}>
	            <div className="boxChildrenRow">
	                {children}
	            </div>
    		</div>
}

Box.propTypes = {
    isVisited: PropTypes.bool,
    isPath: PropTypes.bool,
    isObstacle: PropTypes.bool,
    mouseEnterEvent: PropTypes.func,
    mouseDownEvent: PropTypes.func,
    mouseUpEvent: PropTypes.func

}

Box.defaultProps = {
    isVisited: false,
    isPath: false,
    isObstacle: false,
    mouseEnterEvent: () => {},
    mouseDownEvent: () => {},
    mouseUpEvent: () => {}
}

export default Box
