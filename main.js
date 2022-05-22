//const APIDOGS = 'https://api.waifu.pics/nsfw/waifu'
console.log('empezamos')


const APPKEY = 'ba54ce5a-864d-41bc-ba69-dff73e5b8d9a'
const numberOfDogs = 2
const APIDOGS = `https://api.thedogapi.com/v1/images/search?api_key=${APPKEY}&limit=${numberOfDogs}`

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





async function getDogAwait() {
    const res = await fetch(APIDOGS)
    const data = await res.json()
    console.log(data)
        // const img = document.getElementById('dogs')
        // img.src = data[0].url;

    var perrosDisplay = document.getElementById('perrosDisplay')
    data.forEach(element => {
        console.log(element)

        var img = document.createElement('img')
        img.src = element.url
        perrosDisplay.appendChild(img)


    });
}

getDogAwait()