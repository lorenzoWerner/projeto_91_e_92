player1Name=localStorage.getItem("player1")
player2Name=localStorage.getItem("player2")
var player1Score=0
var player2Score=0
document.getElementById("player1name").innerHTML=player1Name + ":"
document.getElementById("player2name").innerHTML=player2Name + ":"
document.getElementById("player1score").innerHTML=player1Score
document.getElementById("player2score").innerHTML=player2Score
function send(){
    getWord=document.getElementById("word").value
    word=getWord.toLowerCase()
    var palavra_dividida=Math.floor(word.length/2)
    var letra_1=word.charAt(palavra_dividida)
    console.log(letra_1)
    var ultima_letra=word.length-1
    var letra_2=word.charAt(ultima_letra)
    console.log(letra_2)
    var letra_3=word.charAt(1)
    console.log(letra_3)
    var remove_1=word.replace(letra_1,"_")
    var remove_2=remove_1.replace(letra_2,"_")
    var remove_3=remove_2.replace(letra_3,"_")
    console.log (remove_3)
    question="<h4 id='word_display'>P. "+remove_3+"</h4>"
    var inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question + inputBox + checkButton ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
question_turn="playe1"
answer_turn="player2"
function check(){
get_answer=document.getElementById("inputCheckBox").value
answer=get_answer.toLowerCase()
if(answer == word){
    if(answer_turn == "player1"){
   player1Score=player1Score+1
   document.getElementById("player1score").innerHTML=player1Score
    }else{
        player2Score=player2Score+1
        document.getElementById("player2score").innerHTML=player2Score
    }
}
if(question_turn == "player1"){
        question_turn="player2"
    document.getElementById("playerQuestion").innerHTML="turno de pergunta: "+player2Name
}else{
    question_turn="player2"
    document.getElementById("playerQuestion").innerHTML="turno de pergunta: "+player2Name  
}
if(answer_turn == "player1"){
    answer_turn="player2"
document.getElementById("playerAnswer").innerHTML="turno de resposta: "+player2Name
}else{
answer_turn="player1"
document.getElementById("playerAnswer").innerHTML="turno de resposta: "+player1Name  
}
document.getElementById("output").innerHTML=""}