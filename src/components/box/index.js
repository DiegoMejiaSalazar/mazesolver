import React from 'react'
import './style.css'
import classNames from "classnames";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons";

function Box({
                 isVisited,
                 isPath,
                 isObstacle,
                 isTarget,
                 isTraveler,
                 mouseEnterEvent,
                 mouseClicked,
                 reference
			}) {
    return 	<div
                ref={reference}
	            onMouseEnter={mouseEnterEvent}
	            onClick={mouseClicked}
	            className={`box ${classNames({
	                'isObstacle': isObstacle,
	                'isVisited': isVisited,
	                'isPath': isPath,
                    'isUnknown': !isObstacle && !isVisited && !isPath 
	            })}`}>
	            <div className="boxChildrenRow">
                    {isTraveler && <FontAwesomeIcon icon={faDotCircle} />}
	            </div>
    		</div>
}

Box.propTypes = {
    isVisited: PropTypes.bool,
    isPath: PropTypes.bool,
    isObstacle: PropTypes.bool,
    isTarget: PropTypes.bool,
    isTraveler: PropTypes.bool,
    mouseEnterEvent: PropTypes.func,
    mouseClicked: PropTypes.func

}

Box.defaultProps = {
    isVisited: false,
    isPath: false,
    isObstacle: false,
    isTarget: false,
    isTraveler: false,
    mouseEnterEvent: () => {},
    mouseClicked: () => {}
}

export default Box
