const btnEl = document.getElementById('btn')
const animeContainerEl = document.querySelector('.anime-container')
const animeImgEl = document.querySelector('.anime-img')
const animeNameEl = document.querySelector('anime-name')

btnEl.addEventListener("click", async function(){
    try {

        const response = await fetch("https://nekos.best/api/v2/neko")

        const data = await response.json()
        console.log(data.results[0].url)

    } catch (error) {
        console.log("Fetch failed:", error)
    }
})
