document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        
        window.location.href = 'paginas/inicio.html'; 
    } else {
    
        alert('Usuario o contraseña incorrectos.');
        window.location.href = 'practica1.html'; 
    }
});