import {events} from './pubsub'

export default  class Project {
    static todoList= []
    static ProjectList= []
    constructor(name){
        this.name = name
        //this.category =category 
        // if(Project.ProjectList.includes(name)== false){
        //     this.name =name 
        //     Project.ProjectList.push(this)
        //     console.log(Project.ProjectList)
        // }
        
    }
    static init(){
        events.subscribe('createProject', Project.NewProject);
    }
    
//     static addTodo(todo){
//         let idk = new Todo(todo)
//         Proyect.todoList.push(idk)
//         console.log(Proyect.todoList)
//     }
    static NewProject(pName){
        let newProyect = new Project(pName)
        if(Project.ProjectList.includes(pName)== false){
            Project.ProjectList.push(newProyect)
            //console.log(Project.ProjectList)
        }
        events.publish('projectCreated', newProyect);
        //page.addNewProyectDom()
    }
    
}
