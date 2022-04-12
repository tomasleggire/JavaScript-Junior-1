//variables (var let const)(diferencias en el cuaderno)

                                                                                       /*

let numero = 15;

//texto con ""

let nombre, nombre2, nombre3;
nombre = "leyi";
nombre2 = "mati";
nombre3 = "juan";

alert(nombre);
alert(nombre2);
alert(nombre3);
 
// prueba con prompt 

let nombre4 = prompt ("dime tu nombre");

alert("hola " + nombre4);

//Operadores de asignacion ej

numero -= 5;

document.write(numero);

                                                       

//Operadores aritmeticos ej

numero2 = 10;

//-- hace que le reste 1 al numero
numero2--;

resultado = numero2;

alert(resultado);

                                                         
 
//Concatenacion 

saludo = "hola leyi";

pregunta = " como estas? ";

frase = saludo + pregunta;

document.write(frase);

//forzar con string vacio para que sea todo texto, sirve para que no se sumen los numeros por ej

numero = 5;

numero2= 10;

resultado = "" + numero + numero2;

document.write(resultado)
                                                     
//mejor metodo para concatenar ${} , hay q usar `` en vez de comillas cuando usamos ${}

nombre = "Leggire";

frase2 = `soy ${nombre} y estoy caminando`;

document.write(frase2);

                                                                                          

//Operadores de comparacion: comparan valores y nos devuelven un valor booleano (true/false)

let numero= 23;
let numero2= 22;

document.write(numero == numero2);
                                                                                             
//Operadores logicos: (&& || !) = solo usa valores booleanos (leelo como si fuese una pregunta, porq los resultados son true o false)

num1= 12;
num2= 24;

afirmacion1 = num1 < num2;
afirmacion2 = num1 != num2;
                                       
document.write(afirmacion1 && afirmacion2);
                                                                             
//Condicionales: if (true/false) solo se ejecuta si da true 
// else if: si no se ejecuta el if, se comprueba el siguiente else if, y si es true, se ejecuta
// else: si no se cumple ningun if y ningun else if, se ejecuta el else

nombre = "leyi";

if (nombre == "juan") {
    alert("tu nombre es juan");
}

else if (nombre == "pelado") {
    alert("tu nombre es pelado");
}

else {
    alert("tu nombre es otro");
}
                                                                                */











//Problema A

dineroCofla = prompt("Cuanta gita tenes Cofla?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, comprate el helado de agua");
    alert("y te sorabn " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, comprate el helado de crema");
    alert("y te sorabn " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, comprate el helado heladix");
    alert("y te sorabn " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla <= 1.8) {
    alert("Cofla, comprate el helado heladovich");
    alert("y te sorabn " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 2.9) {
    alert("Cofla, comprate el helardo o el pote de confites");
    alert("y te sorabn " + (dineroCofla - 2.9));
}
else {
    alert("No te alcanza nada pa");
}

dineroLeyi = prompt("Cuanta gita tenes Leyi?");

if (dineroLeyi >= 0.6 && dineroLeyi < 1) {
    alert("Leyi, comprate el helado de agua");
}
else if (dineroLeyi >= 1 && dineroLeyi < 1.6) {
    alert("Leyi, comprate el helado de crema");
}
else if (dineroLeyi >= 1.6 && dineroLeyi < 1.7) {
    alert("Leyi, comprate el helado heladix");
}
else if (dineroLeyi >= 1.7 && dineroLeyi <= 1.8) {
    alert("Leyi, comprate el helado heladovich");
}
else if (dineroLeyi >= 2.9) {
    alert("Leyi, comprate el helardo o el pote de confites");
}
else {
    alert("No te alcanza nada pa");
}

dineroJuan = prompt("Cuanta gita tenes Juan?");

if (dineroJuan >= 0.6 && dineroJuan < 1) {
    alert("Juan, comprate el helado de agua");
}
else if (dineroJuan >= 1 && dineroJuan < 1.6) {
    alert("Juan, comprate el helado de crema");
}
else if (dineroJuan >= 1.6 && dineroJuan < 1.7) {
    alert("Juan, comprate el helado heladix");
}
else if (dineroJuan >= 1.7 && dineroJuan <= 1.8) {
    alert("Juan, comprate el helado heladovich");
}
else if (dineroJuan >= 2.9) {
    alert("Juan, comprate el helardo o el pote de confites");
}
else {
    alert("No te alcanza nada pa");
}


