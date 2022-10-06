let veces = function(){
        return play=+prompt("ingrese la veces que desea jugar");
    }
    const cantidad = veces()

    
    const ia = pc;
    for (i=0; i<veces; i++){
        
        let jugador= function(){
        let jugador1=+prompt("Escoja la opcion que desea piedra-papel-tijera")
        switch(opcion){
            case 1: papel
            break;
            case 2: tijeras
            break;
            case 3: Piedra
            break;
        }
        let pc = function(){
            let maquina = (Math.floor(Math.random() * 3 + 1))
            return (maquina)
        }
        if(pc == opcion){
            alert("hay un empate")
        }
        else if(pc == tijeras && jugador == papel){
            alert("Ha ganado la maquina")
        }
        else if(pc == Piedra && jugador == tijeras){
            alert("Ha ganado la maquina")
        }
        else if(pc == papel && jugador == Piedra){
          alert("Ha ganado la maquina")    
        }
        else if(pc == tijeras && jugador == papel){
            alert("Ha ganado la maquina")    
          }
        else if(jugador == tijeras && pc == papel){
          alert("Ha ganado el jugador") 
        }
        else if(jugador == Piedra && pc == tijeras){
            alert("Ha ganado el jugador")
        }
        else if(jugador == papel && pc == Piedra){
            alert("Ha ganado el jugador")
        }
        else if(jugador == tijeras && pc == papel){
            alert("Ha ganado el jugador")
        }


       
        return (jugador1)
    }
}

    let contajugador = function (){
        playerone++
        return(playerone)
    }

    let contamaquina = function (){
        ia++
        return (ia)
    }
       
        
        
       
