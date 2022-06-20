import dom from './dom.js';
import creator from './creator.js';
import events from './pubSub.js';

const handleProjects = (function () {
  function Project() {
    const title = null;
    const description = null;
    const dueDate = null;
    const time = null;
    const priority = null;
    const notes = null;
    const tasks = [];
    const isComplete = false;

    return {title, description, dueDate, time, priority, notes, tasks, isComplete}
  }

  const projects = [];
  let newProject = Project();

  function setTitle() {
    newProject.title = creator.creator.input.value;
  }

  function setDescription() {
    newProject.description = creator.desc.textArea.value;
  }

  function setDate() {
    newProject.dueDate = creator.dueDate.date.value;
  }

  function setTime() {
    newProject.time = creator.time.time.value;
  }

  function setNotes() {
    newProject.notes = creator.notes.textArea.value;
  }

  function setPriority() {
    newProject.priority = creator.priority.select.value;
  }

  function addProject() {
    dom.appendProject(newProject.title, newProject.dueDate);
    projects.push(newProject);
    console.log(projects);
    newProject = Project();
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
    creator.creator.addBtn.addEventListener('click', addProject);
  }

  function removeEvents() {
    creator.creator.input.removeEventListener('change', setTitle);
    creator.desc.textArea.removeEventListener('change', setDescription);
    creator.dueDate.date.removeEventListener('change', setDate);
    creator.time.time.removeEventListener('change', setTime)
    creator.priority.select.removeEventListener('change', setPriority);
    creator.notes.textArea.removeEventListener('change',  setNotes);
    creator.creator.cancelBtn.removeEventListener('click', creator.cancelAdd);
    creator.creator.addBtn.removeEventListener('click', addProject);
  }

  dom.select.addProjectBtn.addEventListener('click', activateEvents);

  return {projects, removeEvents}
})()

export default handleProjects;