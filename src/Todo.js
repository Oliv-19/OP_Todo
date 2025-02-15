import { format } from "date-fns";
export default class Todo{
        constructor(title,dueDate,priority, checked){
            this.title = title
            this.dueDate = dueDate
            this.priority = priority
            this.checked = checked
        }
        checkDueDate(){
            if(this.dueDate <= format(new Date(), 'yyyy-MM-dd')){
                return true
            }
            return false
        }
        checkTodo(){
            this.checked =true
            console.log('done')
        }
}
