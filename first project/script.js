const checkboxList = document.querySelectorAll('.custom-checkbox')
const input = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressbar = document.querySelector('.progress_bar')
const progressvalue = document.querySelector('.progress-value')
const quote = document.querySelector('.heading')


const allQuotes = [
    'Raise tha bar by completing yours goals.',
    'Well began half done.',
    'just step half away',
    'keep going',
    'Whoa! You just completed all the goals, time for chill 😁',
]


// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
//     first: {
//         name: '',
//         completed: false,
//     },
//     second: {
//         name: '',
//         completed: false,
//     },
//     third: {
//         name: '',
//         completed: false,
//     },
// }
const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
let completedGoalsCount = Object.values(allGoals).filter((goals) => goals.completed).length
progressvalue.style.width = `${(completedGoalsCount / input.length) * 100}%`
progressvalue.firstElementChild.innerText = ` ${completedGoalsCount}/ ${input.length} completed`
quote.innerText = allQuotes[completedGoalsCount]


checkboxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allInputFields = [...input].every((error) => {
            return error.value
        })

        if (allInputFields) {
            checkbox.parentElement.classList.toggle('completed')
            // progressvalue.style.width = '33.33%'


            const inputId = checkbox.nextElementSibling.id
            allGoals[inputId].completed = !allGoals[inputId].completed
            completedGoalsCount = Object.values(allGoals).filter((goals) => goals.completed).length
            progressvalue.style.width = `${(completedGoalsCount / input.length) * 100}%`
            progressvalue.firstElementChild.innerText = ` ${completedGoalsCount}/ ${input.length} completed`
            quote.innerText = allQuotes[completedGoalsCount]
            localStorage.setItem('allGoals', JSON.stringify(allGoals))



        } else {

            errorLabel.classList.add('showError')
        }
    })
})


// reomve error ___________________________________

input.forEach((input) => {
    if (allGoals[input.id]){
        input.value = allGoals[input.id].name

        if (allGoals[input.id].completed) {
            input.parentElement.classList.add('completed')
        }
    }
   
    input.addEventListener('focus', () => {
        errorLabel.classList.remove('showError')
    })
    input.addEventListener('input', (e) => {
        if (allGoals[input.id] && allGoals[input.id].completed ) {
            input.value = allGoals[input.id].name
            return
        }
        if(allGoals[input.id] ) {

            allGoals[input.id].name = input.value
        }else{
            allGoals[input.id] = {
                name: '',
                completed: false
            }
        }

        localStorage.setItem('allGoals', JSON.stringify(allGoals))

    })
})

//________________________________________________
