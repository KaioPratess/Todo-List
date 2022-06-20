import handleProjects from './project.js';
import dom from './dom.js';
import events from './pubSub.js';
import creator from './creator.js';

const handleTasks = (function() {
  function Task() {
    const title = null;
    const description = null;
    const dueDate = null;
    const time = null;
    const priority = null;
    const notes = null;
    const project = null;
    const checklist = [];
    const isComplete = false;

    return {title, description, dueDate, time, priority, notes, project, checklist, isComplete}
  }

  const tasks = [];
  let newTask = Task();

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
  
  function addTask() {
    dom.appendTask(newTask.title, newTask.priority, newTask.project);
    tasks.push(newTask);
    console.log(tasks)
    newTask = Task();
    creator.resetCreator();
    removeEvents();
  }

  function activateEvents() {
    creator.appendCreator();
    creator.creator.input.addEventListener('change', setTitle);
    creator.desc.textArea.addEventListener('change', setDescription);
    creator.dueDate.date.addEventListener('change', setDate);
    creator.time.time.addEventListener('change', setTime)
    creator.priority.select.addEventListener('change', setPriority);
    creator.notes.textArea.addEventListener('change', setNotes);
    creator.creator.cancelBtn.addEventListener('click', creator.cancelAdd);
    creator.creator.addBtn.addEventListener('click', addTask);
  }

  function removeEvents() {
    creator.creator.input.removeEventListener('change', setTitle);
    creator.desc.textArea.removeEventListener('change', setDescription);
    creator.dueDate.date.removeEventListener('change', setDate);
    creator.time.time.removeEventListener('change', setTime)
    creator.priority.select.removeEventListener('change', setPriority);
    creator.notes.textArea.removeEventListener('change',  setNotes);
    creator.creator.cancelBtn.removeEventListener('click', creator.cancelAdd);
    creator.creator.addBtn.removeEventListener('click', addTask);
  }

  dom.select.addTaskBtn.addEventListener('click', activateEvents);

  return{tasks, removeEvents}
})()

export default handleTasks;
