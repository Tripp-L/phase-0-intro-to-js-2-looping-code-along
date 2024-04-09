// const gifts = ["teddy bear", "drone", "doll"]

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) { // starts i at 0 because arrays have zero-based indexes.
//     console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     debugger
// }

//   return gifts
// }

// wrapGifts(gifts)


function writeCards(names, event) {

  const messagesArr = []
  for (let i = 0; i < names.length; i++) {
  messagesArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  debugger
}

return messagesArr
}

function countDown() {
  let countDown = 10
  while (countDown > -1) {
    console.log(countDown--)
  }
}

/* Original code:
function writeCards(names, event) {
  const messagesArray = []
  for (let i = 0; i < names.length; i++) {
    messagesArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
  return messagesArray
}
function countDown() {
  let startingNumber = 10
  while (startingNumber > -1) {
    console.log(startingNumber--)
  }
}
*/
