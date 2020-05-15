function sum(numbers){
    let size=numbers.length;
    let sum=0;
    for (let i=0;i<size;i++){
        sum+=numbers[i];
    }
    return sum;
}
 
function sum2(numbers){
    let sum=0;
    for (let number in numbers){
        sum+=numbers[number];
    }
    return sum;
}
function longestWord(words){
    let size=words.length;
    let longest=0;
    let lword;
    for (let i=0;i<size;i++){
        if (words[i].length>longest){
            lword=words[i];
            longest=words[i].length
        }
    }
    return lword;
}
function range(min,max,step){
    let tab=[];
    let i=0;
    let j=0;
    while (i<=max){
        if (min+step*j<=max){
            tab.push(min+step*j);
        }
        i=min+step*j;
        j++;
    }
    return tab;
}
function nbOccurences(text,mot){
    let tab=text.split(" ");
    let size=text.length;
    let occur=0;
    for (let i=0;i<size;i++){
        if (tab[i]==mot){
            occur++;
        }
    }
    return occur;
}
function flatten2D(array){
    let tab=[];
    let size=array.length;
    for (let i=0;i<size;i++){
        for (let j=0;j<array[i].length;j++){
            tab.push(array[i][j]);
        }
    }
return tab;
}
function multiplication(){
    for (let i=0; i<=9;i++){
        for (let j=0;j<=9;j++){
            console.log(i+""+j+"="+ij);
        }
    }
}
function chiffre_caesar(msgcl, dec) {
  
    if (dec < 0)
      return caesar(msgcl, dec + 26);
    var msgc = '';
    for (var i = 0; i < msgcl.length; i++) {
      var lettre = msgcl[i];
      if (lettre.match(/[a-z]/i)) {
        var asc = msgcl.charCodeAt(i);
        if ((asc >= 65) && (asc <= 90))
          lettre = String.fromCharCode(((asc - 65 + dec) % 26) + 65);
        else if ((asc >= 97) && (asc <= 122))
          lettre = String.fromCharCode(((asc - 97 + dec) % 26) + 97);
      }
      msgc += lettre;
    }
    return msgc;
  }
  
  function dechiffre_caesar(msgc, dec) {
    
    if (dec < 0)
      return caesar(msgc, dec + 26);
    var msgcl = '';
    for (var i = 0; i < msgc.length; i++) {
      var lettre = msgc[i];
      if (lettre.match(/[a-z]/i)) {
        var asc = msgc.charCodeAt(i);
        if ((asc >= 65) && (asc <= 90))
          lettre = String.fromCharCode(((asc - 65 - dec) % 26) + 65);
        else if ((asc >= 97) && (asc <= 122))
          lettre = String.fromCharCode(((asc - 97 - dec) % 26) + 97);
      }
      msgcl += lettre; 
    }
    return msgcl;
  }