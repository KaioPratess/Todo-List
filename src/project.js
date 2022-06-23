import dom from './dom.js';
import creator from './creator.js';
import events from './pubSub.js';

const handleProjects = (function () {
  class Project {
    constructor(title, description, dueDate, time, priority, notes, ...tasks) {
      this.title = title;
      this.description =  description;
      this.dueDate =  dueDate;
      this.time =  time;
      this.priority =  priority;
      this.notes =  notes;
      this.tasks =  tasks;
      this.isComplete =  false;
    }
  }

  const projects = [];
  let newProject = new Project;

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
    if(newProject.title !== undefined) {
      dom.appendProject(newProject.title, newProject.dueDate);
      projects.push(newProject);
      events.publish('projects', newProject);
      newProject = new Project;
      creator.resetCreator();
      removeEvents();
    } else {
      alert('Fill in the fields')
    }
  }

  function cancelAdd() {
    creator.creator.creatorBg.remove();
    creator.creator.cancelBtn.classList.remove('proj')
    creator.resetCreator();
    removeEvents();
    newProject = new Project;
  }

  function activateEvents() {
    creator.appendCreator();
    creator.creator.project.remove();
    creator.creator.cancelBtn.classList.add('proj')
    creator.creator.input.addEventListener('change', setTitle);
    creator.desc.textArea.addEventListener('change', setDescription);
    creator.dueDate.date.addEventListener('change', setDate);
    creator.time.time.addEventListener('change', setTime)
    creator.priority.select.addEventListener('change', setPriority);
    creator.notes.textArea.addEventListener('change', setNotes);
    creator.creator.cancelBtn.addEventListener('click', cancelAdd);
    creator.creator.addBtn.addEventListener('click', addProject);
  }

  function removeEvents() {
    creator.creator.input.removeEventListener('change', setTitle);
    creator.desc.textArea.removeEventListener('change', setDescription);
    creator.dueDate.date.removeEventListener('change', setDate);
    creator.time.time.removeEventListener('change', setTime)
    creator.priority.select.removeEventListener('change', setPriority);
    creator.notes.textArea.removeEventListener('change',  setNotes);
    creator.creator.cancelBtn.removeEventListener('click', cancelAdd);
    creator.creator.addBtn.removeEventListener('click', addProject);
  }

  dom.select.addProjectBtn.addEventListener('click', activateEvents);

  return {projects, removeEvents, Project, addProject}
})()

export default handleProjects;