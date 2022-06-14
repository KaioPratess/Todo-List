class Task {
  constructor(title, description, dueDate, priority, notes, project, ...checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.checklist = checklist;
    this.isComplete = false;
  }
}


export default Task;