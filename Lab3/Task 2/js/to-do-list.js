const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-US', dateOptions);

function createTaskElement(text) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'task-content';

    // The Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        span.classList.toggle('completed');
    };

    // The Text
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;
    
    // Allow clicking the text to toggle the checkbox
    span.onclick = function() {
        checkbox.checked = !checkbox.checked;
        span.classList.toggle('completed');
    };
    span.style.cursor = "pointer";

    // The Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        li.remove(); 
    };

    contentDiv.appendChild(checkbox);
    contentDiv.appendChild(span);
    li.appendChild(contentDiv);
    li.appendChild(deleteBtn);

    return li;
}

function addTask() {
    const input = document.getElementById('newTaskInput');
    const text = input.value.trim();

    if (text) {
        const ul = document.getElementById('taskList');
        const newTask = createTaskElement(text);
        
        ul.prepend(newTask); 
        input.value = '';
        input.focus();
    }
}

document.getElementById('newTaskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') addTask();
});

window.addEventListener('DOMContentLoaded', () => {
    const examples = ['First item', 'Second item', 'Third item'];
    const ul = document.getElementById('taskList');
    
    [...examples].reverse().forEach(text => {
        const task = createTaskElement(text);
        ul.prepend(task);
    });

    const firstCheckbox = ul.querySelector('li:first-child input[type="checkbox"]');
    const firstText = ul.querySelector('li:first-child .task-text');
    if(firstCheckbox) {
        firstCheckbox.checked = true;
        firstText.classList.add('completed');
    }
});

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function(event) {
    const term = event.target.value.toLowerCase();
    const tasks = document.querySelectorAll('.task-item');

    tasks.forEach(task => {
        const textSpan = task.querySelector('.task-text');
        if (textSpan) {
            const text = textSpan.textContent.toLowerCase();
            task.classList.toggle('hidden', !text.includes(term));
        }
    }); 
});


let darkmode = localStorage.getItem('darkmode');
const toggleBtn = document.querySelector(".btn-theme-toggle");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
}

if (darkmode === "active") {
    enableDarkMode();
}

toggleBtn.addEventListener("click", function() {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});