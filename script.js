const like__img = document.querySelector(".img__object")
const delete__button = document.querySelector(".delete")

console.log(delete__button)

like__img.addEventListener("click", function (e) {

    if(like__img.src = "images/нравится.svg"){
        like__img.src = "images/нравится_заполненное.svg"
        console.log(e)
    } else {
        like__img.src = "images/нравится.svg"
    } 
})