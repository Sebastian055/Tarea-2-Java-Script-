let arreglo1 = [1,2,3,4,5];
console.log(arreglo1);

let suma = arreglo1.reduce ((suma,valor)=>{
    return suma+valor
})
console.log(suma);

let foreach = arreglo1.foreach(num =>
 console.log("Los numeros son", numero));

let filtro = arreglo1.filter (numero => numero > 3);
console.log (filtro);

let mapeo = arreglo1.map (numero => numero*2);
console.log (mapeo);



let arreglo2 = ["rojo","verde","azul","amarillo"];
console.log(arreglo2);

let colores = arreglo2.reduce((color1, color2 ) => color1 + "" + color2, "");
console.log ("Los colores son: ", colores);

let vercolor = colores.foreach(color =>
console.log("Los colores son", color))

let colorr = colores.filter (color => color.length > 5);
console.log ("Los colores que tienen mas letras son", colorr);

let colormultiplicado = colores.map(color => color*3);
console.log ("los colores son", colormultiplicado)



let arreglo3 = [10, 11, 12, 13, 14, 15];
console.log(arreglo3);

let Sumaredades = arreglo3.reduce ((valor, edad) => valor+edad, 0);
console.log("La suma de las edades es:", Sumaredades);

let edad = arreglo3.foreach (edad => 
console.log ("Las respectivas edades son", edad))

let mayoresde = arreglo3.filter (edad => edad > 14);
console.log ("Las edades mayores a 14 años son", mayoresde);

let incrementoedad = arreglo3.map (edad => edad+1);
console.log ("Las edades con un incremento de uno son", incrementoedad);



let arreglo4 = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
console.log(arreglo4);

let dias = arreglo4.reduce ((dias, diass) => dias + "" + diass, "");
console.log ("Los dias son", dias);

let diasforeach = arreglo4.foreach (dia => 
console.log("Los dias son", arreglo4));

let mayoresletras = arreglo4.filter (dia => dia.length > 6);
console.log ("Los dias que tienen mas de 6 letras son", mayoresletras)

let letrasprimero = arreglo4.map (dia => dia [0]);
console.log ("Las primeras letras de los dias son:", letrasprimero);



let arreglo5 = ["ford", "toyota", "lamborghini", "chevrolet"];
console.log (arreglo5);

let carros = arreglo5.reduce ((valores, auto) => valores + "" + auto, "");
console.log ("Los carros en el arreglo son los sigueintes", arreglo5);

let carrosforeach = arreglo5.foreach (carro => 
console.log ("los autos son", auto))

let tipocarro = arreglo.filter (auto => carro.length = "toyota");
console.log ("El auto es", tipocarro);

let carrosss = arreglo5.map (carro => carro+1);
console.log ("los carros son",carrosss );







