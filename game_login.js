function addUsser(){
    playerName1=document.getElementById("player1NameInput").value
    playerName2=document.getElementById("player2NameInput").value
    localStorage.setItem("player1",playerName1)
    localStorage.setItem("player2",playerName2)
    window.location="game_page.html"
}