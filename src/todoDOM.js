import { events } from "./pubsub";

export default class TodoDOM{
    static init(){
        events.subscribe('openProject', TodoDOM.render)
    }
    static render(project){
        console.log(project)
    }
}