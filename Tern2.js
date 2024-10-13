function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);

  let resultIf = "";
  if (a > 10) {
    resultIf += 'a is bigger than 10';
  }
  else {
    resultIf += 'a is less than or equal to 10';
  }

  if (a === 5) {
    resultIf += ' an example of a special case';
  }

  if (!(a === 15)) {
    resultIf += ' but a is not 15';
  }

  if (a > 5) {
    resultIf += ' and a is greater than 5';
  }
  else {
    resultIf += ' and a is less than or equal to 5';
  }

  if (a % 2) {
    resultIf += ' and a is odd';
  }
  else {
    resultIf += ' and a is even';
  }
  console.log(resultIf);


  let resultSwitch = "";
  switch(true) {
    case (a > 10):
      resultSwitch += 'a is bigger than 10';
      break;
    case (a <= 10) :
      resultSwitch += 'a is less than or equal to 10';
      break;
  }

  switch (a) {
    case 5:
      resultSwitch +=  ' an example of a special case';
      break;
  }

  switch (true) {
    case (a !== 15) :
      resultSwitch += ' but a is not 15';
      break;
  }

  switch(true) {
    case (a > 5) :
      resultSwitch += ' and a is greater than 5';
      break;
    case (!(a > 5)) :
      resultSwitch += ' and a is less than or equal to 5';
      break;
  }

  switch(a % 2) {
    case 1 :
      resultSwitch += ' and a is odd';
      break;
    case 0 :
      resultSwitch += ' and a is even';
      break;
  }

  console.log(resultSwitch);

  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10' + 
    (a === 5 ? ' an example of a special case' : '')) + 
    (!(a === 15) ? ' but a is not 15' : '') + 
    (a > 5 ? ' and a is greater than 5' : ' and a is less than or equal to 5') + 
    (a % 2 ? ' and a is odd' : ' and a is even');
}

const f = manyChecks();
console.log(f);
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()