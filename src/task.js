import project from './project.js';
import dom from './dom.js';
import events from './pubSub.js';
import creator from './creator.js';

const handleTasks = (function() {
  class Task {
    constructor(title, description, dueDate, time, priority = 'Low', notes, project = 'Inbox', ...checkList) {
      this.title = title;
      this.description =  description;
      this.dueDate =  dueDate;
      this.time =  time;
      this.priority =  priority;
      this.notes =  notes;
      this.project = project;
      this.checkList = checkList;
      this.isComplete =  false;
    }
  }

  const tasks = [];
  let newTask = new Task;

  function setTitle() {
    newTask.title = creator.creator.input.value;
  }

  function setDescription() {
    newTask.description = creator.desc.textArea.value;
  }

  function setDate() {
    newTask.dueDate = creator.dueDate.date.value;
  }

  function setTime() {
    newTask.time = creator.time.time.value;
  }

  function setNotes() {
    newTask.notes = creator.notes.textArea.value;
  }

  function setPriority() {
    newTask.priority = creator.priority.select.value;
  }

  function setProject() {
    newTask.project = creator.projects.select.value;
  }
  
  function addTask() {
    if(newTask.title !== undefined) {
      tasks.push(newTask);
      events.publish('tasks', tasks);
      project.projects.forEach((project) => {
        if(project.title == newTask.project) {
          project.tasks.push(newTask)
        }
      })
      newTask = new Task;
      creator.resetCreator();
      creator.creator.creatorBg.remove();
      removeEvents();
    } else {
      alert('Fill in the fields')
    }
  }

  function cancelAdd() {
    creator.creator.creatorBg.remove();
    creator.resetCreator();
    removeEvents();
    newTask = new Task;
  }
  
  function activateEvents() {
    creator.appendCreator();
    creator.creator.input.addEventListener('change', setTitle);
    creator.desc.textArea.addEventListener('change', setDescription);
    creator.dueDate.date.addEventListener('change', setDate);
    creator.time.time.addEventListener('change', setTime)
    creator.priority.select.addEventListener('change', setPriority);
    creator.projects.select.addEventListener('change', setProject);
    creator.notes.textArea.addEventListener('change', setNotes);
    creator.creator.cancelBtn.addEventListener('click', cancelAdd);
    creator.creator.addBtn.addEventListener('click', addTask);
  }

  function removeEvents() {
    creator.creator.input.removeEventListener('change', setTitle);
    creator.desc.textArea.removeEventListener('change', setDescription);
    creator.dueDate.date.removeEventListener('change', setDate);
    creator.time.time.removeEventListener('change', setTime)
    creator.priority.select.removeEventListener('change', setPriority);
    creator.notes.textArea.removeEventListener('change',  setNotes);
    creator.creator.cancelBtn.removeEventListener('click', cancelAdd);
    creator.creator.addBtn.removeEventListener('click', addTask);
  }

  const wrappers = [];

  events.subscribe('taskWrapper', events.events, (wrapper) => {
    wrappers.push(wrapper);
    wrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', (event) => {
        tasks.forEach((task) => {
          if(event.target.outerText === task.title) {
            dom.select.tasksContainer.textContent = '';
            dom.openProjectTask(task.title, task.description, task.dueDate, task.priority, task.notes);
            events.publish('openTask', '');
          }
        })
      })
    })
  });

  function editDescription() {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        task.description = dom.select.descriptionInput.value;
        console.log(tasks)
      }
    })
  }


  function editDeadline() {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        task.dueDate = dom.select.deadlineInput.value;
        console.log(tasks)
      }
    })
  }

  function editPriority() {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        task.priority = dom.select.priorityInput.value;
        console.log(tasks)
      }
    })
  }

  function editNotes() {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        task.notes = dom.select.notesInput.value;
        console.log(tasks)
      }
    })
  }

  function checkFinish(event) {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        if(event.target.checked === true) {
          task.isComplete = true;
        } else {
            task.isComplete = false;
        }
        console.log(tasks)
      }
    })
  }

  dom.select.addTaskBtn.addEventListener('click', activateEvents);

  return{tasks, removeEvents, Task, addTask,  editDescription, editDeadline, editPriority, editNotes, checkFinish}
})()

export default handleTasks;
