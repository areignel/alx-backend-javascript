export default function iterateThroughObject(reportWithIterator) {
  let employeesString = '';

  const iterator = reportWithIterator();

  let iteration = iterator.next();
  while (!iteration.done) {
    employeesString += iteration.value;
    iteration = iterator.next();
    if (!iteration.done) {
      employeesString += ' | ';
    }
  }

  return employeesString;
}
