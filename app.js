const api = 'https://randomuser.me/api/?results=1'
const loading = document.querySelector('.lds-spinner')
const container = document.querySelector('.container')
const refresh = document.querySelector('.refresh')

//globals
const nameText = document.getElementById('name')
const image = document.getElementById('image')

// icon globals
const userIcon = document.getElementById('user')
const info = document.getElementById('info')
const email = document.getElementById('email')
const calendar = document.getElementById('calendar')
const phone = document.getElementById('phone')
const map = document.getElementById('map')
const lock = document.getElementById('lock')

async function useFetch(url) {
    const req = await fetch(url)
    const result = await req.json()
    console.log(result);
    loading.style.display = 'none'
    container.style.display = 'block'


    nameText.textContent = `${result.results[0].name.first} ${result.results[0].name.last} `
    image.src = `${result.results[0].picture.large}`

    userIcon.addEventListener('click', () => {
        nameText.textContent = `${result.results[0].name.first} ${result.results[0].name.last} `
        info.textContent = `Hi,My name is`
    })
    email.addEventListener('click',function() {
        nameText.textContent = `${result.results[0].email}`
        info.textContent = `My email is`
    })

    calendar.addEventListener('click', () => {
        nameText.textContent = `${result.results[0].dob.age}`
        info.textContent = `My age is`
    })

    phone.addEventListener('click', () => {
        nameText.textContent = `${result.results[0].phone}`
        info.textContent = `My phone number is`
    })


    map.addEventListener('click', () => {
        nameText.textContent = `${result.results[0].location.country} ${result.results[0].location.city}`
        info.textContent = `My address is`
    })

    lock.addEventListener('click', () => {
        nameText.textContent = `${result.results[0].login.password}`
        info.textContent = `My password is`
    })
}
refresh.addEventListener('click', start)

async function start(data) {
    loading.style.display = 'block'
    container.style.display = 'none'
    const refBtn = await useFetch(api)
    loading.style.display = 'none'
    container.style.display = 'block'
}
