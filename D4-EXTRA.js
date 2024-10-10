/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
const checkArray = function(arr) {
    let sum = 0;
    arr.forEach(num => {
      if (num > 5) {
        console.log(`${num} è maggiore di 5`);
        sum += num;
      } else {
        console.log(`${num} NON è maggiore di 5`);
      }
    });
    return sum;
  };
  
  /* EXTRA 2
   Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
  */
  const shoppingCartTotal = function(shoppingCart) {
    let total = 0;
    shoppingCart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };
  
  /* EXTRA 3
   Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
  */
  const addToShoppingCart = function(shoppingCart, newItem) {
    shoppingCart.push(newItem);
    return shoppingCart.length;
  };
  
  /* EXTRA 4
   Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
  */
  const maxShoppingCart = function(shoppingCart) {
    let maxItem = shoppingCart[0];
    shoppingCart.forEach(item => {
      if (item.price * item.quantity > maxItem.price * maxItem.quantity) {
        maxItem = item;
      }
    });
    return maxItem;
  };
  
  /* EXTRA 5
   Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
  */
  const latestShoppingCart = function(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1];
  };
  
  /* EXTRA 6
   Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
   La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
  */
  const loopUntil = function(x) {
    let count = 0;
    while (count < 3) {
      const randomNum = Math.floor(Math.random() * 10);
      console.log(randomNum);
      if (randomNum > x) {
        count++;
      } else {
        count = 0; // resetta il conteggio se il numero non è maggiore di x
      }
    }
  };
  
  /* EXTRA 7
   Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
  */
  const average = function(arr) {
    let sum = 0;
    let count = 0;
    arr.forEach(item => {
      if (typeof item === "number") {
        sum += item;
        count++;
      }
    });
    return count === 0 ? 0 : sum / count;
  };
  
  /* EXTRA 8
   Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
  */
  const longest = function(arr) {
    let longestStr = "";
    arr.forEach(str => {
      if (str.length > longestStr.length) {
        longestStr = str;
      }
    });
    return longestStr;
  };
  
  /* EXTRA 9
   Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
   La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
  */
  const antiSpamFilter = function(emailContent) {
    const contentLower = emailContent.toLowerCase();
    return !(contentLower.includes("spam") || contentLower.includes("scam"));
  };
  
  /* EXTRA 10
   Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
  */
  const daysSince = function(date) {
    const today = new Date();
    const diffTime = today - new Date(date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  /* EXTRA 11
   Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
   Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
   Es.: x = 3, y = 2
   ["00","01","02"
   "10","11","12"]
  */
  const matrixGenerator = function(x, y) {
    const matrix = [];
    for (let i = 0; i < x; i++) {
      const row = [];
      for (let j = 0; j < y; j++) {
        row.push(`${i}${j}`);
      }
      matrix.push(row);
    }
    return matrix;
  };
  