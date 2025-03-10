
export default class TodoDOM{
  constructor(todoObj, projectStorage, currProject, curProjectDiv){
      this.todo = todoObj
      this.projectStorage = projectStorage
      this.currProject = currProject
      this.curProjectDiv= curProjectDiv
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
  dueDateHandler(){
    let gray='#999999'
    if(this.todo.checkDueDate()== true && this.todo.checked == false){
      this.todoBox.style.background= gray
      this.todoBox.classList= 'finished'
      this.todoDate.classList= 'dueDateToday'
      this.todoCheck.classList='hidden'
    }else if(this.todo.checkDueDate()== true && this.todo.checked == true){
      
    }
  }
  checkTodoHandler(){
      if(this.todo.checked == true){
        this.todoCheck.disabled= true
        this.todoPriority.classList= 'finished'
        this.todoDate.classList= 'finished'
        this.todoBox.style.background= '#b9b9b9'
      }else{
        this.todoCheck.addEventListener('click',(e)=>{
            if(e.target.checked){
                this.todo.checkTodo()
                this.todoCheck.disabled= true
                this.todoPriority.classList= 'finished'
                this.todoDate.classList= 'finished'
                this.todoBox.style.background= '#b9b9b9'
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
          
          
          if(this.currProject.todoList.length==0){
            let emptyProject= document.querySelector('#emptyProject').content.cloneNode(true)
            emptyProject.children[0].style.fill=this.currProject.projectColor
            this.todoContent.append(emptyProject)
          }
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
    this.dueDateHandler()
  }
  
}