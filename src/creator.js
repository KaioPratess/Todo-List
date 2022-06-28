import notesWhite from './img/notes-white.svg';
import descWhite from './img/description-white.svg';
import projectWhite from './img/project-white.svg';
import calendarWhite from './img/calendar-white.svg';
import flagWhite from './img/flag-white.svg';
import checklistWhite from './img/checklist-white.svg';
import notesBlack from './img/notes-black.svg';
import descBlack from './img/description-black.svg';
import projectBlack from './img/project-black.svg';
import calendarBlack from './img/calendar2-black.svg';
import flagBlack from './img/flag-black.svg';
import checklistBlack from './img/checklist-black.svg';
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
}

function appendCreator () {
  creator.creatorBg.classList.add('add-creator-bg')

  creator.creatorContainer.classList.add('add-creator-container');

  creator.input.setAttribute('id', 'creator');
  creator.input.setAttribute('name', 'creator');
  creator.input.classList.add('creator-input');

  creator.creatorProp.classList.add('creator-properties');

  creator.creatorPropInput.classList.add('creator-prop-input');
  creator.creatorPropInput.textContent = '';

  if(dom.select.pageStructure.classList.contains('light')) {
    creator.notes.src = notesBlack;
    creator.desc.src = descBlack;
    creator.project.src = projectBlack;
    creator.calendar.src = calendarBlack;
    creator.priority.src = flagBlack;
  } else {
      creator.notes.src = notesWhite;
      creator.desc.src = descWhite;
      creator.project.src = projectWhite;
      creator.calendar.src = calendarWhite;
      creator.priority.src = flagWhite;
  }

  creator.cancelBtn.setAttribute('type', 'button');
  creator.cancelBtn.textContent = 'Cancel';
  creator.cancelBtn.classList.add('btn');
  creator.cancelBtn.classList.add('cancel');

  creator.addBtn.setAttribute('type', 'button');
  creator.addBtn.textContent = 'Save';
  creator.addBtn.classList.add('btn');
  creator.addBtn.classList.add('add');
  
  creator.notes.classList.add('icon');
  creator.notes.setAttribute('alt', 'notes');

  creator.desc.classList.add('icon');
  creator.desc.setAttribute('alt', 'desc');

  creator.project.classList.add('icon');
  creator.project.setAttribute('alt', 'project');

  creator.calendar.classList.add('icon');
  creator.calendar.setAttribute('alt', 'calendar');

  creator.priority.classList.add('icon');
  creator.priority.setAttribute('alt', 'priority');

  creator.creatorProp.append(creator.creatorPropInput, creator.desc, creator.calendar, creator.priority,  creator.notes, creator.project, creator.cancelBtn, creator.addBtn);
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