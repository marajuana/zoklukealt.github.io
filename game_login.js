function useradd(){
    player1 = document.getElementById("player1_name").value;
    player2 = document.getElementById("player2_name").value;
    localStorage.setItem("player1key", player1);
    localStorage.setItem("player2key", player2);
    window.location = "actualgame.html";
}