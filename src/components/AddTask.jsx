import { useState } from "react";

function AddTask({ onCreate }) {
    const [activity, setActivity] = useState('');

    const handleChange = (event) => {
        setActivity(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (activity) {
            onCreate(activity);
            setActivity('')
        }
    }


    return (
        <>
            <div className="header">Todo List</div>

            <div className="container">
                <div className="task-container">
                    <form className="add-taskbar" onSubmit={handleSubmit} >
                        <input className="add-task" value={activity} onChange={handleChange} />
                        <button className="add-button">Add</button>
                    </form>
                </div>
            </div >
        </>
    );
}




export default AddTask;