
export default  class Project {
    constructor(name){
        this.name = name//<--- has to be unique
        this.todoList = []
    }
    // set todos(todoList){
    //     this.todoList = todoList
    // }
    addTodo(todoInstance){
        this.todoList.push(todoInstance)
        console.log(this.todoList)
    }
    deleteTodo(currTodo){
        console.log(currTodo)
        let arrayElem= this.todoList.findIndex(item=> item == currTodo)
        if(arrayElem != -1){
            this.todoList.splice(arrayElem, 1)
        }
        console.log(this.todoList)
    }
}
