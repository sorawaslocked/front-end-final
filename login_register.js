function togglePasswordVisibility(inputId) {
    const inputField = document.getElementById(inputId);
    const toggleButton = inputField.nextElementSibling;
  
    // Проверяем, скрыт ли в данный момент пароль
    if (inputField.type === "password") {
      inputField.type = "text"; // Меняем тип на текст, чтобы показать пароль
      toggleButton.textContent = "Hide"; // Меняем текст кнопки на "Hide"
    } else {
      inputField.type = "password"; // Меняем тип на пароль, чтобы скрыть его
      toggleButton.textContent = "Show"; // Меняем текст кнопки на "Show"
    }
  }

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

    // Login Form Submission with validation
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            // Basic validation for empty fields
            if (!email || !password) {
                alert('Please fill in all fields.');
                return;
            }

            // Find user in database
            const user = USERS_FROM_DB.find(user => user.email === email && user.password === password);
            if (user) {
                sessionStorage.setItem('loggedId', user.id);
                window.location.href = 'profile.html';
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }

    // Register Form Submission with validation
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const addres = document.getElementById('adress').value;

            // Check for empty fields
            if (!name || !email || !phone || !password || !confirmPassword || !addres) {
                alert('Please fill in all fields.');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Validate password length, uppercase, and special character
            const passwordRegex = /^(?=.*\d)(?=.*[?!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!passwordRegex.test(password)) {
                alert('Password must be at least 8 characters long, include at least one uppercase letter, and one special character (e.g., #, %, ^, &, *, ?).');
                return;
            }

            // Confirm passwords match
            if (password !== confirmPassword) {
                alert("Пароли не совпадают.");
                return;
            }

            // Create a new user
            const newUser = {
                id: DB.users.length + 1,
                name,
                email,
                phone,
                password,
                addres
            };

            // Add new user to database and save in localStorage
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

            // Set the new user as the current logged-in user and redirect to profile
            sessionStorage.setItem('loggedId', newUser.id);
            window.location.href = 'profile.html';
        });
    }
});
