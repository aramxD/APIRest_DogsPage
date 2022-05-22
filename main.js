console.log('empezamos')





// getDog()

// function onDogClick() {
//     getDog()

// }

// function getDog() {
//     console.log('perro nuevo')
//     fetch(APIDOGS)
//         .then(response => response.json())
//         .then(data => {
//             const img = document.getElementById('dogs')
//             img.src = data[0].url;
//         });
// }

// METODO CON ASYC Y AWAIT\
const APPKEY = 'ba54ce5a-864d-41bc-ba69-dff73e5b8d9a'
const spanError = document.getElementById('error')


async function getRandomDogAwait(APPKEY) {
    numberOfDogs = document.getElementById('dogsRange').value
    const API_RANDOM_DOGS = `https://api.thedogapi.com/v1/images/search?api_key=${APPKEY}&limit=${numberOfDogs}`

    const res = await fetch(API_RANDOM_DOGS)
    const data = await res.json()
    console.log(data)

    if (res.status !== 200) {
        const spanError = document.getElementById('errorFav')
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message
    } else {

        var perrosDisplay = document.getElementById('perrosDisplay')
        data.forEach(element => {
            console.log(element)
            var card = document.createElement('div')
            card.className = 'randomDogCard'
            perrosDisplay.appendChild(card)

            var img = document.createElement('img')
            img.src = element.url
            card.appendChild(img)

            var button = document.createElement('button')
            button.innerHTML = 'add to favorites'
            button.className = 'botonPerro'
            card.appendChild(button)


        })
    };
}

async function loadFavoritesDogAwait(APPKEY) {
    const API_FAV_DOGS = `https://api.thedogapi.com/v1/images/favourites?api_key=${APPKEY}&limit=12`
    const res = await fetch(API_FAV_DOGS)
    const data = await res.json()
    console.log(data)

    if (res.status !== 200) {
        const spanError = document.getElementById('errorFav')
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message
    }

    var perrosDisplay = document.getElementById('perrosFavoritos')
    data.forEach(element => {
        console.log(element)

        var img = document.createElement('img')
        img.src = element.url
        perrosDisplay.appendChild(img)


    });
}

getRandomDogAwait(APPKEY)
loadFavoritesDogAwait(APPKEY)