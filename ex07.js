// Hello user ! 
/* Ecrire un programme qui affiche dans la console le texte suivant (OUTPUT).
Le programme doit demander à l'utilisateur son prénom. Et ensuite lui souhaiter une belle journée avec son prénom indiqué.

===== OUTPUT =====

Hello user !
How are you today ? What is your name ?> Peter
Have a nice day Peter !

===============

Explications du programme, Peter est le nom indiqué par l'utilisateur, le programme sera testé avec différentes valeurs et devra affiché la valeur indiqué par l'utlisateur lors de la demande du programme.
*/


// Pensez à tester votre programme sur index.js
console.log ("Hello User");
console.log ('How are you today ?');
const userName = prompt('What is your name ?');
console.log (`Have a nice day, ${userName}`);