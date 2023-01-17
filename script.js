let projects = JSON.parse(localStorage.getItem('projects') || "[]");

for (let i = 0; i < projects.length; i++){
    if (projects[i] == null) continue;
    else{
    const container = document.querySelector('.project-container')
    maker('div', `card${i}`, container)  
    document.querySelector(`.card${i}`).classList.add('card')  
    maker('h3', `title${i}`, document.querySelector(`.card${i}`))
    maker('h3', `desc${i}`, document.querySelector(`.card${i}`))
    maker('h3', `date${i}`, document.querySelector(`.card${i}`))
    maker('h3', `prior${i}`, document.querySelector(`.card${i}`))
    maker('h3', `notes${i}`, document.querySelector(`.card${i}`))
    maker('h3', `completed${i}`, document.querySelector(`.card${i}`))
    maker('button', `viewtasks${i}`, document.querySelector(`.card${i}`))
    maker('button', `edittasks${i}`, document.querySelector(`.card${i}`)) 
    maker('button', `addtasks${i}`, document.querySelector(`.card${i}`)) 
    maker('button', `delproj${i}`, document.querySelector(`.card${i}`)) 
    maker('div',`newtasks${i}`,document.querySelector(`.card${i}`))
    maker('input',`input-tasks${i}`, document.querySelector(`.newtasks${i}`))
    maker('label', `tasklabel${i}`, document.querySelector(`.newtasks${i}`))
    maker('button',`btn-tasks${i}`, document.querySelector(`.newtasks${i}`))
    maker('button',`close-tasks${i}`, document.querySelector(`.newtasks${i}`))
    maker('div', `tasks-menu${i}`, document.querySelector(`.card${i}`))
    maker('button', `close-menu${i}`,document.querySelector(`.tasks-menu${i}`))

    

    document.querySelector(`.close-menu${i}`).textContent = 'Close'
    document.querySelector(`.close-tasks${i}`).textContent = "Close"
    document.querySelector(`.btn-tasks${i}`).textContent = "Add new Task"

    document.querySelector(`.tasks-menu${i}`).style.display = 'none';   
    document.querySelector(`.tasklabel${i}`).textContent = "Enter Your new task"
    document.querySelector(`.newtasks${i}`).style.display = 'none';
    document.querySelector(`.newtasks${i}`).style.bottom = '150px';
    document.querySelector(`.newtasks${i}`).style.right = '-9px';
    document.querySelector(`.newtasks${i}`).style.padding = '20px';
    document.querySelector(`.delproj${i}`).textContent = "Delete"
      
    document.querySelector(`.edittasks${i}`).classList.add('edit-tasks')
    document.querySelector(`.edittasks${i}`).setAttribute('data', i) 
    document.querySelector(`.tasks-menu${i}`).classList.add('tasks-menu')
    document.querySelector(`.newtasks${i}`).classList.add('newtasks')
    document.querySelector(`.delproj${i}`).classList.add('delproj')
    document.querySelector(`.close-menu${i}`).setAttribute('data', i)    
    document.querySelector(`.close-menu${i}`).classList.add('close-menu') 
    document.querySelector(`.addtasks${i}`).classList.add('addtasks')
    document.querySelector(`.addtasks${i}`).setAttribute('data', i)
    document.querySelector(`.viewtasks${i}`).classList.add('viewtasks')
    document.querySelector(`.viewtasks${i}`).setAttribute('data', i)
    document.querySelector(`.delproj${i}`).setAttribute('data', i)



    document.querySelector(`.title${i}`).textContent = `Title: ${projects[i].title}`;
    document.querySelector(`.desc${i}`).textContent = `Description: ${projects[i].desc}`;
    document.querySelector(`.date${i}`).textContent = `Due date: ${projects[i].date}`;
    document.querySelector(`.prior${i}`).textContent = `Priority: ${projects[i].prior}`;
    document.querySelector(`.notes${i}`).textContent = `Notes: ${projects[i].notes}`;
    document.querySelector(`.completed${i}`).textContent = `Completed: ${projects[i].completed}`;
    document.querySelector(`.addtasks${i}`).textContent = 'Add New Task';
    document.querySelector(`.viewtasks${i}`).textContent = 'View Tasks';
    document.querySelector(`.edittasks${i}`).textContent = 'Edit'

    for (let j = 0; j < projects[i].tasks.length; j++){
        maker('p', `task-item${j}`, document.querySelector(`.tasks-menu${i}`))
        document.querySelector(`.tasks-menu${i} > .task-item${j}`).textContent = projects[i].tasks[j]
    }


    document.querySelectorAll('.addtasks').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector(`.newtasks${btn.getAttribute('data')}`).style.display = 'flex';
            document.querySelector(`.input-tasks${btn.getAttribute('data')}`).focus()
        })
        document.querySelector(`.close-tasks${btn.getAttribute('data')}`).addEventListener('click', () => {
            document.querySelector(`.newtasks${btn.getAttribute('data')}`).style.display = 'none';
        })
        document.querySelector(`.btn-tasks${btn.getAttribute('data')}`).addEventListener('click', () => {
            projects[btn.getAttribute('data')].tasks.push(document.querySelector(`.input-tasks${btn.getAttribute('data')}`).value)
                maker('p', `task-item${projects[btn.getAttribute('data')].tasks.length}`, document.querySelector(`.tasks-menu${btn.getAttribute('data')}`))
                document.querySelector(`.tasks-menu${btn.getAttribute('data')} > .task-item${projects[btn.getAttribute('data') ].tasks.length}`).textContent = projects[btn.getAttribute('data')].tasks[projects[btn.getAttribute('data')].tasks.length - 1]
                localStorage.setItem("projects", JSON.stringify(projects));

            document.querySelector(`.input-tasks${btn.getAttribute('data')}`).value = "";
            document.querySelector(`.newtasks${btn.getAttribute('data')}`).style.display = 'none';
        })            
})

        
        document.querySelectorAll('.edit-tasks').forEach(editbtn => {
            editbtn.addEventListener('click', () => {
                if (document.querySelector(`.title${editbtn.getAttribute('data')}`).contentEditable == 'false')
                {
                document.querySelector(`.edittasks${editbtn.getAttribute('data')}`).textContent = 'Done'  
                document.querySelector(`.edittasks${editbtn.getAttribute('data')}`).style.background = 'green'
                document.querySelector(`.title${editbtn.getAttribute('data')}`).contentEditable = true;
                document.querySelector(`.desc${editbtn.getAttribute('data')}`).contentEditable = true;
                document.querySelector(`.date${editbtn.getAttribute('data')}`).contentEditable = true;
                document.querySelector(`.prior${editbtn.getAttribute('data')}`).contentEditable = true;
                document.querySelector(`.notes${editbtn.getAttribute('data')}`).contentEditable = true;
                document.querySelector(`.completed${editbtn.getAttribute('data')}`).contentEditable = true;
                
    

                document.querySelector(`.title${editbtn.getAttribute('data')}`).style.background = 'white';
                document.querySelector(`.desc${editbtn.getAttribute('data')}`).style.background = 'white';
                document.querySelector(`.date${editbtn.getAttribute('data')}`).style.background = 'white';
                document.querySelector(`.prior${editbtn.getAttribute('data')}`).style.background = 'white';
                document.querySelector(`.notes${editbtn.getAttribute('data')}`).style.background = 'white';
                document.querySelector(`.completed${editbtn.getAttribute('data')}`).style.background = 'white';

                }
                else {                    
                document.querySelector(`.edittasks${editbtn.getAttribute('data')}`).textContent = 'Edit'  
                document.querySelector(`.edittasks${editbtn.getAttribute('data')}`).style.background = 'yellow'
                document.querySelector(`.title${editbtn.getAttribute('data')}`).contentEditable = false;
                document.querySelector(`.desc${editbtn.getAttribute('data')}`).contentEditable = false;
                document.querySelector(`.date${editbtn.getAttribute('data')}`).contentEditable = false;
                document.querySelector(`.prior${editbtn.getAttribute('data')}`).contentEditable = false;
                document.querySelector(`.notes${editbtn.getAttribute('data')}`).contentEditable = false;
                document.querySelector(`.completed${editbtn.getAttribute('data')}`).contentEditable = false;
            
                document.querySelector(`.title${editbtn.getAttribute('data')}`).style.background = 'none';
                document.querySelector(`.desc${editbtn.getAttribute('data')}`).style.background = 'none';
                document.querySelector(`.date${editbtn.getAttribute('data')}`).style.background = 'none';
                document.querySelector(`.prior${editbtn.getAttribute('data')}`).style.background = 'none';
                document.querySelector(`.notes${editbtn.getAttribute('data')}`).style.background = 'none';
                document.querySelector(`.completed${editbtn.getAttribute('data')}`).style.background = 'none'; 

                // projects[i].title = document.querySelector(`.title${editbtn.getAttribute('data')}`).textContent;


   
            }
            })
        })

        document.querySelectorAll(`.delproj`).forEach(delbtn => {
            delbtn.addEventListener('click', () => {
                delete projects[delbtn.getAttribute('data')]
                document.querySelector(`.card${delbtn.getAttribute('data')}`).remove()
                localStorage.setItem("projects", JSON.stringify(projects));

            })
        })      
        


        document.querySelectorAll('.viewtasks').forEach(viewbtn => {
            viewbtn.addEventListener('click', () => {
                document.querySelector(`.tasks-menu${viewbtn.getAttribute('data')}`).style.display = 'flex'; 
            })
        })     

        document.querySelectorAll('.close-menu').forEach(closebtn => {
            closebtn.addEventListener('click', () => {
                document.querySelector(`.tasks-menu${closebtn.getAttribute('data')}`).style.display = 'none';
            })
        })
       
        
}}      


