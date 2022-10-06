let piedra=0
let papel=1
let tijera=2

let pc=0
let player=0
let machine

let cantidad=(+prompt('digite la cantidad de veces que desea jugar?'))

for (let i = 0; i < cantidad; i++) {
    escoger=prompt(`escoja un numero para jugar  1.piedra  2.papel  3.tijera`)

   switch (escoger) {
      case 'piedra':
         player=1
         break;
         case 'papel':
         player=2
         break;
         case 'tijera':
         player=3
         break;

   }
 machine=(Math.floor(Math.random()*3+1));


 if (machine==player) {
    alert(`empate,ambos escogieron lo mismo`)
 }
 else if (machine==1 & player==2) {
    alert('jugador gana ,la maquina saco piedra y el jugador papel ');player=player+1
 }
 else if (machine==2 & player==3) {
    alert('jugador a ganado, maquina saca papel y el ujgador tijeras');player+player+1
 }
 else if (machine==3 & player==1) {
    alert('jugador a ganado, maquina saco tijera y jugador piedra');player=player+1
 }
 else if (player==1 & machine==2 ) {
    alert('gana la maquina, maquina saco piedra y jugador papel');pc+pc+1
 }
 else if (player==2 & machine==3) {
    alert('gana la maquina, maquina saco papel y jugador tijera');pc+pc+1
 }
 else if (player==3 & machine==1) {
    alert('gana la maquina, maquina saco piedra y jugador saco tijera');pc=pc+1
 }

}
alert(`el jugador gano ${player} la maquina gano ${pc}`)


let game=function () {
   let ppt=+prompt(`digite cuantas veces desea jugar`)
   return(ppt)
}

const jugar=game()