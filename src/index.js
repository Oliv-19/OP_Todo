import './index.css'
import  Project from './project.js'
import  ProjectDom  from './projectDOM.js'
import  Todo  from './Todo.js'
import TodoDOM from './todoDOM.js'
import localStorageManager from './localStorage.js'

class Index{
    
    constructor(){
        this.form = document.querySelector('.form')
        this.todoForm = document.querySelector('.todoForm')
        this.newPModal = document.querySelector('#newPModal')
        this.newTodoModal = document.querySelector('#newTodoModal')
        this.todosModal= document.querySelector('#todosModal')

        this.closeDialogBtn = document.querySelectorAll('#closeNewP')
        this.addProjectBtn = document.querySelector('.addProject')
        this.projectsDiv = document.querySelector('.projects')
        this.addTodoBtn = document.querySelector('.addTodo')
        
        //this.projectDom = new ProjectDom()
        this.currentProject
        this.projectStorage= new localStorageManager()
    }

    init(){
        this.getProjects()
        this.eventListeners()
        
    }
    getProjects(){
        let projectsArray = this.projectStorage.getProjectsArray()
        let sortedArray = this.projectStorage.sortProjects(projectsArray)

        sortedArray.forEach(project=>{
            let projectDOM = new ProjectDom(project, this.projectStorage)
            projectDOM.render()
        })
    }
    createNewProject(projectName){
        
        let project = new Project(projectName)

        let projectDOM = new ProjectDom(project, this.projectStorage)
        projectDOM.render()

        this.projectStorage.saveProject(project)
        this.openProject()

        
    }
    projectFormHandler(e){
        e.preventDefault()
        let projectName = this.form.children.namedItem('pNameInput')
        let warningMessageSpan = document.querySelector('.warningMessage')

        if(this.projectStorage.getProject(projectName.value) == null){

            warningMessageSpan.textContent=''
            this.createNewProject(projectName.value)
            
            this.newPModal.close()
            this.form.reset()

        }else{
            warningMessageSpan.textContent='This project name already exists'
        }
        
    }
    findProject(projectName){
        let project = this.projectStorage.getProject(projectName)
        
        let projectInstance = new Project(project.name)
        projectInstance.todoList = project.todoList
        for(let i=0; i< projectInstance.todoList.length; i++){
            let todo=projectInstance.todoList[i]
            projectInstance.todoList[i]= new Todo(todo.title, todo.dueDate, todo.priority, todo.checked)
            
        }
        
        return projectInstance
    }
    showTodos(){
        let todoContent= document.querySelector('.todoContent')
        todoContent.textContent = ''

        this.currentProject.todoList.forEach(todo=>{       
            this.todoDom = new TodoDOM(todo, this.projectColor, this.projectStorage, this.currentProject)
            this.todoDom.render()
        })
        
    }
    
    openProject(){
        let projects = document.querySelectorAll('.pcontent')
        projects.forEach(project=>{
            project.addEventListener('click', (e)=>{
                let projectName= project.parentElement.dataset.projectName
                this.projectColor = e.target.parentElement.dataset.color

                this.currentProject = this.findProject(projectName)

                let title= document.querySelector('#pName')
                let todoWindowHead= document.querySelector('.todoWindowHead')
                title.textContent= projectName
                todoWindowHead.style.backgroundColor = this.projectColor

                this.showTodos()
                
                console.log(this.currentProject)
                
                this.todosModal.showModal()
            })
        })
        
        
    }
    addNewTodo(todoTitle, todoDueDate, todoPriority){
        let todo = new Todo(todoTitle, todoDueDate, todoPriority, false)

        this.currentProject.addTodo(todo)

        this.showTodos()
       
        this.projectStorage.saveProject(this.currentProject)
        this.todoForm.reset()
    }
    todoFormHandler(){
        let form= new FormData(this.todoForm)
        let todoTitle = form.get('todoTitleInput')
        let todoDueDate = form.get('todoDueDate')
        let todoPriority = form.get('todoPriority')
        
        this.addNewTodo(todoTitle, todoDueDate, todoPriority)
    }
    closeDialogs(e){
        let currModal = e.target.dataset.dialogId
        this[currModal].close() 
    }

    eventListeners(){
        
        this.addProjectBtn.addEventListener('click',()=>{ 
            this.newPModal.showModal()
        } )
        this.closeDialogBtn.forEach(closeBtn=>{
            closeBtn.addEventListener('click',(e)=>{ 
                this.closeDialogs(e)
            } )
        })
        this.form.addEventListener('submit',(e)=> this.projectFormHandler(e))
        
        this.addTodoBtn.addEventListener('click',()=>{
            this.newTodoModal.showModal()
        } )
        this.todoForm.addEventListener('submit', ()=>{this.todoFormHandler()})

        this.openProject()
        
    }
}

let index = new Index()
index.init()






