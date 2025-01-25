export default class localStorageManager{
    
    saveProject(project){
        //localStorage.clear()
        console.log(project)
        localStorage.setItem(project.name, JSON.stringify(project))
    
    }
    getProjects(pName){
        return JSON.parse(localStorage.getItem(pName))
    }
    deleteProject(pName){
        localStorage.removeItem(pName)
    }
}
