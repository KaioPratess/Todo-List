import task from './task.js';
import project from './project.js';
import events from './pubSub.js';
import dom from './dom.js';
import date from './date.js';
import creator from './creator.js';

const appHandler = (function() {
  // filter array by date
    events.subscribe('fullDate', events.events, (date) => {
      function isDueDate(task) {
        return task.dueDate === date
      }
  
      function filterDate() {
        const date = task.tasks.filter(isDueDate);
        creator.creator.creatorBg.remove();
        if(date.length > 0) {
          dom.select.tasksContainer.textContent = '';
          for(let tasks of date) {
            dom.appendTasks(tasks.title, tasks.priority, tasks.project);
          } 
        } else {
            dom.select.tasksContainer.textContent = "You don't have any task for today."
        }
      }

      filterDate();
    })


  // filter array to find inbox tasks/ or tasks without projects
  function isInbox(task) {
    return task.project === 'Inbox'
  }

  function filterInbox() {
    const inbox = task.tasks.filter(isInbox);
    dom.appendInbox();
    if(inbox.length > 0) {
      dom.select.tasksContainer.textContent = '';
      for(let tasks of inbox) {
        dom.appendTasks(tasks.title, tasks.priority, tasks.project);
      } 
    } else {
        dom.select.tasksContainer.textContent = 'Your inbox is clean.'
    }
  }

  dom.select.inboxBtn.addEventListener('click', filterInbox)

  // filter tasks of a specific project
  const projectWrappers = [];

  events.subscribe('getWrapper', events.events, (wrapper) => {
    projectWrappers.push(wrapper);

    projectWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', (event) => {
        project.projects.forEach((project) => {
          if(event.target.outerText == project.title) {
            dom.select.tasksContainer.textContent = '';
            dom.openProjectTask(project.title, project.description, project.dueDate, project.priority, project.notes);
            project.tasks.forEach((task) => {
              dom.appendTasks(task.title, task.priority, task.project);
            })
          }
        })
      })
    })
  });
})()

export default appHandler;