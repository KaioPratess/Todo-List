import creator from './creator.js';
import events from './pubSub.js';

const dom = (function () {
  const select = {
    pageStructure: document.querySelector('.page-structure'),
    addTaskBtn: document.querySelector('.add-task'),
    notificationBtn: document.querySelector('.notification'),
    themeChangeBtn: document.querySelector('.theme'),
    configBtn: document.querySelector('.config'),
    inboxBtn: document.querySelector('.inbox-btn'),
    todayBtn: document.querySelector('.today-btn'),
    upcomingBtn: document.querySelector('.upcoming-btn'),
    projectsSec: document.querySelector('.projects'),
    addProjectBtn: document.querySelector('.add-project'),
    tasksContainer: document.querySelector('.tasks-container'),
    headSec: document.querySelector('.head-sec'),
    dateWrapper: document.querySelector('.date-wrapper'),
    arrowBackward: document.querySelector('.arrow-backward'),
    arrowForward: document.querySelector('.arrow-forward'),
    date: document.querySelector('.date'),
    details: document.querySelector('.details-project-task'),
    title: document.querySelector('.title'),
    descriptionInput: document.querySelector('#description'),
    deadlineInput: document.querySelector('#deadline'),
    priorityInput: document.querySelector('#priority'),
    isFinishedInput: document.querySelector('#finished'),
    notesInput: document.querySelector('#notes'),
    sun: document.querySelector('.sun'),
    moon: document.querySelector('.moon')
  }

  function appendTasks(title, priority, project) {
    const wrapper = document.createElement('div');
    const taskTitle = document.createElement('div');
    const para = document.createElement('p');
    const projectTitle = document.createElement('span');
    const circle = document.createElement('div');

    wrapper.classList.add('task');
    taskTitle.classList.add('task-title');

    para.textContent = title;
    projectTitle.textContent = project;
    circle.classList.add('priority-icon', 'low');

    switch(priority) {
      case 'moderate':
        circle.classList.add('moderate')
        break;
      case 'high':
        circle.classList.add('high')
    }

    taskTitle.append(circle, para);
    wrapper.append(taskTitle, projectTitle);
    select.tasksContainer.appendChild(wrapper);

    events.publish('taskWrapper', wrapper);
    creator.creator.creatorBg.remove();
  }

  function appendProject(title, dueDate) {
    const wrapper = document.createElement('div');
    const projectTitle = document.createElement('p');
    const deadline = document.createElement('span');

    projectTitle.textContent = title;
    deadline.textContent = dueDate;
    wrapper.classList.add('project');
    projectTitle.classList.add('project-title');
    deadline.classList.add('project-deadline');

    wrapper.append(projectTitle, deadline);
    select.projectsSec.insertBefore(wrapper, select.addProjectBtn);
    
    creator.creator.creatorBg.remove();

    events.publish('getWrapper', wrapper);
  }

  function openProjectTask(title, description, deadline, priority, notes) {
    select.headSec.textContent = '';
    select.details.style.display = 'block';

    select.descriptionInput.value = description;
    select.deadlineInput.value = deadline;
    select.priorityInput.value = priority;
    select.notesInput.textContent = notes;

    select.title.textContent = title;
    select.headSec.append(select.details);
  }

  function appendInbox() {
    select.headSec.textContent = '';
    const inboxTitle = document.createElement('h1');
          inboxTitle.classList.add('inbox-title');
          inboxTitle.textContent = 'Inbox';
    select.headSec.append(inboxTitle)
  }

  select.themeChangeBtn.addEventListener('click', () => {
    select.pageStructure.classList.toggle('dark');
    select.pageStructure.classList.toggle('light');

    select.sun.classList.toggle('active');
    select.moon.classList.toggle('active');
  })

  return {
    select,
    appendTasks,
    appendProject,
    openProjectTask,
    appendInbox,
  }
})();

export default dom;