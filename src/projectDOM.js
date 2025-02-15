
let ver= 1
export default class ProjectDom {
    constructor(projectObj, projectStorage, formHandler, createTodosDOM){
        this.project= projectObj
        this.projectStorage= projectStorage
        this.formHandler=formHandler
        this.createTodosDOM=createTodosDOM

        this.projectsDiv = document.querySelector('.projects')

        this.projectTemplate = document.querySelector('#template').content.cloneNode(true)
        
        this.pContainer= this.projectTemplate.querySelector('#pContainer')
        this.todosDiv= this.projectTemplate.querySelector('.pcontent')
        this.windowHead =this.projectTemplate.querySelector('.windowHead')
        this.pTitle =this.projectTemplate.querySelector('#pTitle')
        this.todoContainer =this.projectTemplate.querySelectorAll('.todoContainer')
        this.todoTitle =this.projectTemplate.querySelectorAll('.todoTitle')
        this.delBtn= this.projectTemplate.querySelector('#delProjectBtn')

        this.todosModal= document.querySelector('#todosModal')
        this.newTodoModal = document.querySelector('#newTodoModal')

        this.closeProjectBtn= document.querySelector('.closeProjectBtn')
        this.addTodoBtn = document.querySelector('.addTodo')
        this.todoForm = document.querySelector('.todoForm')
        this.closeFormBtn= this.newTodoModal.querySelector('.closeNewTodo')

        this.todoFormTest=document.querySelector('.todoFormTest')
        this.eventsListeners()
    }
    eventsListeners(){
      this.todosDiv.addEventListener('click', ()=>this.openProject())
      this.delBtn.addEventListener('click', ()=>this.deleteProject())
      
    }
    projectEventListeners(){
      this.addTodoBtn.addEventListener('click', this.TodoModalEventListeners)
      this.closeProjectBtn.addEventListener('click', this.closeProject)
      this.todosModal.addEventListener('keydown', this.closeProject)
    }
    TodoModalEventListeners = () => {
      this.newTodoModal.showModal()
      this.closeFormBtn.addEventListener('click',()=> this.newTodoModal.close())
      this.todoForm.addEventListener('submit', this.saveNewTodoHandler)
    }
    saveNewTodoHandler=(e)=>{
      e.preventDefault()
      //let testDiv=document.querySelector('.newTodoTest')
      let todo= this.formHandler.todoFormHandler()
      this.project.addTodo(todo)
      this.createTodosDOM(this.project)

      this.projectStorage.saveProject(this.project)
      this.renderTodosName()
      this.updateTodosName()

      //testDiv.classList.remove('showForm') 
      this.todoForm.removeEventListener('submit', this.saveNewTodoHandler);  
      
    }
    renderTodosName(){
      for(let i= 0; i<3; i++){
        this.todoTitle[i].textContent =''
        this.todoTitle[i].classList ='todoTitle'
      }
      if(this.project.todoList.length> 0){
        let threeTodos= this.project.todoList.slice(0, 3)
        
        threeTodos.forEach((todo, i)=>{
          this.todoTitle[i].textContent = todo.title 
          if(this.project.todoList[i].checked == true){
            this.todoTitle[i].classList= 'checkedTodo'
          }
        })
      }
     
    }
    closeProject=(e)=>{
      if(e.code =='Escape' || e.type == 'click'){
        this.todoForm.removeEventListener('submit', this.saveNewTodoHandler);  
        this.addTodoBtn.removeEventListener('click', this.TodoModalEventListeners)
        this.todosModal.removeEventListener('keydown', this.closeProject)
        this.closeProjectBtn.removeEventListener('click', this.closeProject)
        this.todosModal.close()
      }

    }
    updateTodosName(){
      let delTodoBtn= this.todosModal.querySelectorAll('#todoDel')
      let todoCheck= this.todosModal.querySelectorAll('.checkbox')
      let btns= [delTodoBtn, todoCheck]
      btns.forEach(elem=>{
        elem.forEach(btn=>{
          btn.addEventListener('click', ()=>{
            this.renderTodosName()
          })
         })
      })
    }
    openProject(){
          let title= document.querySelector('#pName')
          let todoWindowHead= document.querySelector('.todoWindowHead')
          title.textContent= this.project.name
          todoWindowHead.style.backgroundColor = this.project.projectColor
         
          this.createTodosDOM(this.project)
          this.updateTodosName()
          this.todosModal.showModal()
         this.projectEventListeners()
         
        
    }
    deleteProject(){
      this.projectStorage.deleteProject(this.project.name)
      this.pContainer.remove() 
    }
    render(){
      this.pContainer.dataset.projectName= this.project.name
      
      if(ver > 4){
        ver= 1
      } 
      this.pContainer.classList.add('v'+ ver) 
      ver+=1

      this.pTitle.textContent= this.project.name

      this.windowHead.style.background = this.project.projectColor

      this.todoContainer.forEach(element => {
        element.style.background = this.project.projectColor
        
      });
      this.renderTodosName()
      this.projectsDiv.prepend(this.projectTemplate)
    } 
}

