function validateIntegerNumber(value){
    if(value != 0 && !value){
        return false;
    }
    value = parseFloat(value);
    if(isNaN(value)){
        return false;
    }else if(!Number.isInteger(value)){
        return false;
    } else {
        return true;
    }
};

export{validateIntegerNumber};