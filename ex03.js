/* Ecrivez une fonction divide qui prend en paramètre deux arguments et qui retourne la division du premier par le second, attention la division par zéro est interdite et doit retourner la chaîne de caractère Forbidden */

function divide(firstNumber, secondNumber){
  if (secondNumber ==0){
    return ('Forbidden')
  } else {
    return firstNumber / secondNumber
  }
}


// Ne touchez pas les lignes en dessous.
module.exports = {
 divide
}