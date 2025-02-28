    // Practice For Double Click Events
    
// function double(){
//     console.log("Hello Hadi")
// }


            // Practice For MouseEnter & MouseOut Click Events

// function mouseEnter(){
//     console.log("Hellow Hadi Hover Enter")
// }  

// function mouseOut(){
//     console.log("Hellow Hadi Hover Out")
// }




            // Practice For On Click For Images

// function sizeChange(){
//     var size = document.getElementById("image")
//     size.width = 400
//     size.height = 200
// }


            // Practice For Calculator

function getValue(number){
    console.log(number)
    var input = document.getElementById("input")
    input.value += number
}

function equalTo(){
    var input = document.getElementById("input")
    var result = eval(input.value)
    input.value = result
}
function allClear(){
    var input = document.getElementById("input")
    input.value = ""

}
function oneClear(){
    var input = document.getElementById("input")
    var clearValue = input.value.slice(0,-1)
    input.value = clearValue
}