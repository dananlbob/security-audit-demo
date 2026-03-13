// vulnerable code example
function runUserInput(input) {
  eval(input); // CodeQL will flag use of eval
}
module.exports = {runUserInput};