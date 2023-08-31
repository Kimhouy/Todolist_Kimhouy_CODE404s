import ShowTask from "./ShowTask";

function DisplayTask({ tasks, onDelete }) {
    const renderedTasks = tasks.map((task) => {
        return (
            <ShowTask onDelete={onDelete} key={task.id} task={task} />
        );
    });

    
    return (
        <div className="task-display">{renderedTasks}</div>
    );
}




export default DisplayTask;