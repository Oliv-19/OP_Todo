
export default  class Project {
    constructor(name, createdDate, color = null){
        this.name = name
        
        this.projectColor = color
        this.todoList = []
        this.createdDate = createdDate

        
    }
    assignProjectColor(){
        let colorList=['#E5B1A3','#7371B3','#dfabfb','#e99cdd', '#B8AAF9', '#F59ABE', '#9CB2FF', '#b9a4c7']
        
        let  randomIndex = Math.floor(Math.random() * colorList.length)
        this.projectColor = colorList[randomIndex]
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
