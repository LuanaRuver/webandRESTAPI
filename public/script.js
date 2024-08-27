const buttons = document.querySelectorAll('.Sing');
buttons.forEach(button => { button.addEventListener('click', () => {
    const formLogin = document.getElementById('logar');
    formLogin.style.display = 'none';
    const formCriarUsuario = document.getElementById('criar_usuario');
    formCriarUsuario.style.display = 'flex'; 
})});

