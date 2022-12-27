const projects = [];

function maker(elem, cls, dom){
    const element = document.createElement(elem)
    element.classList.add(cls)
    dom.appendChild(element)
}

function Project(title, desc, date, prior, notes, completed, ...tasks){
    this.title = title;  
    this.desc = desc;
    this.date = date;
    this.prior = prior;
    this.notes = notes;
    this.completed = completed;
    this.tasks = tasks;
}

function createProject(title, desc, date, prior, notes, completed){
    const proj = new Project(title, desc, date, prior, notes, completed)
    return proj;
}

function domProject(){
  const container = document.querySelector('.project-container')
  const title = document.querySelector('.input-title').value
    const desc = document.querySelector('.input-desc').value
    const date = document.querySelector('.input-date').value
    const prior = document.querySelector('.input-prior').value
    const notes = document.querySelector('.input-note').value
    const completed = document.getElementsByName('complete') 
    let radio = "";         
        for(i = 0; i < completed.length; i++) {
            if(completed[i].checked){radio = completed[i].value}
        }
    projects.push(new Project(title, desc, date, prior, notes, radio))    
    const length = document.querySelectorAll('.card').length

    maker('div', `card${length}`, container)  
    document.querySelector(`.card${length}`).classList.add('card')  
    maker('h3', `title${length}`, document.querySelector(`.card${length}`))
    maker('h3', `desc${length}`, document.querySelector(`.card${length}`))
    maker('h3', `date${length}`, document.querySelector(`.card${length}`))
    maker('h3', `prior${length}`, document.querySelector(`.card${length}`))
    maker('h3', `notes${length}`, document.querySelector(`.card${length}`))
    maker('h3', `completed${length}`, document.querySelector(`.card${length}`))
    maker('button', `addtasks${length}`, document.querySelector(`.card${length}`))
    maker('button', `viewtasks${length}`, document.querySelector(`.card${length}`))
    maker('div',`newtasks${length}`,document.querySelector(`.card${length}`))
    maker('input',`input-tasks${length}`, document.querySelector(`.newtasks${length}`))
    maker('label', `tasklabel${length}`, document.querySelector(`.newtasks${length}`))
    maker('button',`btn-tasks${length}`, document.querySelector(`.newtasks${length}`))
    maker('button',`close-tasks${length}`, document.querySelector(`.newtasks${length}`))
    maker('div', `tasks-menu${length}`, document.querySelector(`.card${length}`))
    


    document.querySelector(`.close-tasks${length}`).textContent = "Close"
    document.querySelector(`.btn-tasks${length}`).textContent = "Add new Task"

    document.querySelector(`.tasks-menu${length}`).style.display = 'none';    
    document.querySelector(`.tasklabel${length}`).textContent = "Enter Your new task"
    document.querySelector(`.newtasks${length}`).style.display = 'none';
    document.querySelector(`.newtasks${length}`).style.position = 'absolute';
    document.querySelector(`.newtasks${length}`).style.background = 'red';
    document.querySelector(`.newtasks${length}`).style.bottom = '150px';
    document.querySelector(`.newtasks${length}`).style.right = '-9px';
    document.querySelector(`.newtasks${length}`).style.padding = '20px';




    document.querySelector(`.addtasks${length}`).classList.add('addtasks')
    document.querySelector(`.addtasks${length}`).setAttribute('data', length)
    document.querySelector(`.viewtasks${length}`).classList.add('viewtasks')
    document.querySelector(`.viewtasks${length}`).setAttribute('data', length)


    
    document.querySelector(`.title${length}`).textContent = `Title: ${projects[length].title}`;
    document.querySelector(`.desc${length}`).textContent = `Description: ${projects[length].desc}`;
    document.querySelector(`.date${length}`).textContent = `Due date: ${projects[length].date}`;
    document.querySelector(`.prior${length}`).textContent = `Priority: ${projects[length].prior}`;
    document.querySelector(`.notes${length}`).textContent = `Notes: ${projects[length].notes}`;
    document.querySelector(`.completed${length}`).textContent = `Completed: ${projects[length].completed}`;
    document.querySelector(`.addtasks${length}`).textContent = 'Add New Task';
    document.querySelector(`.viewtasks${length}`).textContent = 'View Tasks';

    document.querySelector('.input-title').value = "";
    document.querySelector('.input-desc').value = "";
    document.querySelector('.input-date').value = "";
    document.querySelector('.input-prior').value = "";
    document.querySelector('.input-note').value = "";
        
}    





document.querySelector('.new-btn').addEventListener('click', () => {
    document.querySelector('.input-prior').setAttribute('max', document.querySelectorAll('.card').length + 1);
    document.querySelector('.new-form').style.display = "flex";
})

document.querySelector('.create-todo').addEventListener('click', () => {    
    document.querySelector('.new-form').style.display = "none";
    domProject()

    document.querySelectorAll('.addtasks').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector(`.newtasks${btn.getAttribute('data')}`).style.display = 'block';
        })
        document.querySelector(`.close-tasks${btn.getAttribute('data')}`).addEventListener('click', () => {
            document.querySelector(`.newtasks${btn.getAttribute('data')}`).style.display = 'none';
        })
        document.querySelector(`.btn-tasks${btn.getAttribute('data')}`).addEventListener('click', () => {
            projects[btn.getAttribute('data')].tasks.push(document.querySelector(`.input-tasks${btn.getAttribute('data')}`).value)

                maker('p', `task-item${projects[btn.getAttribute('data')].tasks.length}`, document.querySelector(`.tasks-menu${btn.getAttribute('data')}`))
                console.log(`.task-item${projects[btn.getAttribute('data')].tasks.length}`)
                document.querySelector(`.task-item${projects[btn.getAttribute('data')].tasks.length}`).innerHTML = projects[btn.getAttribute('data')].tasks[projects[btn.getAttribute('data')].tasks.length - 1]

            document.querySelector(`.input-tasks${btn.getAttribute('data')}`).value = "";
            document.querySelector(`.newtasks${btn.getAttribute('data')}`).style.display = 'none';
        })    
        document.querySelector(`.viewtasks${btn.getAttribute('data')}`).addEventListener('click', () => {
            console.log(document.querySelector(`.viewtasks${btn.getAttribute('data')}`))
            if (document.querySelector(`.tasks-menu${btn.getAttribute('data')}`).style.display === 'none'){
            document.querySelector(`.tasks-menu${btn.getAttribute('data')}`).style.display = 'block';}
            else {document.querySelector(`.tasks-menu${btn.getAttribute('data')}`).style.display = 'none'}
    }) 
})
})



document.querySelector('.close-form').addEventListener('click', () => {
    document.querySelector('.new-form').style.display = "none";
})

