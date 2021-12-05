const divList = document.querySelector('.listHolder');
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');
const listUl = document.querySelector('.list');
const lis = listUl.children;

function addLists() {
  if (addInput.value === '') {
    alert('Invalid entry. Please try again');
  } else {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
    createBtn(li);
  }
}

// add item when 'add item' is pressed
addBtn.addEventListener('click', () => {
  addLists();
});

function createBtn(li) {
  const remove = document.createElement('button');
  remove.className = 'btn-icon remove';
  li.appendChild(remove);
  return li;
}

// loop to add buttons in each li
for (var i = 0; i < lis.length; i++) {
  createBtn(lis[i]);
}

// enable delete button
divList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.className === 'btn-icon remove') {
      ul.removeChild(li);
    } 
  }
});