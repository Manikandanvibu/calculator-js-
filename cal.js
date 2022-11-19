function display(num){
    result.value+=num
}
function allclear(){
    result.value=""
}
function evaluvate(){
    currentexp=result.value
    result.value=eval(currentexp)
}
function backspace(){
    data=result.value
    result.value=data.slice(0,-1)
}