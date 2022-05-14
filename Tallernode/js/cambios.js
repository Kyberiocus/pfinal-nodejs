window.onload = init;

function init(){
    document.querySelector('.btn-secondary').addEventListener('click', function(){
        window.location.href = "main.html"
    })

    document.querySelector('.btn-primary').addEventListener('click', cambios);
}

function cambios(){
    var id = document.getElementById('input-id').value;
    var name = document.getElementById('input-name').value;
    var last = document.getElementById('input-last').value;
    var tel = document.getElementById('input-tel').value;
    var email = document.getElementById('input-email').value;
    var dire = document.getElementById('input-dire').value;

    axios({
        method: 'put',
        url: `http://localhost:3000/empleado/cambios/${id}`,
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
        alert("Empleado modificado correctamente")
    }).catch(function(err){
        console.log(err);
    })
}