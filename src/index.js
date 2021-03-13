import shuffle from './shuffle'
import getBins from './const/getBins'

const generateQuestionAndAnswer = (type = '', isMultipleChoice = true) => {
  const binToDecArr = [128, 64, 32, 16, 8, 4, 2, 1]

  const getRandom8bit = () => {
    const arr = []
    for (let i = 8; i > 0; i--) {
      arr.push(Math.random() > 0.5 ? '1' : '0')
    }
    return arr
  }

  const generateBinToDecQuestion = (binStrArr) =>
    'What is ' + binStrArr.join('') + ' in decimal?'

  const generateDecToBinQuestion = (decNumber) =>
    'What is ' + decNumber + ' in binary?'

  const getBinToDec = (binStrArr = []) =>
    binStrArr
      .map((e, i) => (e === '1' ? binToDecArr[i] : 0))
      .reduce((a, b) => a + b)

  const generateBinToDecQuestionAndAnswer = (r = getRandom8bit()) => ({
    q: generateBinToDecQuestion(r),
    a: getBinToDec(r),
    multipleChoice: isMultipleChoice && getBinMultiChoice(r.join(''), true)
  })

  const generateDecToBinQuestionAndAnswer = (r = getRandom8bit()) => ({
    q: generateDecToBinQuestion(getBinToDec(r)),
    a: r.join(''),
    multipleChoice: isMultipleChoice && getBinMultiChoice(r.join(''))
  })

  const getBinMultiChoice = (bin = '00000001', isDec = false) => {
    const shuffled = shuffle(getBins().filter(e => e !== bin))

    const answers = shuffle([
      bin,
      shuffled[0],
      shuffled[1],
      shuffled[2],
      shuffled[3],
      shuffled[4]
    ])

    return {
      a: isDec ? getBinToDec(answers[0].split('')) : answers[0],
      b: isDec ? getBinToDec(answers[1].split('')) : answers[1],
      c: isDec ? getBinToDec(answers[2].split('')) : answers[2],
      d: isDec ? getBinToDec(answers[3].split('')) : answers[3],
      e: isDec ? getBinToDec(answers[4].split('')) : answers[4],
      f: isDec ? getBinToDec(answers[5].split('')) : answers[5]
    }
  }
  
  const getRandBool = () => Math.random() > 0.5

  if (type === 'decToBin') return generateDecToBinQuestionAndAnswer()
  if (type === 'binToDec') return generateBinToDecQuestionAndAnswer()
  return getRandBool()
    ? generateDecToBinQuestionAndAnswer()
    : generateBinToDecQuestionAndAnswer()
}

export default generateQuestionAndAnswer
