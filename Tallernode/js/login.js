window.onload = init;

function init(){
    document.querySelector('.btn-primary').addEventListener('click', login);
}

function login(){
    var user = document.getElementById('input-user').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/usuario/login',
        data: {
            name_usuarios: user,
            password_usuario: pass
        }
    }).then(function(res){
        if(res.data.code === 200){
            localStorage.setItem("token", res.data.message);
            window.location.href = "main.html"
        }
        else{
            alert("Usuario y/o contraseña incorrectos")
        }
    }).catch(function(err){
        console.log(err);
    })
}