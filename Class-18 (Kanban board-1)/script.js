const addBtn = document.querySelector('.add-btn')

const modalCont = document.querySelector('.modal-cont')
modalCont.style.display = 'none'

let addtaskFlag = false


addBtn.addEventListener('click' , function(){
   addtaskFlag = !addtaskFlag

   if(addtaskFlag===true){
    modalCont.style.display = 'flex'
   }else{
    modalCont.style.display = 'none'
   }
})