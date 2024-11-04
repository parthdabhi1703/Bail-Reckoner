// Function to show the login form
function showLoginForm() {
    document.getElementById("loginForm").style.display = "block"; // Show login form
    document.getElementById("signupForm").style.display = "none"; // Hide signup form
  }
  
  // Function to show the signup form
  function showSignupForm() {
    document.getElementById("signupForm").style.display = "block"; // Show signup form
    document.getElementById("loginForm").style.display = "none"; // Hide login form
  }
  
  // Function to switch between login tabs
  function showLoginTab(type) {
    const types = ['prisoner', 'lawyer', 'judge'];
    types.forEach(t => {
      const loginDiv = document.querySelector(`.login-${t}`);
      const headerDiv = document.querySelector(`.login-header div:nth-child(${types.indexOf(t) + 1})`);
      
      if (t === type) {
        loginDiv.classList.add('active'); // Show active tab
        headerDiv.classList.add('active'); // Highlight active tab
      } else {
        loginDiv.classList.remove('active'); // Hide inactive tab
        headerDiv.classList.remove('active'); // Remove highlight from inactive tab
      }
    });
  }
  
  // Function to switch between signup tabs
  function showSignupTab(type) {
    const types = ['prisoner', 'lawyer', 'judge'];
    types.forEach(t => {
      const signupDiv = document.querySelector(`.signup-${t}`);
      const headerDiv = document.querySelector(`.signup-header div:nth-child(${types.indexOf(t) + 1})`);
      
      if (t === type) {
        signupDiv.classList.add('active'); // Show active tab
        headerDiv.classList.add('active'); // Highlight active tab
      } else {
        signupDiv.classList.remove('active'); // Hide inactive tab
        headerDiv.classList.remove('active'); // Remove highlight from inactive tab
      }
    });
  }
  
  // Event listeners for buttons
  document.querySelector(".login-btn").addEventListener("click", showLoginForm);
  document.querySelector(".signup-btn").addEventListener("click", showSignupForm);
  
  // Optional: Hide forms when clicking outside (you can implement this as needed)
  window.onclick = function(event) {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    if (event.target == loginForm) {
      loginForm.style.display = "none"; // Hide login form
    }
    if (event.target == signupForm) {
      signupForm.style.display = "none"; // Hide signup form
    }
  };
  