let counter = 3; 
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

function validateForm(num) {
    if(document.querySelector('.input-title').value == ""){
        document.querySelector('.input-title').validity.valueMissing
        alert("Enter a title please")
        return false;
    }
    else if(document.querySelector('.input-desc').value == ""){
        alert("Enter a description please")
        return false;
    }
    else if (document.querySelector('.input-date').value == ""){
        alert('please Enter a due date')
        console.log(projects.length)
        return false;
    }
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
    localStorage.setItem("projects", JSON.stringify(projects));

    const length = projects.length - 1;

    maker('div', `card${length}`, container)  
    document.querySelector(`.card${length}`).classList.add('card')  
    maker('h3', `title${length}`, document.querySelector(`.card${length}`))
    maker('h3', `desc${length}`, document.querySelector(`.card${length}`))
    maker('h3', `date${length}`, document.querySelector(`.card${length}`))
    maker('h3', `prior${length}`, document.querySelector(`.card${length}`))
    maker('h3', `notes${length}`, document.querySelector(`.card${length}`))
    maker('h3', `completed${length}`, document.querySelector(`.card${length}`))
    maker('button', `viewtasks${length}`, document.querySelector(`.card${length}`))
    maker('button', `edittasks${length}`, document.querySelector(`.card${length}`)) 
    maker('button', `addtasks${length}`, document.querySelector(`.card${length}`)) 
    maker('button', `delproj${length}`, document.querySelector(`.card${length}`)) 
    maker('div',`newtasks${length}`,document.querySelector(`.card${length}`))
    maker('input',`input-tasks${length}`, document.querySelector(`.newtasks${length}`))
    maker('label', `tasklabel${length}`, document.querySelector(`.newtasks${length}`))
    maker('button',`btn-tasks${length}`, document.querySelector(`.newtasks${length}`))
    maker('button',`close-tasks${length}`, document.querySelector(`.newtasks${length}`))
    maker('div', `tasks-menu${length}`, document.querySelector(`.card${length}`))
    maker('button', `close-menu${length}`,document.querySelector(`.tasks-menu${length}`))

    

    document.querySelector(`.close-menu${length}`).textContent = 'Close'
    document.querySelector(`.close-tasks${length}`).textContent = "Close"
    document.querySelector(`.btn-tasks${length}`).textContent = "Add new Task"

    document.querySelector(`.tasks-menu${length}`).style.display = 'none';   
    document.querySelector(`.tasklabel${length}`).textContent = "Enter Your new task"
    document.querySelector(`.newtasks${length}`).style.display = 'none';
    document.querySelector(`.newtasks${length}`).style.bottom = '150px';
    document.querySelector(`.newtasks${length}`).style.right = '-9px';
    document.querySelector(`.newtasks${length}`).style.padding = '20px';
    document.querySelector(`.delproj${length}`).textContent = "Delete"
      
    document.querySelector(`.edittasks${length}`).classList.add('edit-tasks')
    document.querySelector(`.edittasks${length}`).setAttribute('data', length) 
    document.querySelector(`.tasks-menu${length}`).classList.add('tasks-menu')
    document.querySelector(`.newtasks${length}`).classList.add('newtasks')
    document.querySelector(`.delproj${length}`).classList.add('delproj')
    document.querySelector(`.close-menu${length}`).setAttribute('data', length)    
    document.querySelector(`.close-menu${length}`).classList.add('close-menu') 
    document.querySelector(`.addtasks${length}`).classList.add('addtasks')
    document.querySelector(`.addtasks${length}`).setAttribute('data', length)
    document.querySelector(`.viewtasks${length}`).classList.add('viewtasks')
    document.querySelector(`.viewtasks${length}`).setAttribute('data', length)
    document.querySelector(`.delproj${length}`).setAttribute('data', length)



    document.querySelector(`.title${length}`).textContent = `Title: ${projects[length].title}`;
    document.querySelector(`.desc${length}`).textContent = `Description: ${projects[length].desc}`;
    document.querySelector(`.date${length}`).textContent = `Due date: ${projects[length].date}`;
    document.querySelector(`.prior${length}`).textContent = `Priority: ${projects[length].prior}`;
    document.querySelector(`.notes${length}`).textContent = `Notes: ${projects[length].notes}`;
    document.querySelector(`.completed${length}`).textContent = `Completed: ${projects[length].completed}`;
    document.querySelector(`.addtasks${length}`).textContent = 'Add New Task';
    document.querySelector(`.viewtasks${length}`).textContent = 'View Tasks';
    document.querySelector(`.edittasks${length}`).textContent = 'Edit'


    document.querySelector('.input-title').value = "";
    document.querySelector('.input-desc').value = "";
    document.querySelector('.input-date').value = "";
    document.querySelector('.input-prior').value = "";
    document.querySelector('.input-note').value = "";
        
}


