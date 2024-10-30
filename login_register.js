document.addEventListener('DOMContentLoaded', () => {
    const profileButton = document.getElementById('profileButton');
    const mobileProfile = document.getElementById('mobileProfile');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Profile button redirection
    if (profileButton) {
        profileButton.addEventListener('click', () => {
            const loggedId = sessionStorage.getItem('loggedId') || 0;
            window.location.href = loggedId == 0 ? 'login.html' : 'profile.html';
        });
    }

    if (mobileProfile) {
        mobileProfile.addEventListener('click', () => {
            const loggedId = sessionStorage.getItem('loggedId') || 0;
            window.location.href = loggedId == 0 ? 'login.html' : 'profile.html';
        });
    }

    // Login Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const user = USERS_FROM_DB.find(user => user.email === email && user.password === password);
            if (user) {
                sessionStorage.setItem('loggedId', user.id);
                window.location.href = 'profile.html';
            } else {
                alert('Неверные данные. Пожалуйста, попробуйте снова.');
            }
        });
    }

    // Register Form Submission
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert("Пароли не совпадают.");
                return;
            }

            // Создаем нового пользователя
            const newUser = {
                id: DB.users.length + 1,
                name,
                email,
                phone,
                password,
            };

            // Добавляем пользователя в массив и обновляем localStorage
            DB.users.push(newUser);
            DB.cart_items.push({
                id: newUser.id,
                cart: []
            });
            DB.liked_items.push({
                id: newUser.id,
                likedItems: []
            });
            localStorage.setItem('db', JSON.stringify(DB));
            
            // Устанавливаем нового пользователя как текущего и перенаправляем на профиль
            sessionStorage.setItem('loggedId', newUser.id);
            window.location.href = 'profile.html';
        });
    }
});
