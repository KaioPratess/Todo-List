import dom from './dom.js';
import creator from './creator.js';
import events from './pubSub.js';
import date from './date.js';

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
      projects.push(newProject);
      events.publish('projects', newProject);
      displayProject();
      newProject = new Project;
      creator.resetCreator();
      removeEvents();
    } else {
      alert('Fill in the fields')
    }
  }

  function displayProject() {
    dom.select.projectList.textContent = '';
  projects.forEach((project) => {
    dom.appendProject(project.title, project.dueDate);
  })
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

  // filter tasks of a specific project
  const projectWrappers = [];

  events.subscribe('getWrapper', events.events, (wrapper) => {
    projectWrappers.push(wrapper);

    projectWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', (event) => {
        projects.forEach((project) => {
          if(event.target.outerText == project.title) {
            dom.openProjectTask(project.title, project.description, project.dueDate, project.priority, project.notes, project.isComplete);
            events.publish('openProject', '');
            project.tasks.forEach((task) => {
              dom.appendTasks(task.title, task.priority, task.project);
            })
          }
        })
      })
    })
  });

  function editDescription() {
    projects.forEach((project) => {
      if(project.title === dom.select.title.textContent) {
        project.description = dom.select.descriptionInput.value;
        console.log(projects)
      }
    })
  }


  function editDeadline() {
    projects.forEach((project) => {
      if(project.title === dom.select.title.textContent) {
        project.dueDate = dom.select.deadlineInput.value;
        console.log(projects)
      }
    })
  }

  function editPriority() {
    projects.forEach((project) => {
      if(project.title === dom.select.title.textContent) {
        project.priority = dom.select.priorityInput.value;
        console.log(projects)
      }
    })
  }

  function editNotes() {
    projects.forEach((project) => {
      if(project.title === dom.select.title.textContent) {
        project.notes = dom.select.notesInput.value;
        console.log(projects)
      }
    })
  }

  function checkFinish(event) {
    projects.forEach((project) => {
      if(project.title === dom.select.title.textContent) {
        if(event.target.checked === true) {
          project.isComplete = true;
        } else {
            project.isComplete = false;
        }
        console.log(projects)
      }
    })
  }

  function deleteProject() {
    projects.forEach((project) => {
      if(project.title === dom.select.title.textContent) {
        const index = projects.indexOf(project);
        projects.splice(index, 1);
      }
      const projectList = document.querySelectorAll('.project');
      projectList.forEach((p) => {
        if(p.firstChild.innerText === dom.select.title.textContent) {
          p.remove();
        }
        window.location.reload();
      })
    })
  }

  return {projects, removeEvents, Project, addProject, editDescription, editDeadline, editPriority, editNotes, checkFinish, deleteProject}
})()

export default handleProjects;