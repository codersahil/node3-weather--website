

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#msgOne')
const messageTwo = document.querySelector('#msgTwo')

weatherForm.addEventListener('submit', (e) => {

    const location = search.value

    // console.log(location)
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
    e.preventDefault()
})