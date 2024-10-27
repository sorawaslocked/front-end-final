document.addEventListener('DOMContentLoaded', () => {
  const profileButton = document.getElementById('profileButton');
  const loginRegisterModal1 = document.getElementById('loginRegisterModal1');
  const closeButton = document.querySelector('.close1');
  const loginTab1 = document.getElementById('loginTab1');
  const registerTab1 = document.getElementById('registerTab1');
  const loginForm1 = document.getElementById('loginForm1');
  const registerForm1 = document.getElementById('registerForm1');
  const togglePassword1 = document.querySelectorAll('.toggle-password1');

  // Profile Button Event
  profileButton.addEventListener('click', () => {
      const loggedId = sessionStorage.getItem('loggedId') || 0;
      if (loggedId == 0) {
          loginRegisterModal1.style.display = 'block'; // Show modal
          console.log("smth");
      } else {
          window.location.href = 'profile.html'; // Redirect to profile
      }
  });

  // Close Modal
  closeButton.onclick = function () {
      loginRegisterModal1.style.display = 'none';
  };

  // Modal Close on Click Outside
  window.onclick = function (event) {
      if (event.target === loginRegisterModal1) {
          loginRegisterModal1.style.display = 'none';
      }
  };

  // Tab switching
  loginTab1.addEventListener('click', () => {
      loginForm1.style.display = 'block';
      registerForm1.style.display = 'none';
      loginTab1.classList.add('active');
      registerTab1.classList.remove('active');
  });

  registerTab1.addEventListener('click', () => {
      loginForm1.style.display = 'none';
      registerForm1.style.display = 'block';
      loginTab1.classList.remove('active');
      registerTab1.classList.add('active');
  });

  // Toggle password visibility
  togglePassword1.forEach(item => {
      item.addEventListener('click', function () {
          const input = this.previousElementSibling;
          const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
          input.setAttribute('type', type);
          this.textContent = type === 'password' ? 'Show' : 'Hide';
      });
  });

  // Login Form Submission
  loginForm1.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail1').value;
      const password = document.getElementById('loginPassword1').value;

      // Check user in the database
      const user = fakeDb.users.getAllUsers().find(user => user.email === email && user.password === password);
      if (user) {
          sessionStorage.setItem('loggedId', user.id);
          loginRegisterModal1.style.display = 'none';
          location.reload(); // Reload the page
      } else {
          alert('Invalid credentials. Please try again.');
      }
  });

  // Register Form Submission
  registerForm1.addEventListener('submit', (e) => {
      e.preventDefault();
      const regName = document.getElementById('regName').value;
      const regEmail = document.getElementById('regEmail').value;
      const regPassword = document.getElementById('regPassword').value;
      const regConfirmPassword = document.getElementById('regConfirmPassword').value;
      const regPhone = document.getElementById('regPhone').value;

      if (regPassword !== regConfirmPassword) {
          alert("Passwords do not match. Please try again.");
          return;
      }

      // Create new user
      const newUser = {
          id: fakeDb.users.data.length + 1, // Generate new ID
          name: regName,
          email: regEmail,
          phone: regPhone,
          password: regPassword,
      };

      // Add new user to the database
      fakeDb.users.addUser(newUser);
      console.log(fakeDb.getAllUsers);

      // Save new user's ID in session and redirect to profile
      sessionStorage.setItem('loggedId', newUser.id);
      window.location.href = 'profile.html';
  });
});
