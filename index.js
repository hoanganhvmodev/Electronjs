const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

window.onload=function() {
  document.querySelector("#login-button").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
      username: username,
      password: password,
    };

    window.electron.login(data);
  });

  if (signUpButton) {
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
  }
  
  if (signInButton) {
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }
};
