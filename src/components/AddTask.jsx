import { useState } from "react";
import { GiFlowerPot } from "react-icons/gi"

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
            <div>
                <GiFlowerPot className="flower-icon-1" size={60} />
                <GiFlowerPot className="flower-icon-2" size={60}/>
                <GiFlowerPot className="flower-icon-3" size={60}/>
            </div>
            <div className="container">
                <div className="add-task-container">
                    <form className="add-taskbar" onSubmit={handleSubmit} >
                        <input className="add-task" value={activity} onChange={handleChange} placeholder="Let's do it !!!" />
                        <button className="add-button">Add</button>
                    </form>
                </div>
                
            </div >
        </>
    );
   
}




export default AddTask;