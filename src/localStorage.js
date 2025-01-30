
import { format } from "date-fns";
export default class localStorageManager{
    
    saveProject(project){
        console.log(project)
        localStorage.setItem(project.name, JSON.stringify(project))
    
    }
    getProjectsArray(){
        let arr = []
        for(let i =0; i<localStorage.length; i++){
            let project = this.getProject(localStorage.key(i))
            arr.push(project)    
        }
        //console.log(arr)
        return arr
    }
    sortProjects(projects){
        console.log(projects)
        return projects.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate))
    }
    getProject(pName){
        return JSON.parse(localStorage.getItem(pName))
    }
    deleteProject(pName){
        localStorage.removeItem(pName)
    }
}
