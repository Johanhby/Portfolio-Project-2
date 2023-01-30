const optionButtons = document.querySelectorAll('[data-option]')
const OPTION = [
    {
        name: 'rock'
        emoji: '(../images/rock.jpg)'
        beats: 'scissors', 'lizard'
    },
    {
        name: 'paper'
        emoji: '(../images/paper.jpg)'
        beats: 'rock', 'spock'
    },
    {
        name: 'scissors'
        emoji: '(../images/scissors.jpg)'
        beats: 'paper', 'lizard'
    },
    {
        name: 'lizard'
        emoji: '(../images/lizard.jpg)'
        beats: 'paper', 'spock'
    },
    {
        name: 'spock'
        emoji: '(../images/spock.jpg)'
        beats: 'scissors', 'rock'
    }
]
optionButtons.forEach(optionButtons => {
    optionButtons.addEventListener('click', e => {
        const optionName = optionButtons.dataset.option
        makeOption(optionName)
    })
})

function makeOption(option) {
    console.log(option)
}