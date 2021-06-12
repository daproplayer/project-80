var inputs=[]
function Getparagraph(){
for (let i = 1; i <= 6; i++) {
    inputs.push(document.getElementById("Para_Place_"+ i).value);
    document.getElementById("ShowParagraph").innerHTML = inputs.join(". ")
}
}