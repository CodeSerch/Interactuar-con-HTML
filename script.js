class Usuario {
    constructor(id, nombre, placas, ethereum, gastoElectrico) {
        this.id = id;
        this.nombre = nombre;
        this.placas = placas;
        this.ethereum = ethereum;
        this.gastoElectrico = gastoElectrico;
    }
}
function IngresarDato(dato) {
    return prompt("Ingresa tu " + dato);
}

let arrayUsuarios = new Array;
function añadirUsuario() {
    let cantidadDeUsuarios = prompt("ingresa el numero de objetos a ingresar");
    for (i = 0; i < cantidadDeUsuarios; i++) {
        let nombre = IngresarDato("nombre");
        let placas = IngresarDato("placas");
        let ethereum = IngresarDato("ethereum");
        let gastoElectrico = IngresarDato("gastoElectrico");
        let id = i + 1;
        arrayUsuarios[i] = new Usuario(id, nombre, placas, ethereum, gastoElectrico);
        console.log("objeto añadido: " + JSON.stringify(arrayUsuarios[i]));
        localStorage.setItem('arrayUsuarios', JSON.stringify(arrayUsuarios));
    }
}
console.log("array de objetos: " + JSON.stringify(arrayUsuarios));
function actualizar() {
    let listaOrdenada = JSON.parse(localStorage.getItem('arrayUsuarios')).sort(function (a, b) {
        return (a.ethereum - b.ethereum)
    })
    document.getElementById("objeto").innerHTML = JSON.stringify(listaOrdenada);
}

function clearUsuarios(){
    localStorage.removeItem('arrayUsuarios');
    console.log("variables locales borradas..")
}

function textoRandom(){
    let id = document.getElementById('textoRandom');
    const min = 0;
    const max = 5;
    let nRandom = Math.floor(Math.random() * (max - min)) + min;
      switch (nRandom) {
        case 1:
            id.innerHTML = "Saludo random";
          break;
        case 2:
            id.innerHTML = "El Sol ​ es una estrella de tipo-G de la secuencia principal y clase de luminosidad V que se encuentra en el centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario.";
          break;
        case 3:
            id.innerHTML = "Y dice, ¿Como me llamo yo?";
          break;
        case 4:
          id.innerHTML ="El kilogramo de cerezas cuesta $3.00.";
          break;
        default:
            id.innerHTML = "Lo lamentamos, por el momento no disponemos de tu compra";
      }
}