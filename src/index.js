// write your code here
const divMenu = document.getElementById('ramen-menu')

const fullRamenImg = document.querySelector('.detail-image')

const nameRamen = document.querySelector('#nameRamen')

const restaurant = document.querySelector('.restaurant')

const ramenRating = document.getElementById('rating-display')

const ramenComment = document.getElementById('comment-display')

const form = document.querySelector('form')

//gets ramen from database
fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(data => {


    data.forEach(ramen => {
        showRamen(ramen)
    })

})

//add new ramen when submitted
form.addEventListener('submit',() => {
    const inputs = document.querySelectorAll('input')
    const comments = document.querySelector('textarea')

    fetch('http://localhost:3000/ramens', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Accept : "application/json"
        },
        body : JSON.stringify({
            name : inputs[0].value,
            restaurant : inputs[1].value,
            image : inputs[2].value,
            rating : inputs[3].value,
            comment : comments.value
        })
    })
    .then(resp => resp.json())
    .then(data => {
        showRamen(data)
    })
})



//show ramen on DOM
function showRamen (ramen) {
    const imgRamen = document.createElement('img')

    imgRamen.src= ramen.image

    divMenu.append(imgRamen)

    imgRamen.addEventListener('click', () => {
        fullRamenImg.src = ramen.image
        nameRamen.innerText = ramen.name
        restaurant.innerText = ramen.restaurant

        ramenRating.innerText = ramen.rating
        ramenComment.innerText = ramen.comment
    })

}