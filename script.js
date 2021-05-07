document.getElementById('btn').addEventListener('click', check)
const ageinp = document.getElementById('age')
const dayinp = document.getElementById('day')
const text = document.getElementById('txt')

function check () {
  const age = parseInt(ageinp.value)
  const day = dayinp.value

  if ((age * 0 === 0) && (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday' || day === 'Saturday' || day === 'Sunday')) {
    if (age < 18 && !(day === 'Saturday' || day === 'Sunday')) {
      text.innerHTML = 'Time to go to school!'
    }
    if (age < 18 && (day === 'Saturday' || day === 'Sunday')) {
      text.innerHTML = 'It`s the weekend! Time to relax and take a break. Make sure to catch up on homework!'
    }
    if (age >= 18 && !(day === 'Saturday' || day === 'Sunday')) {
      text.innerHTML = 'Time to go to work!'
    }
    if (age >= 18 && (day === 'Saturday' || day === 'Sunday')) {
      text.innerHTML = 'It`s the weekend! Time to relax and take a break. Grab a coffee!'
    }
    if (age < 18 && day === 'Monday') {
      text.innerHTML = 'Mondays are the worst. Now go to school.'
    }
    if (age >= 18 && day === 'Monday') {
      text.innerHTML = 'Mondays suck. Go to work.'
    }
  } else {
    text.innerHTML = 'Please enter a valid number and day. Remember, the day needs a capital letter!'
  }
}
