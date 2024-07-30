// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects() {
    return db('projects').then(projects =>
        projects.map(project => ({
            ...project,
            project_completed: Boolean(project.project_completed)
        }))
    );
}

function addProject(project) {
    return db('projects').insert(project)
        .then(([id]) => {
            return db('projects').where('project_id', id).first();
        })
        .then(project => ({
            ...project,
            project_completed: Boolean(project.project_completed)
        }))
}

module.exports = {
    getProjects,
    addProject,
}