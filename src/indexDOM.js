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

(function(){
    let tabs ={
        contentDiv : document.querySelector('.content'),
        
        init:function(){
            
        }
    }
    
    return tabs.init()
}())

export{CreateDomElem}