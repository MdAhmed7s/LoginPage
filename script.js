
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Implement login logic here
    // For simplicity, let's just redirect to a dashboard page
    window.location.href = 'dashboard.html';
    
  });

  registerForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Implement registration logic here
      // For simplicity, let's just redirect to a dashboard page
      window.location.href = 'dashboard.html';
  });
});

