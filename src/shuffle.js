const shuffle = (arr = []) => {
  let cI = arr.length
  let tV
  let rI
  while (cI !== 0) {
    rI = Math.floor(Math.random() * cI)
    cI -= 1
    tV = arr[cI]
    arr[cI] = arr[rI]
    arr[rI] = tV
  }
  return arr
}
export default shuffle
