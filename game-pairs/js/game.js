(() => {
  const container = document.getElementById('container')
  const game = document.getElementById('game')
  const button = document.createElement('button')
  button.textContent = 'Сыграем еще?'
  button.classList.add('btn')

  function startGame (game, cardsCount) {
    const mainNumberArray = []
    let firstCard = null
    let secondCard = null

    // Создаем массив пар чисел
    for (let i = 1; i <= cardsCount; i++) {
      mainNumberArray.push(i)
      mainNumberArray.push(i)
    }

    // Перемешиваем созданный массив
    for (let i = 0; i < mainNumberArray.length; i++) {
      let temp = mainNumberArray[i];
      let j = Math.floor(Math.random() * mainNumberArray.length);
      mainNumberArray[i] = mainNumberArray[j];
    mainNumberArray[j] = temp;
    }

    // Создаем карточки
    for (const number of mainNumberArray) {
      let card = document.createElement('div')
      card.textContent = number
      card.classList.add('card')

      // Событие клика
      card.addEventListener('click', function(){
        // Проверяем что не нажали на уже открытую карточку
        if (card.classList.contains('open') || card.classList.contains('success')) return

        // Третий клик
        if (firstCard !== null && secondCard !== null) {
          firstCard.classList.remove('open')
          secondCard.classList.remove('open')
          firstCard = null
          secondCard = null
        }

        card.classList.add('open')
        // Если буферные карты пусты, записываем их
        if (firstCard === null) {
          firstCard = card
        } else {
          secondCard = card
        }
        // Берем значение буферных карт, если они не пусты
        // и сравниваем их
        if (firstCard !== null && secondCard !== null){
          const firstCardNum = firstCard.textContent
          const secondCardNum = secondCard.textContent

          if (firstCardNum === secondCardNum) {
            firstCard.classList.add('success')
            secondCard.classList.add('success')
          }
        }

        if (mainNumberArray.length === document.querySelectorAll('.success').length) {
          container.append(button)
          button.addEventListener('click', () => {
            button.remove()
            game.innerHTML = ''
            let cardsCount = Number(prompt('Введите количество пар', 4))
            if (cardsCount > 0) startGame(game, cardsCount)
            else {
              cardsCount = 4
              startGame(game, cardsCount)
            }
          })
        }
      })
    game.append(card)
    }
  }

  let cardsCount = Number(prompt('Введите количество пар', 4))
  if (cardsCount > 0) startGame(game, cardsCount)
  else {
    cardsCount = 4
    startGame(game, cardsCount)
  }
 //alert('Введите число больше 0')

})()

