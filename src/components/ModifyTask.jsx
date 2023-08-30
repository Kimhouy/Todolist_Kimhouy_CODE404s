import { useState } from "react";

function ModifyTask({ task, onSubmit }) {
    const [action, setAction] = useState(task.action);

    const handleChange = (event) => {
        setAction(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(task.id, action);
    };

    return (
        <form onSubmit={handleSubmit} className="task-modify" >
            <label className="encourage-message">Let's note down your tasks!!!</label>
            <input className="input" value={action} onChange={handleChange} />
            <button className="modify-button">
            </button>
        </form>
    );
}

export default ModifyTask;