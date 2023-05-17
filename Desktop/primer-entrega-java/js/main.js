alert ("BIENVENIDO AL CENTRO DE COBRO ELECTRICO")
const usuarioAutorizado = "Noelia";
const contraseniaAutorizada = "1234";

let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");
if(usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert("Bienvenido " + usuario)

let monto = prompt("Ingrese el monto Impago");
let cuotas =  prompt("Ingrese la cantidad de cuotas a realizar (3/6/9)");
const IVA = 15;

while ((monto <= 0) || (montoInpago > 50000)){
    monto = prompt("Ingrese  el monto :(hasta 50.000 pesos)")
}

let cuota = 0

while (( cuotas != 3) && (cuotas != 6) && (cuotas != 9)){
 cuotas = prompt ("Ingrese la cantidad de cuotas:(3,6,9)");
}
}