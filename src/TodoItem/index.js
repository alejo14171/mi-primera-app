import React from "react";
import './TodoItem.css';


function TodoItem(props) {

    const complementoOnComplete = () => {
        if (props.completed == true) {
            console.log('true')
            return (props.onComplete);
        } else {
            console.log('false')
            return (props.onDelete);
        }
    }
    
    return (
        <li className="ItemList">
            <span
                className={`ItemList__spanC 
                ${props.completed && 'Itemlist__spanC--active'}`}
                onClick={
                    props.onComplete
                }
            >✔</span>
            <p className={`ItemList__text 
            ${props.completed && 'ItemList__text--completed'}`}>{props.text}</p>
            <span className="ItemList__spanX" onClick={props.onDelete}>x</span>
        </li>
    );
}

export {TodoItem};