const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const itemList = document.getElementById('item-list');
const uList = document.querySelector('.ul');

const notesList = [];

function addNote() {
  if (itemInput.value === '') {
    alert('Please add a note!');
    return;
  }
  const item = document.createElement('li');
  const note = (item.innerText = itemInput.value.trim());

  
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  
  const doneBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  const saveBtn = document.createElement('button');
  doneBtn.classList.add('action-btn');
  doneBtn.innerText = 'DONE';
  editBtn.classList.add('action-btn');
  editBtn.innerText = 'EDIT';
  
  btnContainer.append(editBtn, doneBtn);
  uList.appendChild(item);
  
  
  const newNote = {
    id: Math.random().toString(),
    note: note,
    el: item
  };
  
  notesList.push(newNote);
  

  console.log(notesList);
  
  itemInput.value = '';
  item.append(btnContainer);

  console.log(item);
  doneBtn.addEventListener('click', function () {
    const index = notesList.findIndex(note => note.id === newNote.id);
    notesList.splice(index, 1);
    item.remove();
    console.log(notesList);
  });


  editBtn.addEventListener('click', function () {
    if (editBtn.innerText === 'EDIT') {
      item.contentEditable = true;
      item.focus();
      editBtn.innerText = 'SAVE';
      doneBtn.style.display = 'none';
    } else {
      newNote.note = item.innerText;
      item.contentEditable = false;
      editBtn.innerText = 'EDIT';
      doneBtn.style.display = 'inline-block';
    }
  });
}

addButton.addEventListener('click', addNote);

itemInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addNote();
  }
});
