module.exports = function toReadable (number) {
    foo = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
      };
      if (number >= 0 && number <= 19) {
        return foo[number];
      } else if (number == 20 || number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80 || number == 90) {
        return foo[number];
      } else if (number >= 21 && number <= 99) {
        return `${foo[Math.floor(number / 10) * 10]} ${foo[number % 10]}`;
      } else if (number == 100 || number == 200 || number == 300 || number == 400 || number == 500 || number == 600 || number == 700 || number == 800 || number == 900) {
        return `${foo[number / 100]} hundred`;
      } else if (number >= 100 && number <= 999) {
        if (number % 10 == 0 || (number % 100 >= 1 && number % 100 <= 19)) {
          return `${foo[Math.floor(number / 100)]} hundred ${foo[number % 100]}`;
        } else {
          return `${foo[Math.floor(number / 100)]} hundred ${foo[Math.floor(number % 100 / 10) * 10]} ${foo[number % 10]}`;
        }
      }
}
