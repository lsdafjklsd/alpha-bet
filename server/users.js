const FACES = [
  '( >д< )',
  '( ;¬_¬)',
  '(ಠ ∩ ಠ)',
  '<(`^´)>',
  '┐(ﾟ～ﾟ)┌',
  '╰|⊡_⊡|╯',
  '|(ᗒᗣᗕ)|',
  '[ ⊙～⊙]',
  '(*’･Д･)',
  '(||ﾟДﾟ}',
  '\/\/ ･ั_･ั)',
  '(_ŏ.ŏ)/',
  '[ ¤_¤]',
  '( •᷄⌓•᷅ )',
  '૮(‘▱๋’ )',
]

const randomFace = () => (
  FACES[Math.floor(Math.random() * FACES.length)]
)

module.exports = () => {
  const users = []
  const get = id => (
    users.find(user => user.id === id)
  )
  const add = id => {
    if (!get(id)) {
      users.push({
        id: id,
        bets: [],
        face: randomFace(),
        amount: 99,
      })
    }
    return users
  }
  const rm = id => {
    const user = get(id)
    if (user) {
      users.splice(users.indexOf(user), 1)
    }
    return users
  }
  const addBet = (id, letter) => {
    const user = get(id)
    if (user && user.bets.indexOf(letter) === -1) {
      user.bets.push(letter)
    }
    return users
  }
  const rmBet = (id, letter) => {
    const user = get(id)
    if (user && user.bets.indexOf(letter) > -1) {
      user.bets.splice(user.bets.indexOf(letter), 1)
    }
    return users
  }
  return {
    get: get,
    add: add,
    rm: rm,
    users: users,
    addBet: addBet,
    rmBet: rmBet,
  }
}
