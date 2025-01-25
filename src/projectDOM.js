
export default class ProjectDom {
    constructor(projectObj, projectStorage){
        // if (ProjectDom._instance) {
        //     return ProjectDom._instance
        // }
        // ProjectDom._instance = this;
        this.project= projectObj
        this.projectStorage= projectStorage

        this.projectsDiv = document.querySelector('.projects')
        this.ver = 1
        this.colorList=['#E5B1A3','#7371B3','#dfabfb','#e99cdd', '#B8AAF9', '#F59ABE', '#9CB2FF', '#b9a4c7']

        this.projectTemplate = document.querySelector('#template').content.cloneNode(true)
      
        this.pContainer= this.projectTemplate.querySelector('.project')
        this.windowHead =this.projectTemplate.querySelector('.windowHead')
        this.pTitle =this.projectTemplate.querySelector('#pTitle')
        this.todoContainer =this.projectTemplate.querySelector('.todoContainer')
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
      
      if(this.ver > 4){
        this.ver= 1
      }
      this.pContainer.classList.add('v'+ this.ver) 
      this.pTitle.textContent= this.project.name

      let  randomIndex = Math.floor(Math.random() * this.colorList.length)

      this.windowHead.style.background = this.colorList[randomIndex]
      this.todoContainer.style.background = this.colorList[randomIndex]

      this.pContainer.dataset.color= this.colorList[randomIndex]

      this.ver+=1
      this.projectsDiv.prepend(this.projectTemplate)
      this.deleteProject()
    } 
}

