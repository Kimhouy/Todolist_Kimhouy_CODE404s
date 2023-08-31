import { useState } from "react";
import { FaTimes } from "react-icons/fa"

function ModifyTask({ task, onSubmit, edit }) {
    const [action, setAction] = useState(task.action);

    const handleChange = (event) => {
        setAction(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(task.id, action);
    };

    const editStatus = () => {
        edit()
    }

    return (
        <form onSubmit={handleSubmit} className="task-modify" >
            <input className="input" value={action} onChange={handleChange} />
            <FaTimes color="red" onClick={() => editStatus()} className="edit-status" />
        </form>
    );
}




export default ModifyTask;