const optionButtons = document.querySelectorAll('[data-option]')

optionButtons.forEach(optionButtons => {
    optionButtons.addEventListener('click', e => {
        const optionName = optionButtons.dataset.option
        makeOption(optionName)
    })
})

function makeOption(option) {
    console.log(option)
}