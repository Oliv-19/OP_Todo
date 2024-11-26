class Proyect{
    static todoList= []
    constructor(name, category){
        this.name =name 
        this.category =category 
        
    }
    static addTodo(todo){
        let idk = new Todo(todo)
        Proyect.todoList.push(idk)
        console.log(Proyect.todoList)
    }
}

class Todo{
    constructor(title,description,dueDate,priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.checked = false
    }
    check(){
        this.checked =true
        console.log('done')
    }
    uncheck(){
        this.checked = false
        console.log('not done')
    }
    edit(itemInput){
        this.title = itemInput
    }
    delete(){
        let arrayElem= Proyect.todoList.findIndex(item=> item == this)
        if(arrayElem != -1){
            Proyect.todoList.splice(arrayElem, 1)
        }
    }
}

Proyect.addTodo('read')