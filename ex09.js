// ChoomChoom

/* Ecrivez une fonction choomChoom qui prend en paramètre un nombre entier et qui retourne la chaîne de caractère Choom si le nombre est pair et ChoomChoom si le nombre est impair */

/* exemple : nombre 4 ===> "Choom"
              nombre 5 ===> "ChoomChoom"    */


function choomChoom(a){
if (a%2==0) {
  return 'Choom';
} else {
  return 'ChoomChoom'
}
}
// Ne touchez pas les lignes en dessous
module.exports = {
  choomChoom
}