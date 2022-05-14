window.onload = init;
var headers = {};
var url = "http://localhost:3000"

function init(){
    document.querySelector('.btn-primary').addEventListener('click', function(){
        window.location.href = "main.html"
    });
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        loadEmpleado();
    }
    else{
        window.location.href = "index.html"
    }
}

function loadEmpleado(){
    axios.get( url + "/empleado", headers)
    .then(function(res){
        displayEmpleado(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
}

function displayEmpleado(empleado){
    var body = document.querySelector("body");
    for(var i = 0; i<empleado.length; i++){
        body.innerHTML += `<h3>${empleado[i].name_empleado}</h3>`
    }
    document.querySelector('.btn-primary').addEventListener('click', function(){
        window.location.href = "main.html"
    });
}