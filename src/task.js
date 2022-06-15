import controlProjects from './project.js';
import dom from './dom.js';

const controlTasks = (function() {
  const tasks = [];

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

  function createTask(title, description, dueDate, priority, notes, project, ...checklist) {
    const newTask = new Task(title, description, dueDate, priority, notes, project, ...checklist);
    tasks.push(newTask)
    dom.appendTask();
    console.log(tasks)

    // insert the task to the right project
    for(let i = 0; i < controlProjects.projects.length; i++) {
      if(newTask.project === controlProjects.projects[i].title) {
        controlProjects.projects[i].tasks.push(newTask)
      }
    }
  }

  function cancelAdd() {
    dom.taskDiv.addTaskBg.remove();
  }

  dom.taskDiv.cancelBtn.addEventListener('click', cancelAdd);
  dom.taskDiv.addBtn.addEventListener('click', () => {
    createTask(dom.taskDiv.inputTask.value)
  });


  return {createTask}
})()

export default controlTasks;