// GET THE TASK TABLE
const tasktable = document.getElementById("tasktable");
// HANDLE TASK ASSIGNMENT
const taskform = document.getElementById("taskform");
const nameinput = document.getElementById("nameinput");
const taskinput = document.getElementById("taskinput");
const timeinput = document.getElementById("timeinput");
const durationinput = document.getElementById("durationinput");
const duration = document.getElementById("statusinput");


taskform.addEventListener('submit',function(e){
  e.preventDefault();
  const name = nameinput.value.trim();
  const task = taskinput.value.trim();
  const time = taskinput.value.trim();
  const duration = durationinput.value.trim();
  const status = statusinput.value.trim();
  if(name==='' || task==='' || time===''||duration===''||status===''){
    return;
  }
  const newrow = tasktable.insertRow(-1);
  const namecell = newrow.insertCell(0);
  const taskcell = newrow.insertCell(1);
  const timecell = newrow.insertCell(2);
  const durationcell = newrow.insertCell(3);
  const statuscell = newrow.insertCell(4);

  namecell.textContent = name;
  taskcell.textContent = task;
  timecell.textContent = time;
  durationcell.textContent = duration;
  statuscell.textContent = status === 'completed'? 'completed' :'In-progress';

  nameinput.value = '';
  taskinput.value ='';
  timeinput.value ='';
  durationinput.value ='';
  
  
  
});

// chat box ---
function sendMessage() {
  const userMessage = document.getElementById('userMessage').value;
  if (userMessage.trim() === '') {
    return;
  }

  const chat = document.getElementById('chat');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', 'sent');
  messageDiv.innerHTML = `<p>${userMessage}</p>`;
  chat.appendChild(messageDiv);

  document.getElementById('userMessage').value = '';
  setTimeout(() => {
    const receivedMessage = "I'm just a demo chat! 🤖";
    const receivedDiv = document.createElement('div');
    receivedDiv.classList.add('message', 'received');
    receivedDiv.innerHTML = `<p>${receivedMessage}</p>`;
    chat.appendChild(receivedDiv);
  }, 1000);
}
