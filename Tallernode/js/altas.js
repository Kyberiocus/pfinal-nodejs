window.onload = init;

function init(){
    document.querySelector('.btn-secondary').addEventListener('click', function(){
        window.location.href = "main.html"
    })

    document.querySelector('.btn-primary').addEventListener('click', altas);
}

function altas(){
    var name = document.getElementById('input-name').value;
    var last = document.getElementById('input-last').value;
    var tel = document.getElementById('input-tel').value;
    var email = document.getElementById('input-email').value;
    var dire = document.getElementById('input-dire').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/empleado/altas',
        data: {
            name_empleado: name,
            lastname_empleado: last,
            tel_empleado: tel,
            email_empleado:email,
            address_empleado: dire
        },
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function(res){
        console.log(res);
        alert("Registro exitoso")
    }).catch(function(err){
        console.log(err);
    })
}