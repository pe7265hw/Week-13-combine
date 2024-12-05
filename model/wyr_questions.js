//array of questions to be used to randomly display a WRY question
const questions = [
    {
        'question': 'Live in a house shaped like a triangle or a house shaped like a circle?',
        'answer1': 'Triangle house',
        'answer2': 'Circle house'
    },
    {
        'question': 'Have a cat-sized elephant or an elephant-sized cat?',
        'answer1': 'Cat-sized elephant',
        'answer2': 'Elephant-sized cat'
    },
    {
        'question': 'Be able to fly or be able to breathe underwater?',
        'answer1': 'Fly',
        'answer2': 'Breath underwater'
    },
    {
        'question': 'Play any musical instrument or speak any language?',
        'answer1': 'Play any musical instrument',
        'answer2': 'Speak any language'
    },
    {
        'question': 'Be a famous movie star or a famous scientist?',
        'answer1': 'Famous movie star',
        'answer2': 'Famous scientist'
    },
    {
        'question': 'Get some sleep or continue to work on this project?',
        'answer1': 'Get some sleep',
        'answer2': 'Work on this project'
    }
]

//function that uses questions array to randomly display WYR question
function randomWYRQuestion(){
    const randomIndex = Math.floor(Math.random()*questions.length)
    const randomQuestion = questions[randomIndex]
    return randomQuestion
}

module.exports = randomWYRQuestion