import ShowTask from "./ShowTask";

function DisplayTask({ tasks }) {
    const renderedTasks = tasks.map((task) => {
        return (
            <ShowTask key={task.id} task={task} />
        );
    });

    
    return (
        <div className="task-display">{renderedTasks}</div>
    );
}




export default DisplayTask;