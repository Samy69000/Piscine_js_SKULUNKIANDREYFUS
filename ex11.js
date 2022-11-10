// bissextile

/* Créer une fonction bissextile,qui determine si une année saisie par l'utilisateur est bissextile.

Rappel : Une année bissextile doit avoir son millésime divisible par 4. Mais si le millésime est divisible par 100, il doit aussi l'être par 400 : 2000 était bissextile ; 1700, 1800 et 1900 ne l'ont pas été.)

Si l'année est bissextile la fonction retourne 0, si l'année n'est pas bissextile la fonction retourne 1


*/

function bissextile(year) {
  if (year%4==0 && year%100!=0 || year%400==0){
    return 0;
  } else {
    return 1;
  } 
  }


module.exports = {
  bissextile
}