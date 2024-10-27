document.addEventListener('DOMContentLoaded', () => {
    const profileButtonMobile = document.getElementById('profileButtonMobile');
    const loginRegisterModal = document.getElementById('loginRegisterModal');
    const closeButton = document.querySelector('.close');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const togglePassword = document.querySelectorAll('.toggle-password');
  
    // Profile Button Event
    

    profileButtonMobile.addEventListener('click', () => {
        const loggedId = sessionStorage.getItem('loggedId') || 0;
        if (loggedId == 0) {
            loginRegisterModal.style.display = 'block'; // Показать модальное окно
            console.log("yeah");
        } else {
            window.location.href = 'profile.html'; // Перенаправить на профиль
        }
    });
    
  
    // Close Modal
    closeButton.onclick = function () {
        loginRegisterModal.style.display = 'none';
    };
  
    // Modal Close on Click Outside
    window.onclick = function (event) {
        if (event.target === loginRegisterModal) {
            loginRegisterModal.style.display = 'none';
        }
    };
  
    // Tab switching
    loginTab.addEventListener('click', () => {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    });
  
    registerTab.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        loginTab.classList.remove('active');
        registerTab.classList.add('active');
    });
  
    // Toggle password visibility
    togglePassword.forEach(item => {
        item.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.textContent = type === 'password' ? 'Show' : 'Hide';
        });
    });
  
    // Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(fakeDb.users.getAllUsers());
        const userEMAIL = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // Проверяем пользователя в базе данных
        const user = fakeDb.users.getAllUsers().find(user => user.email === userEMAIL && user.password === password);
        if (user) {
            sessionStorage.setItem('loggedId', user.id);
            loginRegisterModal.style.display = 'none';
            location.reload(); // Перезагружаем страницу
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
  
    // Register Form Submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const regName = document.getElementById('regName').value;
        const regEmail = document.getElementById('regEmail').value;
        const regPassword = document.getElementById('regPassword').value;
        const regPhone = document.getElementById('regPhone').value;
        const regConfirmPassword = document.getElementById('regConfirmPassword').value;

        if (regPassword !== regConfirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }
  
        // Создаем нового пользователя
        const newUser = {
            id: fakeDb.users.data.length + 1, // Генерируем новый ID
            name: regName,
            email: regEmail,
            phone: regPhone,
            password: regPassword,
        };
  
        // Добавляем нового пользователя в базу данных
        fakeDb.users.addUser(newUser);
        console.log(fakeDb.getAllUsers);
        
        // Сохраняем ID нового пользователя в сессии и перенаправляем на профиль
        sessionStorage.setItem('loggedId', newUser.id);
        window.location.href = 'profile.html';
    });
  });
  