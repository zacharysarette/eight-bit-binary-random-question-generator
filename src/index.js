const generateQuestionAndAnswer = (type = 'binToDec') => {
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
    a: getBinToDec(r)
  })

  const generateDecToBinQuestionAndAnswer = (r = getRandom8bit()) => ({
    q: generateDecToBinQuestion(getBinToDec(r)),
    a: r.join('')
  })

  return type === 'binToDec'
    ? generateBinToDecQuestionAndAnswer()
    : type === 'decToBin'
      ? generateDecToBinQuestionAndAnswer()
      : Math.random() < 0.5
        ? generateBinToDecQuestionAndAnswer()
        : generateDecToBinQuestionAndAnswer()
}

export default generateQuestionAndAnswer
