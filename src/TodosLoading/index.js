import React from "react";

function TodosLoading(props) {

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
            <span className="ItemList__spanX">x</span>
        </li>
    );
}

export { TodosLoading };