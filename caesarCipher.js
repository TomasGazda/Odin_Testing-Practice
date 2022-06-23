function caesarCipher(shift,string){

    if(shift == 0 ){
        return string;
    }
    let result = '';
    for (let index = 0; index < string.length; index++) {
        const element = string[index].charCodeAt(0);
        if((element>96 && element<123)||(element>64 && element<91)){
            result = result+(returnletter(string[index],shift));

        }else{
            result = result+string[index];
        }

        
    }
    return result

}

function returnletter(element,shift){
    const position = element.charCodeAt(0);
    let updatedPosition = position+shift;
    if(position>96 && position<123){
        if(updatedPosition<97){
            return String.fromCharCode(122 - (96-updatedPosition));
        }
        if(updatedPosition>122){
            return String.fromCharCode(96 + (updatedPosition-122));
        }
        return String.fromCharCode(updatedPosition);
    }
    if(position>64 && position<91){
        if(updatedPosition<65){
            return String.fromCharCode(90 - (64-updatedPosition));
        }
        if(updatedPosition>90){
            return String.fromCharCode(64 + (updatedPosition-90));
        }
        return String.fromCharCode(updatedPosition);
    }
}



export {caesarCipher,returnletter}