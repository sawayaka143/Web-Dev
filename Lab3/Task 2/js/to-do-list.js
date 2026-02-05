// const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
// document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-US', dateOptions);

// function addTask() {
//     const input = document.getElementById('newTaskInput');
//     const text = input.value.trim();

//     if (text) {
//         const ul = document.getElementById('taskList');
//         const li = document.createElement('li');
//         li.className = 'task-item';

//         const contentDiv = document.createElement('div');
//         contentDiv.className = 'task-content';

//         const checkBox = document.createElement('input');
//         checkBox.type = 'checkbox';
//         checkBox.onclick = function() {
//             span.classList.toggle('completed');
//         };

//         const span = document.createElement('span');
//         span.className = 'task-text';
//         span.textContent = text;

//         const deleteBtn = document.createElement('button');
//         deleteBtn.className = 'btn-delete';
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.onclick = function() {
//             li.parentNode.removeChild(li);
//         };

//         contentDiv.appendChild(checkBox);
//         contentDiv.appendChild(span);
        
//         li.appendChild(contentDiv);
//         li.appendChild(deleteBtn);

//         ul.appendChild(li);
//         input.value = ''; 
//     }
// }

// document.getElementById('newTaskInput').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') addTask();
// });

// const searchInput = document.getElementById('searchInput');
// searchInput.addEventListener('input', function(event) {
//     const term = event.target.value.toLowerCase();
//     const tasks = document.querySelectorAll('.task-item');

//     tasks.forEach(task => {
//         const textSpan = task.querySelector('.task-text');
//         const text = task.textContent.toLowerCase();

//         if (text.includes(term)) {
//             task.classList.remove('hidden');
//         } else {
//             task.classList.add('hidden');
//         }
//     }); 
// });

const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-US', dateOptions);

function addTask() {
    const input = document.getElementById('newTaskInput');
    const text = input.value.trim();

    if (text) {
        const ul = document.getElementById('taskList');
        const li = document.createElement('li');
        li.className = 'task-item';

        // 1. Create Container for Checkbox and Text
        const contentDiv = document.createElement('div');
        contentDiv.className = 'task-content';

        // 2. Create Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function() {
            span.classList.toggle('completed');
        };

        // 3. Create Text Span
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = text;

        // 4. Create Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-delete';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            li.remove(); // Removes the whole list item
        };

        // Assemble the parts
        contentDiv.appendChild(checkbox);
        contentDiv.appendChild(span);
        
        li.appendChild(contentDiv);
        li.appendChild(deleteBtn);
        
        ul.appendChild(li);
        input.value = '';
    }
}

// Allow pressing "Enter" to add task
document.getElementById('newTaskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') addTask();
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function(event) {
    const term = event.target.value.toLowerCase();
    const tasks = document.querySelectorAll('.task-item');

    tasks.forEach(task => {
        // We look specifically at the text span now
        const textSpan = task.querySelector('.task-text');
        const text = textSpan.textContent.toLowerCase();

        if (text.includes(term)) {
            task.classList.remove('hidden');
        } else {
            task.classList.add('hidden');
        }
    }); 
});