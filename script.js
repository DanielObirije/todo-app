
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const ul = document.querySelector('.todos')
let editElement = ''
let editFlag = false

const todos = JSON.parse(localStorage.getItem("list"));
if (todos) {
    todos.forEach((todo) => {
       formBTn(todo)
    });
}
form.addEventListener('submit',((e)=>{
  e.preventDefault()
   formBTn()
}))

function formBTn(todo){

  let value = input.value
  if (todo) {
    value = todo;
   } 
  const element = document.createElement('li')
  if(value && !editFlag){
  element.innerHTML = value
  ul.appendChild(element)
  addlocalstorage()
  input.value = ''
  
 }
 else if(value && editFlag){
     
     editElement.innerHTML = value
     addlocalstorage()
     input.value = ''

 }


    element.addEventListener('dblclick',(e)=>{
            editFlag = 'true'
            editElement = e.currentTarget
            input.value = editElement.innerHTML
      
          
    })
    

    element.addEventListener('contextmenu',((e)=>{
   
       element.remove()
       addlocalstorage()
    
    
       
  }))


  element.addEventListener('click',((e)=>{
 
    const target = e.target
    target.classList.toggle ( 'checked')
   
    

}))



function addlocalstorage() {
  const listitems = document.querySelectorAll('li')
  const list = []
   listitems.forEach((item)=>{
     const dan = item.innerHTML
     list.push(dan)
     
   })

localStorage.setItem('list',JSON.stringify(list))


}

}


