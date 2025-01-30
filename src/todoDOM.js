
export default class TodoDOM{
  constructor(todoObj, projectStorage, currProject){
      this.todo = todoObj
      this.projectStorage = projectStorage
      this.currProject = currProject
      this.projectColor = this.currProject.projectColor
    
      this.todoContent= document.querySelector('.todoContent')

      this.todosTemplate = document.querySelector('#todosTemplate').content.cloneNode(true)
      this.todoBox= this.todosTemplate.querySelector('#todoBox')
      this.todoCheck= this.todosTemplate.querySelector('.checkbox')
      this.todoCheckLabel= this.todosTemplate.querySelector('.checkboxLabel')
      this.todoDate= this.todosTemplate.querySelector('#todoDate')
      this.todoPriority= this.todosTemplate.querySelector('#todoPriority')
      this.todoDel= this.todosTemplate.querySelector('#todoDel')
      
  }
  checkTodoHandler(){
      if(this.todo.checked == true){
        this.todoCheck.disabled= true
      }else{
        this.todoCheck.addEventListener('click',(e)=>{
            if(e.target.checked){
                this.todo.checkTodo()
                this.todoCheck.disabled= true
                this.projectStorage.saveProject(this.currProject)
            }
          })
        }
  }
  deleteTodoHandler(){
    this.todoDel.addEventListener('click',()=>{
        console.log(this.todoDel)
              
          this.currProject.deleteTodo(this.todo)
          this.todoBox.remove()
          this.projectStorage.saveProject(this.currProject)
      })
  }
  render(){
    this.todoBox.title=this.todo.title
    this.todoBox.style.background= this.projectColor
    this.todoBox.dataset.todoTitle=this.todo.title
    this.todoCheck.id=this.todo.title
    this.todoCheckLabel.htmlFor=this.todo.title

    this.todoCheckLabel.textContent=this.todo.title
    this.todoDate.textContent=this.todo.dueDate
    this.todoPriority.textContent=this.todo.priority

    this.todoCheck.disabled = this.todo.checked

    this.todoContent.prepend(this.todosTemplate)
  
    this.checkTodoHandler()
    this.deleteTodoHandler()
  }
  
}