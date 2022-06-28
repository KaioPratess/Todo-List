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
        return task.dueDate === date && task.isComplete === false
      }
  
      function filterDate() {
        dom.select.tasksContainer.style.display = 'block';
        dom.select.checklistDiv.style.display = 'none';
        const date = task.tasks.filter(isDueDate);
        creator.creator.creatorBg.remove();
        if(date.length > 0) {
          dom.select.tasksContainer.textContent = '';
          for(let tasks of date) {
            dom.appendTasks(tasks.title, tasks.priority, tasks.project, dom.select.tasksContainer);
          } 
        } else {
            dom.select.tasksContainer.textContent = "You don't have any task for today."
        }
      }

      filterDate()
    })

  // filter array to find inbox tasks/ or tasks without projects
  function isInbox(task) {
    return task.project === 'Inbox' && task.isComplete === false
  }

  function filterInbox() {
    const inbox = task.tasks.filter(isInbox);
       dom.select.tasksContainer.style.display = 'block';
            dom.select.checklistDiv.style.display = 'none';
    dom.appendInbox();
    if(inbox.length > 0) {
      dom.select.tasksContainer.textContent = '';
      for(let tasks of inbox) {
        dom.appendTasks(tasks.title, tasks.priority, tasks.project, dom.select.tasksContainer);
      } 
    } else {
        dom.select.tasksContainer.textContent = 'Your inbox is clean.'
    }
  }

  dom.select.inboxBtn.addEventListener('click', filterInbox);

  function isDone(task) {
    return task.isComplete === true;
  }

  function filterDoneTasks() {
    const done = task.tasks.filter(isDone);
    dom.appendDone();
    if(done.length > 0) {
      dom.select.tasksContainer.textContent = '';
      for(let tasks of done) {
        dom.appendTasks(tasks.title, tasks.priority, tasks.project, dom.select.tasksContainer);
      } 
    } else {
        dom.select.tasksContainer.textContent = "You don't have any task finished";
    }
  }

  dom.select.doneBtn.addEventListener('click', filterDoneTasks)
  

  return {filterInbox}
})()

export default appHandler;