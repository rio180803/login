document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple validation
  if (username === 'test' && password === 'test') {
    // Redirect to a success page
    window.location.href = 'success.html';
  } else {
    // Print error message for incorrect username/password
    document.getElementById('error-message').innerText = 'Incorrect username or password';
  }
});
