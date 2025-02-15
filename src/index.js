import './index.css'
import { format } from "date-fns";
import  Project from './project.js'
import  ProjectDom  from './projectDOM.js'
import  Todo  from './Todo.js'
import TodoDOM from './todoDOM.js'
import localStorageManager from './localStorage.js'
import {events} from './pubsub.js'
import formHandler from './forms.js'

class Index{
    
    constructor(){
        this.form = document.querySelector('.form')
        this.todoForm = document.querySelector('.todoForm')
        this.newPModal = document.querySelector('#newPModal')
        this.newTodoModal = document.querySelector('#newTodoModal')
        this.todosModal= document.querySelector('#todosModal')

        this.closeNewProjectBtn = document.querySelector('.closeNewP')
        this.closeDialogBtn = document.querySelectorAll('#closeNewP')
        this.addProjectBtn = document.querySelector('.addProject')
        this.projectsDiv = document.querySelector('.projects')
        this.addTodoBtn = document.querySelector('.addTodo')
        
        //this.projectDom = new ProjectDom()
        this.currentProject
        //this.currentProjectDom
        this.projectStorage= new localStorageManager()
        this.formHandler= new formHandler(this.projectStorage, Project, Todo)
    }
    init(){
        this.getProjects()
        this.eventListeners()

    }
    defaultProject(){
        let curDate= format(new Date(), 'yyyy-MM-dd HH:mm:ss')
        let defaultProject = new Project('Default Project', curDate)
        defaultProject.assignProjectColor()

        let defaultTodo = new Todo('Create more projects', "2026-01-01", 'High', false)
        defaultProject.addTodo(defaultTodo)
        this.projectStorage.saveProject(defaultProject)

        let projectDOM = new ProjectDom(defaultProject, this.projectStorage, this.formHandler, this.createTodosDOM)
        projectDOM.render()

    }

    getProjects(){
        let projectsArray = this.projectStorage.getProjectsArray()
        let sortedArray = this.projectStorage.sortProjects(projectsArray)
        if (sortedArray.length == 0) { 
            this.defaultProject() 
        }
        sortedArray.forEach(project=>{
            let projectInstance = new Project(project.name, project.createdDate, project.projectColor)
            projectInstance.todoList = project.todoList
            for(let i=0; i< projectInstance.todoList.length; i++){
                let todo=projectInstance.todoList[i]
                projectInstance.todoList[i]= new Todo(todo.title, todo.dueDate, todo.priority, todo.checked)
            }
            let projectDOM = new ProjectDom(projectInstance, this.projectStorage, this.formHandler, this.createTodosDOM)
            projectDOM.render()
        })
    }
    createNewProject(e){
        e.preventDefault()
        let project = this.formHandler.projectFormHandler()
        project.assignProjectColor()
        let projectDOM = new ProjectDom(project, this.projectStorage, this.formHandler, this.createTodosDOM)
        projectDOM.render()

        this.projectStorage.saveProject(project)
        return project
        
    }
    createTodosDOM(currentProject){
        let todoContent= document.querySelector('.todoContent')
        todoContent.textContent = ''
        if(currentProject.todoList.length==0){
            let emptyProject= document.querySelector('#emptyProject').content.cloneNode(true)
            emptyProject.children[0].style.fill=currentProject.projectColor
            todoContent.append(emptyProject)
        }else{
            currentProject.todoList.forEach(todo=>{     
                this.todoDom = new TodoDOM(todo,this.projectStorage, currentProject , this.curProjectDiv)
                this.todoDom.render()
            })
        }
        
    }
    eventListeners(){
        
        this.addProjectBtn.addEventListener('click',()=> {this.newPModal.showModal()} )
        this.closeNewProjectBtn.addEventListener('click', ()=> {this.newPModal.close()})
        this.form.addEventListener('submit',(e)=> this.createNewProject(e))
        
    }
}

let index = new Index()
index.init()






