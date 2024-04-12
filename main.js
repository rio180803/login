document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the values from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple validation
  if (username === 'test' && password === 'test') {
    // Print success message
    document.getElementById('error-message').innerText = 'Login successful!';
    // You can also redirect to a dashboard page here if needed
  } else {
    // Print error message for incorrect username/password
    document.getElementById('error-message').innerText = 'Incorrect username or password';
  }
});
