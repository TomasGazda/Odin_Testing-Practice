function reverseString(string){
    let reverse = '';
    for (let index = 0; index < string.length; index++) {
        reverse = string[index] + reverse; 
    }
    return reverse.toLowerCase();
}


export{reverseString};