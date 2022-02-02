// TODO: Declare any global variables we need
let totalHeads = 0
let totalTails = 0
let totalFlips = totalHeads + totalTails
let headsPercentage = 0
let tailsPercentage = 0
let defaultMessage = "Let's get rolling!"
let images = [
    {
        imagePath: "assets/images/penny-heads.jpg",
        message: "You Flipped Heads!",
        side: "heads"
    },
    {
        imagePath: "assets/images/penny-tails.jpg",
        message: "You Flipped Tails!",
        side: "tails"
    }
]

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById("flip").addEventListener("click", function() {
        // get random image object
        let randomImage = images[Math.floor(Math.random()* images.length)]
        // set image src to flipped coin
        document.getElementById("penny-img").setAttribute("src", randomImage.imagePath)
        // TODO: Update image and status message in the DOM
        if (randomImage.side === "heads") {
            totalHeads++
            totalFlips = totalHeads + totalTails

            document.getElementById("heads").innerText = totalHeads
            document.querySelector(".message-container").innerText = randomImage.message
        } else {
            totalTails++
            totalFlips = totalHeads + totalTails

            document.getElementById("tails").textContent = totalTails
            document.querySelector(".message-container").innerText = randomImage.message
        }

        headsPercentage = Math.round((totalHeads / totalFlips) * 100)
        tailsPercentage = Math.round((totalTails / totalFlips) * 100)

        document.getElementById("heads-percent").textContent = headsPercentage + "%"
        document.getElementById("tails-percent").textContent = tailsPercentage + "%"
    })

    document.getElementById("clear").addEventListener("click", function() {
        totalHeads = 0
        totalTails = 0
        totalFlips = totalHeads + totalTails
        headsPercentage = 0
        tailsPercentage = 0

        document.getElementById("heads").innerText = totalHeads
        document.getElementById("tails").textContent = totalTails
        document.getElementById("heads-percent").textContent = headsPercentage + "%"
        document.getElementById("tails-percent").textContent = tailsPercentage + "%"
        document.querySelector(".message-container").innerText = defaultMessage

    })
})