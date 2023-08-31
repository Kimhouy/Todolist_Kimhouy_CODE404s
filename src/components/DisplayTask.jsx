import ShowTask from "./ShowTask";

function DisplayTask({ tasks, onDelete, onEdit }) {
    const renderedTasks = tasks.map((task) => {
        return (
            <ShowTask onEdit={onEdit} onDelete={onDelete} key={task.id} task={task} />
        );
    });


    return (
        <div className="task-display">{renderedTasks}</div>
    );
}




export default DisplayTask;