window.onload = init;
var headers = {};
var url = "http://localhost:3000"

function init(){
    document.querySelector('.btn-secondary').addEventListener('click', function(){
        window.location.href = "main.html"
    })

    headers = {
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token"),
        }
    }

    document.querySelector('.btn-primary').addEventListener('click', bajas);
}

function bajas(){
    var id = document.getElementById('input-id').value;

    axios({
        method: 'delete',
        url: 'http://localhost:3000/empleado/bajas/' + id,
        data: {
            id_empleado: id
        },
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function(res){
        console.log(res);
        alert("Empleado borrado")
    }).catch(function(err){
        console.log(err);
    })
}


/**function bajas(){
    var id = document.getElementById('input-id').value;
    axios.delete( url + "/empleado/bajas/" + id, headers)
    .then(function(res){
        console.log(res);
        alert("Empleado borrado")
    }).catch(function(err){
        console.log(err);
    })
}
**/