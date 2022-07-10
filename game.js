document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'hat',
      img: 'photos/elmohat_icon.png'
    },
    {
      name: 'rock',
      img: 'photos/elmorock_icon.png'
    },
    {
      name: 'tounge',
      img: 'photos/elmotounge_icon.png'
    },
    {
      name: 'pinknose',
      img: 'photos/elmopinknose_icon.png'
    },
    {
      name: 'sunglasses',
      img: 'photos/elmosunglasses_icon.png'
    },
    {
      name: 'rat',
      img: 'photos/elmorat_icon.png'
    },
    {
      name: 'hat',
      img: 'photos/elmohat_icon.png'
    },
    {
      name: 'rock',
      img: 'photos/elmorock_icon.png'
    },
    {
      name: 'tounge',
      img: 'photos/elmotounge_icon.png'
    },
    {
      name: 'pinknose',
      img: 'photos/elmopinknose_icon.png'
    },
    {
      name: 'sunglasses',
      img: 'photos/elmosunglasses_icon.png'
    },
    {
      name: 'rat',
      img: 'photos/elmorat_icon.png'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const triesDisplay = document.querySelector('#tries')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  var score = 0

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'photos/elmo_blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
  function oneCard() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    cards[optionOneId].setAttribute('src', 'photos/elmo_blank.png')
    cardsChosen = []
    cardsChosenId = []
  }
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    console.log(optionOneId)
    console.log(cardsChosenId)

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'photos/elmo_blank.png')
      cards[optionTwoId].setAttribute('src', 'photos/elmo_blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'photos/white.png')
      cards[optionTwoId].setAttribute('src', 'photos/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'photos/elmo_blank.png')
      cards[optionTwoId].setAttribute('src', 'photos/elmo_blank.png')
      alert('Sorry, try again')
      score += 1
    }
    cardsChosen = []
    cardsChosenId = []
    triesDisplay.textContent = score
    if  (cardsWon.length === cardArray.length/2) {
      alert('Congratulations! You found them all! It took you' + ' ' + score + ' ' + 'tries!')
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    else if (cardsChosen.length === 1) {
      setTimeout(oneCard, 2000)
    }
  }

  createBoard()
})
