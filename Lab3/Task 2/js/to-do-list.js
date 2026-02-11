const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-US', dateOptions);

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(item => {
        tasks.push({
            text: item.querySelector('.task-text').textContent,
            completed: item.querySelector('.task-text').classList.contains('completed')
        });
    });
    localStorage.setItem('myTodoList', JSON.stringify(tasks));
}

function createTaskElement(text, isCompleted = false) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'task-content';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;
    checkbox.onclick = function() {
        span.classList.toggle('completed');
        saveTasks();
    };

    const span = document.createElement('span');
    span.className = 'task-text';
    if (isCompleted) span.classList.add('completed');
    span.textContent = text;
    span.onclick = function() {
        checkbox.checked = !checkbox.checked;
        span.classList.toggle('completed');
        saveTasks();
    };
    span.style.cursor = "pointer";

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        li.remove();
        saveTasks();
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
        saveTasks();
        input.value = '';
        input.focus();
    }
}

document.getElementById('newTaskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') addTask();
});

window.addEventListener('DOMContentLoaded', () => {
    const ul = document.getElementById('taskList');
    const savedData = localStorage.getItem('myTodoList');

    if (savedData) {
        const tasks = JSON.parse(savedData);
        tasks.forEach(task => {
            const taskElement = createTaskElement(task.text, task.completed);
            ul.appendChild(taskElement);
        });
    } else {
        const examples = ['First item', 'Second item', 'Third item'];
        [...examples].reverse().forEach(text => {
            const task = createTaskElement(text);
            ul.prepend(task);
        });
        saveTasks();
    }
    
    initTheme();
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

const toggleBtn = document.querySelector(".btn-theme-toggle");

function initTheme() {
    let darkmode = localStorage.getItem('darkmode');
    if (darkmode === "active") {
        document.body.classList.add("darkmode");
    }
}

toggleBtn.addEventListener("click", function() {
    let darkmode = localStorage.getItem("darkmode");
    if (darkmode !== "active") {
        document.body.classList.add("darkmode");
        localStorage.setItem("darkmode", "active");
    } else {
        document.body.classList.remove("darkmode");
        localStorage.setItem("darkmode", null);
    }
});