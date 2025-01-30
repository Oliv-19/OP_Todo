let ver= 1
export default class ProjectDom {
    constructor(projectObj, projectStorage){
        // if (ProjectDom._instance) {
        //     return ProjectDom._instance
        // }
        // ProjectDom._instance = this;
        //this.ver = 4
        this.project= projectObj
        this.projectStorage= projectStorage

        this.projectsDiv = document.querySelector('.projects')

        this.projectTemplate = document.querySelector('#template').content.cloneNode(true)
      
        this.pContainer= this.projectTemplate.querySelector('#pContainer')
        this.windowHead =this.projectTemplate.querySelector('.windowHead')
        this.pTitle =this.projectTemplate.querySelector('#pTitle')
        this.todoContainer =this.projectTemplate.querySelectorAll('.todoContainer')
        this.todoTitle =this.projectTemplate.querySelectorAll('.todoTitle')
        this.delBtn= this.projectTemplate.querySelector('#delProjectBtn')
        
    }
    deleteProject(){
      this.delBtn.addEventListener('click', ()=>{
          this.projectStorage.deleteProject(this.project.name)
          this.pContainer.remove() 
      })
      
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

      
      if(this.project.todoList.length> 0){
        console.log(this.project.todoList)
        let threeTodos= this.project.todoList.slice(0, 3)
        console.log(threeTodos)
        //threeTodos = threeTodos.append(this.project.todoList[0])
        threeTodos.forEach((todo, i)=>{
          this.todoTitle[i].textContent = todo.title 
          if(this.project.todoList[i].checked == true){
            this.todoTitle[0].classList= 'checkedTodo'
          }
        })
      }


      
      this.projectsDiv.prepend(this.projectTemplate)
      this.deleteProject()
    } 
}

