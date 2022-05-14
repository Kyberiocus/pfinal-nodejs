window.onload = init;
var headers = {};
var url = "http://localhost:3000"

function init(){
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }

        document.querySelector('.btn-primary').addEventListener('click', function(){
            window.location.href = "altas.html"
        })
    
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "bajas.html"
        })
    
        document.querySelector('.btn-tertiary').addEventListener('click', function(){
            window.location.href = "cambios.html"
        })
    
        document.querySelector('.btn-quaternary').addEventListener('click', function(){
            window.location.href = "consulta.html"
        })
    }
    else{
        window.location.href = "index.html"
    }
}