import project from './project.js';
import dom from './dom.js';
import events from './pubSub.js';
import creator from './creator.js';
import handler from './appHandler.js';

const handleTasks = (function() {
  class Task {
    constructor(title, description, dueDate, time, priority = 'Low', notes, project = 'Inbox', ...checkList) {
      this.title = title;
      this.description =  description;
      this.dueDate =  dueDate;
      this.time =  time;
      this.priority =  priority;
      this.notes =  notes;
      this.project = project;
      this.checkList = checkList;
      this.isComplete =  false;
    }
  }

  const tasks = [];
  let newTask = new Task;

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

  function setProject() {
    newTask.project = creator.projects.select.value;
  }
  
  function addTask() {
    if(newTask.title !== undefined) {
      tasks.push(newTask);
      events.publish('tasks', tasks);
      project.projects.forEach((p) => {
        if(p.title == newTask.project) {
          p.tasks.push(newTask);
          project.saveToLocalStorage();
          console.log(project.projects)
        }
      })
      saveToLocalStorage();
      handler.filterInbox();
      newTask = new Task;
      creator.resetCreator();
      creator.creator.creatorBg.remove();
      removeEvents();
    } else {
      alert('Fill in the fields')
    }
  }

  function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function retrieveFromLocalStorage() {
    const tasksArray = JSON.parse(localStorage.getItem('tasks'));
    if(tasksArray !== null) {
    tasksArray.forEach((task) => {
      tasks.push(task);
    })
  }
  }

  window.addEventListener('load', () => {
    retrieveFromLocalStorage();
    handler.filterInbox();
  })

  function cancelAdd() {
    creator.creator.creatorBg.remove();
    creator.resetCreator();
    removeEvents();
    newTask = new Task;
  }
  
  function activateEvents() {
    creator.appendCreator();
    creator.creator.input.addEventListener('change', setTitle);
    creator.desc.textArea.addEventListener('change', setDescription);
    creator.dueDate.date.addEventListener('change', setDate);
    creator.time.time.addEventListener('change', setTime)
    creator.priority.select.addEventListener('change', setPriority);
    creator.projects.select.addEventListener('change', setProject);
    creator.notes.textArea.addEventListener('change', setNotes);
    creator.creator.cancelBtn.addEventListener('click', cancelAdd);
    creator.creator.addBtn.addEventListener('click', addTask);
  }

  function removeEvents() {
    creator.creator.input.removeEventListener('change', setTitle);
    creator.desc.textArea.removeEventListener('change', setDescription);
    creator.dueDate.date.removeEventListener('change', setDate);
    creator.time.time.removeEventListener('change', setTime)
    creator.priority.select.removeEventListener('change', setPriority);
    creator.notes.textArea.removeEventListener('change',  setNotes);
    creator.creator.cancelBtn.removeEventListener('click', cancelAdd);
    creator.creator.addBtn.removeEventListener('click', addTask);
  }

  const wrappers = [];

  events.subscribe('taskWrapper', events.events, (wrapper) => {
    wrappers.push(wrapper);
    wrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', (event) => {
        tasks.forEach((task) => {
          if(event.target.outerText === task.title) {
            dom.select.tasksContainer.textContent = '';
            dom.openProjectTask(task.title, task.description, task.dueDate, task.priority, task.notes);
            dom.select.tasksContainer.style.display = 'none';
            dom.select.checklistDiv.style.display = 'block';
            filterCheckList();
            events.publish('openTask', '');
          }
        })
      })
    })
  });

  class Todo {
    constructor(title, priority) {
      this.title = title;
      this.priority = priority;
    }
  }

  let todo = new Todo;
  const p = document.createElement('p');

  function addTodo() {
    todo.priority = creator.priority.select.value;
    todo.title = creator.creator.input.value;
    tasks.forEach((task) => {
      if(dom.select.title.textContent === task.title) {
        task.checkList.push(todo);
      }
    });
    saveToLocalStorage();
    dom.appendTasks(todo.title, todo.priority, '', dom.select.checklistDiv);
    p.remove()
    creator.creator.cancelBtn.removeEventListener('click', cancelAdd);
    creator.creator.addBtn.removeEventListener('click', addTodo);
    todo = new Todo;
  }

  function filterCheckList() {
    tasks.forEach((task) => {
      if(dom.select.title.textContent === task.title) {
        if(task.checkList.length > 0) {
          task.checkList.forEach((todo) => {
            dom.appendTasks(todo.title, todo.priority, '', dom.select.checklistDiv);
          });
          const todos = document.querySelectorAll('.checklist .task');
          todos.forEach((t)=> {
            t.addEventListener('click', () => {
              dom.createLine(t);
            })
          })
        } else {
            p.textContent = "You don't have any todo for this task"
            dom.select.checklistDiv.append(p)
        }
      }
    })
  }

  function addToChecklist() {
    creator.resetCreator();
    creator.appendCreator();
    creator.creator.project.remove();
    
    creator.creator.cancelBtn.addEventListener('click', cancelAdd);
    creator.creator.addBtn.addEventListener('click', addTodo);
  }

  dom.select.checklistBtn.addEventListener('click', addToChecklist);

  function editDescription() {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        task.description = dom.select.descriptionInput.value;
        saveToLocalStorage();
        console.log(tasks)
      }
    })
  }

  function editDeadline() {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        task.dueDate = dom.select.deadlineInput.value;
        saveToLocalStorage();
        console.log(tasks)
      }
    })
  }

  function editPriority() {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        task.priority = dom.select.priorityInput.value;
        saveToLocalStorage();
        console.log(tasks)
      }
    })
  }

  function editNotes() {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        task.notes = dom.select.notesInput.value;
        saveToLocalStorage();
        console.log(tasks)
      }
    })
  }

  function checkFinish(event) {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        if(event.target.checked === true) {
          task.isComplete = true;
        } else {
            task.isComplete = false;
        }
        saveToLocalStorage();
        console.log(tasks)
      }
    })
  }

  function deleteTask() {
    tasks.forEach((task) => {
      if(task.title === dom.select.title.textContent) {
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
        saveToLocalStorage();
        window.location.reload();
      }
    })
  }

  dom.select.addTaskBtn.addEventListener('click', activateEvents);

  return{tasks, removeEvents, Task, addTask,  editDescription, editDeadline, editPriority, editNotes, checkFinish, deleteTask}
})()

export default handleTasks;
