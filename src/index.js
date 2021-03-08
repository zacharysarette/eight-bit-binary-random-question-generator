const generateBinaryToDecimalQuestionAndAnswer = () => {
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

  const getBinToDecAnswer = (binStrArr = []) =>
    binStrArr
      .map((e, i) => (e === '1' ? binToDecArr[i] : 0))
      .reduce((a, b) => a + b)

  const generateQuestionAndAnswer = (r = getRandom8bit()) => ({
    q: generateBinToDecQuestion(r),
    a: getBinToDecAnswer(r)
  })

  return generateQuestionAndAnswer()
}

export default generateBinaryToDecimalQuestionAndAnswer
