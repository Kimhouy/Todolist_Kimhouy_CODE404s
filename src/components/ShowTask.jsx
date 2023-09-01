import { useState } from "react";
import ModifyTask from "./ModifyTask";
import { BiSolidEditAlt } from 'react-icons/bi';
import { AiTwotoneDelete } from 'react-icons/ai';


function ShowTask({ task, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    const [status, setStatus] = useState(false);


    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const editStatus = () => {
        setShowEdit(false)
    }

    const handleSubmit = (id, newAction) => {
        setShowEdit(false);
        onEdit(id, newAction)
        editStatusx(true)
    };

    const handleDeleteClick = () => {
        onDelete(task.id)
    };

    const handleStatus = () => {
        setStatus(!status);
    };

    let content = <p>{task.action}</p>;
    if (showEdit) {
        content = <ModifyTask onSubmit={handleSubmit} task={task} edit={editStatus} />;
    }


    return (

        <div className="task-container">
            <div className="task-bar">
                <input type="checkbox" className="task-checkbox" checked={status} onChange={handleStatus} />
                <p className={`${status ? "task-content task-completed" : "task-content"} `}>{content} </p>
                <div className="task-actions">
                    {!showEdit && <button className="task-button" onClick={handleEditClick} >
                        <BiSolidEditAlt size={30} />
                    </button>}

                    <button className="task-button delete-button" onClick={handleDeleteClick} >
                        <AiTwotoneDelete size={30} />
                    </button>
                </div>
            </div>
        </div>

    );
}




export default ShowTask;