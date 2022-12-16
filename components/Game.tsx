import React from 'react'
import Image from 'next/image'

function Game() {
  const diceImages = [
    '/images/dice1.png',
    '/images/dice2.png',
    '/images/dice3.png',
    '/images/dice4.png',
    '/images/dice5.png',
    '/images/dice6.png',
  ]

  const [image1, setImage1] = React.useState(diceImages[0])
  const [image2, setImage2] = React.useState(diceImages[1])
  const [image3, setImage3] = React.useState(diceImages[2])
  const [image4, setImage4] = React.useState(diceImages[3])
  const [image5, setImage5] = React.useState(diceImages[4])

  const [combination, setCombination] = React.useState('')
  const [resultMessage, setResultMessage] = React.useState('')

  const diceRoll = () => {
    const randomNum1 = Math.floor(Math.random() * 6) + 1
    const randomNum2 = Math.floor(Math.random() * 6) + 1
    const randomNum3 = Math.floor(Math.random() * 6) + 1
    const randomNum4 = Math.floor(Math.random() * 6) + 1
    const randomNum5 = Math.floor(Math.random() * 6) + 1

    setImage1(diceImages[randomNum1 - 1])
    setImage2(diceImages[randomNum2 - 1])
    setImage3(diceImages[randomNum3 - 1])
    setImage4(diceImages[randomNum4 - 1])
    setImage5(diceImages[randomNum5 - 1])

    const resultsArray = [randomNum1, randomNum2, randomNum3, randomNum4, randomNum5]

    console.log('resultsArray', resultsArray);
    
    function checkPair() {
      const pair = resultsArray.filter((item, index) => resultsArray.indexOf(item) != index)
      return pair.length > 0
    }

    function checkCarre() {
      const carre = resultsArray.filter((item, index) => resultsArray.indexOf(item) != index)
      return carre.length > 3
    }

    function checkYams() {
      const yams = resultsArray.filter((item, index) => resultsArray.indexOf(item) != index)
      return yams.length > 4
    }

    switch (true) {
      case checkPair():
        setCombination('Pair')
        setResultMessage('You won a pastry !!! 🥳🥳🥳')
        break;

      case checkCarre():
        setCombination('Carre')
        setResultMessage('You won TWO pastry !!! 🥳🥳🥳')
        break;
      
      case checkYams():
        setCombination('Yams')
        setResultMessage('You won THREE pastry !!! 🥳🥳🥳')
        break;
    
      default:
        setCombination('Rien')
        setResultMessage('You Lose !!! 😭😭😭')
        break;
    }
  }

  return (
    <div className='h-full flex flex-col justify-center'>
      <h1 className='text-3xl font-bold text-center my-4 text-tertiary'>Roll The Dice !</h1>

      <div className='flex flex-col items-center'>
        <p className='my-4'>Make a pair, quad or yams to win !</p>

        <div className='flex justify-around my-4'>
          <Image src={image1} alt={'dice 1'} width={50} height={50} />
          <Image src={image2} alt={'dice 2'} width={50} height={50} />
          <Image src={image3} alt={'dice 3'} width={50} height={50} />
          <Image src={image4} alt={'dice 4'} width={50} height={50} />
          <Image src={image5} alt={'dice 5'} width={50} height={50} />
        </div>

        <button
          className='bg-tertiary hover:bg-secondary hover:text-tertiary font-bold py-2 px-4 rounded my-4'
          onClick={diceRoll}
        >
          Play
        </button>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-3xl font-bold text-center my-4'>Results</h2>

        <p className='my-4'>{resultMessage} {combination}</p>
      </div>
    </div>
  )
}

export default Game
