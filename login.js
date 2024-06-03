document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('loginError');

    form.addEventListener('submit', function(event) {
        event.preventDefault();


        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === 'usuario' && password === 'senha') {
          
            window.alert('Login bem-sucedido!');
           
          window.location.href="logado.html" 
          
        } else {
            loginError.textContent = 'Usuário ou senha incorretos';
        }
    });
});
