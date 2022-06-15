const controlProjects = (function () {
  const projects = [];

  class Project {
    constructor(title, dueDate, priority, notes, ...tasks) {
      this.title = title;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.tasks = tasks;
      this.isComplete = false;
    }
  }

  function createProject(title, dueDate, priority, notes, ...tasks) {
    const newProject = new Project(title, dueDate, priority, notes, ...tasks);
    projects.push(newProject);
  }

  return {createProject, projects}
})()

export default controlProjects;