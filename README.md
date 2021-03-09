# Eight Bit Binary Random Question Generator

---

# Table of Contents

* [About](#About)

* [Installation](#Installation)

* [Usage](#Usage)

---
## About

This is a little library for generating a question and answer for eight bit binary quizzes.

---
## Installation

```bash
npm i eight-bit-binary-random-question-generator
```
---
## Usage

```javascript
import generateQuestion from 'eight-bit-binary-random-question-generator'


//Generate a Binary to Decimal Question:
generateQuestion("binToDec", false)
// example output: {q:"What is 00000001 in decimal?" a:1, multipleChoice: undefined}

//Generate a Decimal to Binary Question:
generateQuestion("decToBin")
// example output: { 
//   q: "What is 1 in binary?"
//   a: "00000001",
//   multipleChoice: {
//     a: "11111111",
//     b: "11111110",
//     c: "10101011",
//     d: "10000000",
//     e: "00000001",
//     f: "01000000" }
// }

//Or Randomly generate either Binary to Decimal or Decimal to Binary
generateQuestion()
// example output: {
//   q: "What is 00000001 in decimal?",
//   a:1
//   multipleChoice: {
//     a: 2
//     b: 50
//     c: 192
//     d: 1
//     e: 255
//     f: 4
//   }
// }
```

---
