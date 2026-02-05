        // 1. Установка даты
        const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
        document.getElementById('dateDisplay').textContent = new Date().toLocaleDateString('en-US', dateOptions);

        // 2. Функция добавления задачи
        function addTask() {
            const input = document.getElementById('newTaskInput');
            const text = input.value.trim();
            
            if (text) {
                const ul = document.getElementById('taskList');
                const li = document.createElement('li');
                li.className = 'task-item';
                li.textContent = text;
                
                // Добавляем возможность удаления по клику (опционально)
                li.onclick = function() { this.style.textDecoration = 'line-through'; };
                
                ul.appendChild(li);
                input.value = ''; // Очистить поле
            }
        }

        // Поддержка Enter для добавления
        document.getElementById('newTaskInput').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') addTask();
        });

        // 3. Реализация ПОИСКА (очень простая)
        const searchInput = document.getElementById('searchInput');
        
        searchInput.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase();
            const tasks = document.querySelectorAll('.task-item');

            tasks.forEach(task => {
                const text = task.textContent.toLowerCase();
                // Если текст задачи содержит то, что в поиске -> показываем, иначе скрываем
                if (text.includes(term)) {
                    task.classList.remoave('hidden');
                } else {
                    task.classList.add('hidden');
                }
            });
        });