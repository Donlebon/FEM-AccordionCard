let mainContainer = document.querySelectorAll(".container")

// Dropdown Function
let dropdownFunction = document.querySelectorAll(".container .dropdowns .dropdown-function")
let remove_border = document.querySelectorAll(".remove-border-question")


// Arrow
let arrow3 = document.querySelector(".arrow3")
let arrow4 = document.querySelector(".arrow4") 

let answer = document.querySelectorAll(".container .dropdowns .dropdown-function .dropdown-content")
let arrow = document.querySelectorAll(".container .dropdowns .dropdown-function .arrow")

let question = document.querySelectorAll(".container .dropdowns .dropdown-function .question")
  for (let i = 0; i < question.length; i++){
      question[i].addEventListener("click", function(){
      answer[i].classList.toggle("dropdown-display")
      question[i].classList.toggle("remove_border-question")
      question[i].classList.add("clicked")
        if (arrow[i].classList.contains("arrow3")){
          arrow[i].classList.remove("arrow3")
          question[i].classList.remove("clicked")
          arrow[i].classList.add("arrow4")
          }
        else {
          arrow[i].classList.add("arrow3")
          }
});}




