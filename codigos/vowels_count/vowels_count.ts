function count(letter:string,text:string):number{//this funtion count how many letters equal the letter parameter have in text parameter and retun this number
    let cauntage=0 // this is the number to represent how many letter equal letter parameter have in text paremeter
    for(let x=0;x<text.length;x++){
        if(text[x]===letter){
            cauntage++
        }
    }
    return cauntage
}
function vowels_count(text:string):number{
    return count('a',text)+count('e',text)+count('i',text)+count('o',text)+count('u',text)//in this line I aply the count function to all vowels in the text parameter
}
console.log(vowels_count('netherlands'));