document.querySelector('.new-btn').addEventListener('click', () => {
    document.querySelector('.new-form').style.display = "flex";
    document.querySelector('.input-title').focus()

})

document.querySelector('.create-todo').addEventListener('click', () => {      
    if (validateForm() === false) return;    
    else
    {
    domProject()
    document.querySelector('.new-form').style.display = "none";
}

    document.querySelectorAll('.addtasks').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector(`.newtasks${btn.getAttribute('data')}`).style.display = 'flex';
            document.querySelector(`.input-tasks${btn.getAttribute('data')}`).focus()
        })
        document.querySelector(`.close-tasks${btn.getAttribute('data')}`).addEventListener('click', () => {
            document.querySelector(`.newtasks${btn.getAttribute('data')}`).style.display = 'none';
        })
        document.querySelector(`.btn-tasks${btn.getAttribute('data')}`).addEventListener('click', () => {
            projects[btn.getAttribute('data')].tasks.push(document.querySelector(`.input-tasks${btn.getAttribute('data')}`).value)
                maker('p', `task-item${projects[btn.getAttribute('data')].tasks.length}`, document.querySelector(`.tasks-menu${btn.getAttribute('data')}`))
                document.querySelector(`.tasks-menu${btn.getAttribute('data')} > .task-item${projects[btn.getAttribute('data')].tasks.length}`).textContent = projects[btn.getAttribute('data')].tasks[projects[btn.getAttribute('data')].tasks.length - 1]
                localStorage.setItem("projects", JSON.stringify(projects));


            document.querySelector(`.input-tasks${btn.getAttribute('data')}`).value = "";
            document.querySelector(`.newtasks${btn.getAttribute('data')}`).style.display = 'none';
        })            
})

        
        document.querySelectorAll('.edit-tasks').forEach(editbtn => {
            editbtn.addEventListener('click', () => {
                if (document.querySelector(`.title${editbtn.getAttribute('data')}`).contentEditable == 'inherit' || document.querySelector(`.title${editbtn.getAttribute('data')}`).contentEditable == 'false')
                {
                document.querySelector(`.edittasks${editbtn.getAttribute('data')}`).textContent = 'Done'  
                document.querySelector(`.edittasks${editbtn.getAttribute('data')}`).style.background = 'green'
                document.querySelector(`.title${editbtn.getAttribute('data')}`).contentEditable = true;
                document.querySelector(`.desc${editbtn.getAttribute('data')}`).contentEditable = true;
                document.querySelector(`.date${editbtn.getAttribute('data')}`).contentEditable = true;
                document.querySelector(`.prior${editbtn.getAttribute('data')}`).contentEditable = true;
                document.querySelector(`.notes${editbtn.getAttribute('data')}`).contentEditable = true;
                document.querySelector(`.completed${editbtn.getAttribute('data')}`).contentEditable = true;

                document.querySelector(`.title${editbtn.getAttribute('data')}`).style.background = 'white';
                document.querySelector(`.desc${editbtn.getAttribute('data')}`).style.background = 'white';
                document.querySelector(`.date${editbtn.getAttribute('data')}`).style.background = 'white';
                document.querySelector(`.prior${editbtn.getAttribute('data')}`).style.background = 'white';
                document.querySelector(`.notes${editbtn.getAttribute('data')}`).style.background = 'white';
                document.querySelector(`.completed${editbtn.getAttribute('data')}`).style.background = 'white';
                }
                else {
                document.querySelector(`.edittasks${editbtn.getAttribute('data')}`).textContent = 'Edit'  
                document.querySelector(`.edittasks${editbtn.getAttribute('data')}`).style.background = 'yellow'
                document.querySelector(`.title${editbtn.getAttribute('data')}`).contentEditable = false;
                document.querySelector(`.desc${editbtn.getAttribute('data')}`).contentEditable = false;
                document.querySelector(`.date${editbtn.getAttribute('data')}`).contentEditable = false;
                document.querySelector(`.prior${editbtn.getAttribute('data')}`).contentEditable = false;
                document.querySelector(`.notes${editbtn.getAttribute('data')}`).contentEditable = false;
                document.querySelector(`.completed${editbtn.getAttribute('data')}`).contentEditable = false;
            
                document.querySelector(`.title${editbtn.getAttribute('data')}`).style.background = 'none';
                document.querySelector(`.desc${editbtn.getAttribute('data')}`).style.background = 'none';
                document.querySelector(`.date${editbtn.getAttribute('data')}`).style.background = 'none';
                document.querySelector(`.prior${editbtn.getAttribute('data')}`).style.background = 'none';
                document.querySelector(`.notes${editbtn.getAttribute('data')}`).style.background = 'none';
                document.querySelector(`.completed${editbtn.getAttribute('data')}`).style.background = 'none';    
            }
            })
        })

        document.querySelectorAll(`.delproj`).forEach(delbtn => {
            delbtn.addEventListener('click', () => {
                delete projects[delbtn.getAttribute('data') -1]
                document.querySelector(`.card${delbtn.getAttribute('data')}`).remove()
            })
        })      
        


        document.querySelectorAll('.viewtasks').forEach(viewbtn => {
            viewbtn.addEventListener('click', () => {
                document.querySelector(`.tasks-menu${viewbtn.getAttribute('data')}`).style.display = 'flex'; 
            })
        })     

        document.querySelectorAll('.close-menu').forEach(closebtn => {
            closebtn.addEventListener('click', () => {
                document.querySelector(`.tasks-menu${closebtn.getAttribute('data')}`).style.display = 'none';
            })
        })
       
        
})




document.querySelector('.close-form').addEventListener('click', () => {
    document.querySelector('.new-form').style.display = "none";
})