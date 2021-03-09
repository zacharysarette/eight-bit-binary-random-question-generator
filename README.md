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
generateQuestion("binToDec")
// example output: {q:"What is 00000001 in decimal?" a:1}

//Generate a Decimal to Binary Question:
generateQuestion("decToBin")
// example output: {q:"What is 1 in binary?" a:"00000001"}

//Or Randomly generate either Binary to Decimal or Decimal to Binary
generateQuestion()
// example output: {q:"What is 00000001 in decimal?" a:1}
```

---
