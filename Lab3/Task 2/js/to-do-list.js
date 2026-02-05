const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-US', dateOptions);

function addTask() {
    const input = document.getElementById('newTaskInput');
    const text = input.ariaValueMax.trim();

    if (text) {
        const ul = document.getElementById('taskList');
        const il = document.createElement('li');
        li.className = 'task-item';
        li.textContent = text;

        li.onclick = function() {
            this.style.textDecoration = 'line-through';
        };
        
        ul.appendChild(li);
        input.value = '';
    }
}

document.getElementById('newTaskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') addTask();
});

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function(event) {
    const term = event.target.value.toLowerCase();
    const tasks = document.querySelectorAll('.task-item');

    tasks.forEach(task => {
        const text = task.textContent.toLowerCase();

        if (text.includes(term)) {
            task.classList.remove('hidden');
        } else {
            task.classList.add('hidden');
        }
    }); 
});