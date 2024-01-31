// Getting all the images with a class of "alcohol"
const alcoholImages = document.querySelectorAll('img.alcohol')

// Do the same with the images with the class of "cokemon"


// Adding event listener to each alcohol image and logging to the console
alcoholImages.forEach((alcoholImage) =>
{
    alcoholImage.addEventListener('click', function ()
    {
        console.log('Alkohol')
    })
})


// Do the same as above with the coke images
