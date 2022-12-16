function verificaVazio(valor) {

    if(valor == '' || typeof valor == 'undefined' || valor == null){
        return true
    }else{
        return false
    }
}

function verificaMin(valor) {
    if(valor.length >= 3){
        return true
    }else{
        return false
    }
}

function verificaMax(valor) {
    if(valor.length <= 8){
        return true
    }else{
        return false
    }
    
}

function verificaInt(valor){
    if(valor = parseInt(valor)){
        return true
    }else{
        return false
    }
}

function verificaFloat(valor){
    if ((valor = parseFloat(valor))) {
        return true;
    } else {
        return false;
    }
}