/**
 * utilisez les nouveau guillets ` (alt gr + 7) pour concaténer le nom et le prénom passé en paramètre
 * Renvoi le résultat
 *
 * exemple: "John", "Doe" => "John Doe"
 *
 * contrainte:
 *  - ne pas utiliser l'opérateur +
 *  - ne pas utiliser la fonction concat de String
 */

const concat = (var1, var2) => `${var1} ${var2}`;
console.log(concat("John", "Doe"));

module.exports = {concat};