
const precioJazz = 100;
const precioRock = 150;
const precioTropical = 100;
const precioPop = 200;

const precioSolista = 10;
const precioDueto = 20;
const precioTrio = 30;
const precioCuarteto = 40;
let flag;

do {   
const bandasAContratar = prompt(`Ingrese la opción que quiere contratar
1.Jazz
2.Rock
3.Tropical
4.Pop
5.Opción equivocada
`);


const cantidadDeIngrantes = prompt(`Ingrese el tamaño del artista
1.Solista
2.Dueto
3.Trio
4.Cuarteto
5.Opción equivocada
`);
console.log("Banda",bandasAContratar);
console.log("Banda",cantidadDeIngrantes);
if (bandasAContratar ==5 && cantidadDeIngrantes ==5){
    break
}
flag = prompt(`Quiere pedir otra Banda? Y/N`); 
console.log("flag",flag);
} while (flag =="Y");





