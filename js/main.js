function simulador(){

    //VARIABLES QUE CAPTURAN LOS VALORES DE LOS CAMPOS
    let cNombre = document.getElementById('nombre').value;
    let cTelefono = document.getElementById('telefono').value;
    let cEmail = document.getElementById('email').value;
    let cInversion = document.getElementById('inversion').value;
    let cTiempo = document.getElementById('tiempo').value;

    //VARIABLES QUE CAPTURAN LAS ETIQUETAS SPAN EN LAS QUE SE MUESTRAN LOS VALORES POR ESO LA S DE SHOW DE MOSTRAR
    const sTiempo = document.getElementById('sTiempo');
    const sInteres = document.getElementById('sInteres');
    const sTotal = document.getElementById('sTotal');
    const sGanancia = document.getElementById('sGanancia');
    const sNombres = document.getElementById('sNombres');
    const sCorreo = document.getElementById('sCorreo');

    //DECLARAMOS LAS VARIABLES PARA LA GANANCIA Y EL TOTAL
    let ganancia = 0;
    let total = 0;

    //IDENTIFICAMOS EL VALOR DEL TIEMPO DE LA INVERSION Y DEPENDIENDO EL TIEMPO SE DARA UNA TASA DE INTERES
    switch (cTiempo) {
        case '1':
            //EN ESTE CASE REALIZAREMOS EL CALCULO SI EL TIEMPO CORRESPONDE A 1 AÑO
            ganancia = (cInversion * 0.008)* 12;
            total = parseInt(cInversion) + parseInt(ganancia);
            sInteres.textContent = "0.8%";
            sTiempo.textContent = "12 MESES";
            break;
        case '2':
            //EN ESTE CASE REALIZAREMOS EL CALCULO SI EL TIEMPO CORRESPONDE A 2 AÑOS
            ganancia = (cInversion * 0.013)* 24;
            total = parseInt(cInversion) + parseInt(ganancia);
            sInteres.textContent = "13%";
            sTiempo.textContent = "24 MESES";
            break;
        case '3':
            //EN ESTE CASE REALIZAREMOS EL CALCULO SI EL TIEMPO CORRESPONDE A 3 AÑOS 
            ganancia = (cInversion * 0.017)* 36
            total = parseInt(cInversion) + parseInt(ganancia);
            sInteres.textContent = "17%";
            sTiempo.textContent = "36 MESES"
            break;
    }

    sTotal.textContent = total;
    sGanancia.textContent = ganancia;
    sNombres.textContent = cNombre;
    sCorreo.textContent = cEmail;

    //HACEMOS LA FUNCION PARA QUITAR EL DISABLED A POST-SIMULATION Y COLOCARSELO A PRE-SIMULATION
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

}

document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('calcular').addEventListener('click',simulador)
})