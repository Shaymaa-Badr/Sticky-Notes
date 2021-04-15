const getID = (id) => {
    document.getElementById('delete').value= id
}

const editNote = (id)=>{
   let title =  document.getElementById(`noteTitle${id}`).innerText
   let desc =  document.getElementById(`desc${id}`).innerText
   document.getElementById('edit').value = id
document.getElementById('note_title').value = title
document.getElementById('note_desc').value = desc
   console.log(title)

}