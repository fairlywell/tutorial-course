const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

function shuffle(array) {
  // lap voi i la so phan tu , i > i , i giam dan
  for(let i = array.length - 1; i > 0; i--) {
    // lay random tu 1 den so phan tu
    const random = Math.floor(Math.random() * (i + 1));
    // hoan doi ngau nhien chung cho nhau
    [array[i], array[random]] = [array[random], array[i]];
  }
}

console.log(cards);