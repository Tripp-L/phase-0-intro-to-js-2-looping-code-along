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
