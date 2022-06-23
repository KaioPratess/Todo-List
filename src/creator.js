import notesIcon from './img/notes-svgrepo-com.svg';
import descIcon from './img/text-description-svgrepo-com.svg';
import projectIcon from './img/project-svgrepo-com.svg';
import calendarIcon from './img/next-calendar-page-svgrepo-com.svg';
import flagIcon from './img/flag-svgrepo-com.svg';
import clockIcon from './img/clock-svgrepo-com.svg';
import checklistIcon from './img/checklist-svgrepo-com.svg';
import dom from './dom.js';
import events from'./pubSub.js';


const creator = (function() {

const creator = {
  creatorBg: document.createElement('div'),
  creatorContainer: document.createElement('div'),
  input: document.createElement('input'),
  creatorProp: document.createElement('div'),
  creatorPropInput: document.createElement('div'),
  cancelBtn: document.createElement('button'),
  addBtn: document.createElement('button'),
  notes: new Image(),
  desc: new Image(),
  project: new Image(),
  calendar: new Image(),
  priority: new Image(),
  clock: new Image(),
  checklist: new Image(),
}

function appendCreator () {
  creator.creatorBg.classList.add('add-creator-bg')

  creator.creatorContainer.classList.add('add-creator-container');

  creator.input.setAttribute('id', 'creator');
  creator.input.setAttribute('name', 'creator');
  creator.input.classList.add('creator-input');

  creator.creatorProp.classList.add('creator-properties');

  creator.creatorPropInput.classList.add('creator-prop-input');
  creator.creatorPropInput.style.background = '#1A1A1A'
  creator.creatorPropInput.textContent = '';

  creator.cancelBtn.setAttribute('type', 'button');
  creator.cancelBtn.textContent = 'Cancel';
  creator.cancelBtn.classList.add('btn');
  creator.cancelBtn.classList.add('cancel');

  creator.addBtn.setAttribute('type', 'button');
  creator.addBtn.textContent = 'Save';
  creator.addBtn.classList.add('btn');
  creator.addBtn.classList.add('add');
  
  creator.notes.src = notesIcon;
  creator.notes.classList.add('icon');
  creator.notes.setAttribute('alt', 'notes');

  creator.desc.src = descIcon;
  creator.desc.classList.add('icon');
  creator.desc.setAttribute('alt', 'desc');

  creator.project.src = projectIcon;
  creator.project.classList.add('icon');
  creator.project.setAttribute('alt', 'project');

  creator.calendar.src = calendarIcon;
  creator.calendar.classList.add('icon');
  creator.calendar.setAttribute('alt', 'calendar');

  creator.priority.src = flagIcon;
  creator.priority.classList.add('icon');
  creator.priority.setAttribute('alt', 'priority');

  creator.clock.src = clockIcon;
  creator.clock.classList.add('icon');
  creator.clock.setAttribute('alt', 'clock');

  creator.checklist.src = checklistIcon;
  creator.checklist.classList.add('icon');
  creator.checklist.setAttribute('alt', 'checklist');

  creator.creatorProp.append(creator.creatorPropInput, creator.desc, creator.calendar,  creator.clock, creator.priority,  creator.notes, creator.project, creator.checklist, creator.cancelBtn, creator.addBtn);
  creator.creatorContainer.append(creator.input, creator.creatorProp);
  creator.creatorBg.append(creator.creatorContainer);
  dom.select.pageStructure.append(creator.creatorBg);
}

const priority = {
  select: document.createElement('select'),
  opt0: document.createElement('option'),
  opt1: document.createElement('option'),
  opt2: document.createElement('option'),
  opt3: document.createElement('option'),
}

function appendPriority() {
  priority.select.classList.add('priority-select');
  priority.opt0.setAttribute('value', 'priority');
  priority.opt0.setAttribute('selected', 'selected');
  priority.opt0.textContent = 'Priority';
  priority.opt1.setAttribute('value', 'low');
  priority.opt1.textContent = 'Low';
  priority.opt2.setAttribute('value', 'moderate');
  priority.opt2.textContent = 'Moderate';
  priority.opt3.setAttribute('value', 'high');
  priority.opt3.textContent = 'High';

  priority.select.append(priority.opt1, priority.opt2, priority.opt3, priority.opt0);
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(priority.select)
}

const projects = {
  select: document.createElement('select'),
  opt0: document.createElement('option'),
}

function appendProjects() {
  projects.select.classList.add('projects-select');
  projects.opt0.setAttribute('value', 'inbox');
  projects.opt0.setAttribute('selected', 'selected');
  projects.opt0.textContent = 'Inbox';

  projects.select.append(projects.opt0);
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(projects.select)
}

events.subscribe('projects', events.events, (project) => {
  const opt = document.createElement('option');
        opt.setAttribute('value', project.title);
        opt.textContent = project.title;
  projects.select.appendChild(opt);
})


const notes = {
  textArea: document.createElement('textarea')
}

function appendNotes() {
  notes.textArea.classList.add('notes');
  notes.textArea.setAttribute('placeholder', 'Notes...');
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(notes.textArea);
}

const desc = {
  textArea: document.createElement('textarea')
}

function appendDesc() {
  desc.textArea.classList.add('desc');
  desc.textArea.setAttribute('placeholder', 'Description... (max 75ch)');
  desc.textArea.setAttribute('maxlength', '75');
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(desc.textArea);
}

const dueDate = {
  date: document.createElement('input')
}

function appendDueDate() {
  dueDate.date.setAttribute('type', 'date');
  dueDate.date.setAttribute('id', 'date');
  dueDate.date.setAttribute('name', 'date');
  dueDate.date.classList.add('dateInput');
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(dueDate.date);
}

const time = {
  time: document.createElement('input')
}

function appendTime() {
  time.time.setAttribute('type', 'time');
  time.time.setAttribute('id', 'time');
  time.time.setAttribute('name', 'time');
  time.time.classList.add('time');
  creator.creatorPropInput.textContent = '';
  creator.creatorPropInput.append(time.time);
}

function resetCreator() {
  creator.input.value = '';
  desc.textArea.value = '';
  notes.textArea.value = '';
  dueDate.date.value = '';
  time.time.value = '';
  priority.select.selectedIndex = null;
  projects.select.selectedIndex = null;
}

creator.priority.addEventListener('click', appendPriority);
creator.notes.addEventListener('click', appendNotes);
creator.desc.addEventListener('click', appendDesc);
creator.calendar.addEventListener('click', appendDueDate);
creator.clock.addEventListener('click', appendTime);
creator.project.addEventListener('click', appendProjects);

return {
  creator,
  priority,
  desc,
  notes,
  dueDate,
  time,
  resetCreator,
  appendCreator, 
  projects
}
})()


export default creator;