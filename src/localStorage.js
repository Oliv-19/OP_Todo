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
        return arr
    }
    sortProjects(projects){
        return projects.sort((a, b) => {
            if(a.createdDate < b.createdDate) return -1;
            if(a.createdDate > b.createdDate) return 1;
            return 0;
        })
    }
    getProject(pName){
        return JSON.parse(localStorage.getItem(pName))
    }
    deleteProject(pName){
        localStorage.removeItem(pName)
    }
}
