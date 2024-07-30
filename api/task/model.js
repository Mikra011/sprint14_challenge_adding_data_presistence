// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
        .join('projects', 'projects.project_id', 'tasks.project_id')
        .select(
            'tasks.task_id',
            'tasks.task_description',
            'tasks.task_notes',
            'tasks.task_completed',
            'projects.project_name',
            'projects.project_description'
        )
        .then(tasks =>
            tasks.map(task => ({
                ...task,
                task_completed: Boolean(task.task_completed)
            }))
        );
}

function addTask(task) {
    return db('tasks').insert(task)
        .then(([id]) => {
            return db('tasks').where('task_id', id).first()
        })
        .then(task => ({
            ...task,
            task_completed: Boolean(task.task_completed)
        }))
}

module.exports = {
    getTasks,
    addTask,
}
