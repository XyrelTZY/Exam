document.querySelectorAll('input[name="user_type"]').forEach(input => {
  input.addEventListener('change', () => {
    const loginBox = document.querySelector('.login-box');
    loginBox.style.transform = 'translateX(' + (input.value === 'admin' ? '0' : input.value === 'student' ? '-20px' : '-40px') + ')';
  });
});
