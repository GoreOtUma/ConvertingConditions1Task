# ConvertingConditions1Task
## Задание по JS
Даны два файла, содержащие условия, написанные с помощью условного (тернарного) оператора, требуется перевести данного условие в инструкции вида "if...else" и "switch()"

Результат выполнения условий выводить в консоль разработчика с помощью "console.log()"

### Исходный файл Tern1.js:
let a = Math.floor(Math.random() * 100);
(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

### Исходный файл Tern2.js:
function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  
  return (
    a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
}

manyChecks();

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

## Результат
В файле Tern2.js участок кода с третьим тернарным оператором: return ... + (a === 15 ? ' but a is not 15' : '') + ...; был заменен на return ... + (!(a === 15)) ? ' but a is not 15' : '') + ...; (предположительно, опечатка в задании). Также были доработаны случаи отображения пробелов в выходной строке
