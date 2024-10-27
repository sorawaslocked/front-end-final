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

            const user = fakeDb.users.getAllUsers().find(user => user.email === email && user.password === password);
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

            const newUser = {
                id: fakeDb.users.data.length + 1,
                name,
                email,
                phone,
                password,
            };

            fakeDb.users.addUser(newUser);
            sessionStorage.setItem('loggedId', newUser.id);
            window.location.href = 'profile.html';
        });
    }
  });
  