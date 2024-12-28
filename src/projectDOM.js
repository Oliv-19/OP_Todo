import Project  from "./project.js"

import {events} from './pubsub'


class CreateDomElem{
    constructor(tagName, value, id='', classId=''){
      this.elem= document.createElement(tagName)
      
      this.elem.className = classId 
      this.elem.id = id
      if(tagName == 'img'){
        this.elem.src = value
      } else {
        this.elem.textContent= value
      }
      return this.elem
    }
    static createElemsFromObj(object){
      for(let elem in object){
        let tag = object[elem][0]
        let content = object[elem][1]
        let id = elem
        object[elem] = new CreateDomElem(tag, content, id)
      }
    }
      
}

class ProjectDom {
//     static contentDiv = document.querySelector('.content')
    static projectsDiv = document.querySelector('.projectsDiv')
//     //static formDiv = document.querySelector('.formDiv')
    static sideBar = document.querySelector('.sideBar')
    static addProjectBtn = this.sideBar.children.namedItem('addProject')
    static formDiv = this.projectsDiv.children.namedItem('formDiv')
    static form = ProjectDom.formDiv.children.namedItem('newPjForm')

    
    static init(){
        ProjectDom.ProjectEventListeners()
        events.subscribe('projectCreated', ProjectDom.render);
    }
   

    static getProjectInfo(e){
        e.preventDefault()
        let projectName = ProjectDom.form.children.namedItem('pNameInput')
        events.publish('createProject', projectName.value);
       
        projectName.value= ''
        ProjectDom.formDiv.classList.remove('showForm') 
    }

    static render(projects){
        
        let projectTemplate={
            pContainer:['div', ''],
            pTitle: ['p', projects.name],
            pEdit:['button','edit'],
            pDelete:['button','del'],
        }
        CreateDomElem.createElemsFromObj(projectTemplate)

        projectTemplate.pContainer.className='project'

        projectTemplate.pContainer.append(projectTemplate.pTitle)
        projectTemplate.pContainer.append(projectTemplate.pEdit)
        projectTemplate.pContainer.append(projectTemplate.pDelete)
        
        ProjectDom.projectsDiv.append(projectTemplate.pContainer)
        
    }
    static openProject(e){
        if(e.target.className=='project'){
            let projectName = e.target.children[0].textContent
            console.log(projectName )
            // need to search this ^ instance of project

            events.publish('openProject', projectName);
        }
      // console.log(e.target)
    }

    static ProjectEventListeners(){
        this.addProjectBtn.addEventListener('click',()=>{ 
            ProjectDom.formDiv.classList.add('showForm') 
        } )
        ProjectDom.formDiv.addEventListener('submit',(e)=> ProjectDom.getProjectInfo(e))
        // this.form.addEventListener('submit', (e)=>{ProyectDom.addNewProyectDom(e, this.form)})
        // console.log(this.formDiv)
        this.projectsDiv.addEventListener('click', (e)=>{ProjectDom.openProject(e)})
    }
}


export{ProjectDom}