import notesIcon from './img/notes-svgrepo-com.svg';
import descIcon from './img/text-description-svgrepo-com.svg';
import planIcon from './img/plan-svgrepo-com.svg';
import calendarIcon from './img/next-calendar-page-svgrepo-com.svg';
import flagIcon from './img/flag-svgrepo-com.svg';
import clockIcon from './img/clock-svgrepo-com.svg';
import checklistIcon from './img/checklist-svgrepo-com.svg';
import redCircle from './img/hollow-red-circle-svgrepo-com.svg';
import greenCircle from './img/hollow-green-circle-svgrepo-com.svg';


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
    addProjectBtn: document.querySelector('.add-project'),
    arrowBackward: document.querySelector('.arrow-backward'),
    arrowForward: document.querySelector('.arrow-forward'),
    tasksContainer: document.querySelector('.tasks-container'),  
  }
  
  const taskDiv = {
    addTaskBg: document.createElement('div'),
    addTaskContainer: document.createElement('div'),
    inputTask: document.createElement('input'),
    taskProperties: document.createElement('div'),
    taskPropInput: document.createElement('div'),
    cancelBtn: document.createElement('button'),
    addBtn: document.createElement('button'),
    notes: new Image(),
    desc: new Image(),
    plan: new Image(),
    calendar: new Image(),
    priority: new Image(),
    clock: new Image(),
    checklist: new Image(),
  }

  const task = {
    wrapper: document.createElement('div'),
    taskTitle: document.createElement('div'),
    priorityIcon: document.createElement("img"),
    para: document.createElement('p'),
    projectTitle: document.createElement('span')
  }

  function appendTaskDiv () {
    taskDiv.addTaskBg.classList.add('add-task-bg')

    taskDiv.addTaskContainer.classList.add('add-task-container');

    taskDiv.inputTask.setAttribute('id', 'task');
    taskDiv.inputTask.setAttribute('name', 'task');
    taskDiv.inputTask.classList.add('task-input');

    taskDiv.taskProperties.classList.add('task-properties');

    taskDiv.taskPropInput.classList.add('task-prop-input');
    taskDiv.taskPropInput.textContent = 'Schedule';

    taskDiv.cancelBtn.setAttribute('type', 'button');
    taskDiv.cancelBtn.textContent = 'Cancel';
    taskDiv.cancelBtn.classList.add('btn');
    taskDiv.cancelBtn.classList.add('cancel');

    taskDiv.addBtn.setAttribute('type', 'button');
    taskDiv.addBtn.textContent = 'Add Task';
    taskDiv.addBtn.classList.add('btn');
    taskDiv.addBtn.classList.add('add');
    
    taskDiv.notes.src = notesIcon;
    taskDiv.notes.classList.add('icon');
    taskDiv.notes.setAttribute('alt', 'notes');

    taskDiv.desc.src = descIcon;
    taskDiv.desc.classList.add('icon');
    taskDiv.desc.setAttribute('alt', 'desc');

    taskDiv.plan.src = planIcon;
    taskDiv.plan.classList.add('icon');
    taskDiv.plan.setAttribute('alt', 'plan');

    taskDiv.calendar.src = calendarIcon;
    taskDiv.calendar.classList.add('icon');
    taskDiv.calendar.setAttribute('alt', 'calendar');

    taskDiv.priority.src = flagIcon;
    taskDiv.priority.classList.add('icon');
    taskDiv.priority.setAttribute('alt', 'priority');

    taskDiv.clock.src = clockIcon;
    taskDiv.clock.classList.add('icon');
    taskDiv.clock.setAttribute('alt', 'clock');

    taskDiv.checklist.src = checklistIcon;
    taskDiv.checklist.classList.add('icon');
    taskDiv.checklist.setAttribute('alt', 'checklist');

    taskDiv.taskProperties.append(taskDiv.taskPropInput, taskDiv.notes, taskDiv.desc, taskDiv.plan, taskDiv.calendar, taskDiv.priority, taskDiv.clock, taskDiv.checklist, taskDiv.cancelBtn, taskDiv.addBtn);
    taskDiv.addTaskContainer.append(taskDiv.inputTask, taskDiv.taskProperties);
    taskDiv.addTaskBg.append(taskDiv.addTaskContainer);
    select.pageStructure.append(taskDiv.addTaskBg);
  }

  function appendTask() {
    task.wrapper.classList.add('task');
    task.taskTitle.classList.add('task-title');

    task.priorityIcon.setAttribute('src', redCircle);
    task.priorityIcon.setAttribute('alt', 'icon');
    task.priorityIcon.classList.add('priority-icon');
    task.para.textContent = taskDiv.inputTask.value;

    task.taskTitle.append(task.priorityIcon, task.para);
    task.wrapper.append(task.taskTitle, task.projectTitle);
    select.tasksContainer.append(task.wrapper);

    taskDiv.addTaskBg.remove();
  }


  select.addTaskBtn.addEventListener('click', appendTaskDiv);
  task.priorityIcon.addEventListener('click', () => {
    task.priorityIcon.setAttribute('src', greenCircle);
  })


  return {
    select,
    taskDiv,
    appendTask
  }
})();

export default dom;