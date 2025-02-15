import { format } from "date-fns";

export default class formHandler{
    constructor(projectStorage, project, todo){
        this.project=project
        this.todo=todo
        this.projectStorage=projectStorage
        this.NewProjectform = document.querySelector('.form')
        
        this.newPModal = document.querySelector('#newPModal')
        this.newTodoModal = document.querySelector('#newTodoModal')
       
    }
    projectFormHandler(){
        //e.preventDefault()
        let form = new FormData(this.NewProjectform)
        let formObject = {
            "name": form.get("pNameInput"),
            "createdDate": format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        }
        
        //console.log(formObject)
        // let projectName = this.NewProjectform.children.namedItem('pNameInput')
        let warningMessageSpan = document.querySelector('.warningMessage')

        if(this.projectStorage.getProject(formObject.name) == null){

            warningMessageSpan.textContent=''
            //this.createNewProject(projectName.value)
            this.newPModal.close()
            this.NewProjectform.reset()
        }
        else {
            warningMessageSpan.textContent='This project name already exists'
        }
        
        return new this.project(formObject.name, formObject.createdDate)
    }
    todoFormHandler(){
        console.log('yes')
        let todoForm = document.querySelector('.todoForm')
        
        let form= new FormData(todoForm)
        let todoObj={
            todoTitle : form.get('todoTitleInput'),
            todoDueDate : form.get('todoDueDate'),
            todoPriority : form.get('todoPriority'),
        }
        this.newTodoModal.close()
        todoForm.reset()
        return new this.todo(todoObj.todoTitle, todoObj.todoDueDate, todoObj.todoPriority, false)
        
        //this.addNewTodo(todoTitle, todoDueDate, todoPriority)
    }
    todoFormHandlerTest(){
        console.log('yes')
        let todoForm = document.querySelector('.todoFormTest')
        
        let form= new FormData(todoForm)
        let todoObj={
            todoTitle : form.get('todoTitleInputTest'),
            todoDueDate : form.get('todoDueDateTest'),
            todoPriority : form.get('todoPriorityTest'),
        }
        //this.newTodoModal.close()
        console.log(todoObj)
        todoForm.reset()
        return new this.todo(todoObj.todoTitle, todoObj.todoDueDate, todoObj.todoPriority, false)
        
        //this.addNewTodo(todoTitle, todoDueDate, todoPriority)
    }
}