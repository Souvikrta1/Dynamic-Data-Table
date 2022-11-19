const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const contactInput = document.getElementById('contact');
const addBtn = document.getElementById('add-row');
const data = document.getElementById('data-div');
const inputArea = document.getElementById('input-area');
const msg = document.getElementById('message');

inputArea.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        addItem();
    }
})

addBtn.addEventListener('click',()=>{
    addItem();
})

function addItem(){

    if(nameInput.value == "" || emailInput.value == "" || contactInput.value == ""){
        alert('Please Fill The blanks');
        msg.innerText = 'Please Fill All The Blanks';
        msg.className = 'msg-style'
        return;
    }

    var divParent = document.createElement('div');
    var nameChild = document.createElement('p');
    var emailChild = document.createElement('p');
    var contactChild = document.createElement('p');
    var btnChild = document.createElement('button');
    

    divParent.className = 'data-output';

    nameChild.innerText = nameInput.value;
    nameChild.className = 'name-data-output';

    emailChild.innerText = emailInput.value;
    emailChild.className = 'email-data-output';

    contactChild.innerText = contactInput.value;
    contactChild.className = 'contact-data-output';

    btnChild.innerText = 'Remove';
    btnChild.className = 'remove-btn';
    
    btnChild.addEventListener('click',()=>{
        divParent.remove();
    })

    divParent.appendChild(nameChild);
    divParent.appendChild(emailChild);
    divParent.appendChild(contactChild);
    divParent.appendChild(btnChild);
    data.appendChild(divParent);
}