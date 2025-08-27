function simulador(){

   
    let nombreC = document.getElementById('nombre').value;
    let nTelefono = document.getElementById('telefono').value;
    let correo = document.getElementById('email').value;
    let mInvertido = document.getElementById('inversion').value;
    let tInversion = document.getElementById('tiempo').value;

    //HACEMOS LA FUNCION PARA QUITAR EL DISABLED A POST-SIMULATION Y COLOCARSELO A PRE-SIMULATION
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

}

document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('calcular').addEventListener('click',simulador)
})