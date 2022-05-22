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



async function getRandomDogAwait(APPKEY) {
    numberOfDogs = document.getElementById('dogsRange').value
    const API_RANDOM_DOGS = `https://api.thedogapi.com/v1/images/search?api_key=${APPKEY}&limit=${numberOfDogs}`

    const res = await fetch(API_RANDOM_DOGS)
    const data = await res.json()

    if (res.status !== 200) {
        const spanError = document.getElementById('errorFav')
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message
    } else {

        var perrosDisplay = document.getElementById('perrosDisplay')
        data.forEach(element => {

            var card = document.createElement('div')
            card.className = 'randomDogCard'
            perrosDisplay.appendChild(card)

            var img = document.createElement('img')
            img.src = element.url
            card.appendChild(img)

            var button = document.createElement('button')
            button.innerHTML = `add to favorites`
            button.value = element.id
            button.className = 'botonPerro'

            card.appendChild(button)
            button.onclick = () => {
                const img_id = element.id
                saveFavoritesDogs(APPKEY, img_id)
            }


        })
    };
}

async function loadFavoritesDogAwait(APPKEY) {
    const API_FAV_DOGS = `https://api.thedogapi.com/v1/favourites?api_key=${APPKEY}`
    const res = await fetch(API_FAV_DOGS)
    const data = await res.json()


    if (res.status !== 200) {
        const spanError = document.getElementById('errorFav')
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message
    }

    var perrosFavDisplay = document.getElementById('perrosFavourites')
    data.forEach(element => {
        if (element.image.url) {
            console.log(element)

            // var img = document.createElement('img')
            // img.src = element.url
            // perrosDisplay.appendChild(img)
            var card = document.createElement('div')
            card.className = 'randomDogCard'
            perrosFavDisplay.appendChild(card)

            var img = document.createElement('img')
            img.src = element.image.url
            card.appendChild(img)

            var button = document.createElement('button')
            button.innerHTML = `Delete`
            button.value = element.id
            button.className = 'botonPerro'

            card.appendChild(button)
            button.onclick = () => {
                const favourite_id = element.id
                deleteFavoritesDogs(APPKEY, favourite_id)
            }
        }

    });
}

async function saveFavoritesDogs(APPKEY, img_id) {
    const API_FAV_DOGS = `https://api.thedogapi.com/v1/favourites?api_key=${APPKEY}&limit=12`

    const res = await fetch(API_FAV_DOGS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_id: `${img_id}` })
    })

    const data = await res.json()
    console.log(data)

    if (res.status !== 200) {
        const spanError = document.getElementById('errorFav')
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message
    }


}

async function deleteFavoritesDogs(APPKEY, favourite_id) {
    const API_FAV_DOGS = `https://api.thedogapi.com/v1/favourites/${favourite_id}?api_key=${APPKEY}`

    const res = await fetch(API_FAV_DOGS, {
        method: 'DELETE',
    });
    const data = await res.json();

    if (res.status !== 200) {
        const spanError = document.getElementById('errorFav')
        spanError.innerHTML = 'Hubo un error: ' + res.status + data.message
    } else {
        console.log('imagen borrada')
    }
}

getRandomDogAwait(APPKEY)
loadFavoritesDogAwait(APPKEY)