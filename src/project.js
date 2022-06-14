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


export default Project;