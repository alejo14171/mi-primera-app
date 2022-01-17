import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton ({openModal, setOpenModal}) {
    const onClickButton = () => {
        if (openModal) {
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }
    };


    return (
        <button 
            onClick={() => onClickButton()}
            className={`CreateTodoButton ${openModal && 'CreateTodoButton--FormActive'}`}
        >
            +
        </button>
    );
}

export {CreateTodoButton}