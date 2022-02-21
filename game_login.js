function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    if (player1_name == '') {
        document.getElementsByName('player1_name_input')[0].placeholder = 'Please Enter your Name';
        document.getElementsByName("player1_name_input")[0].placeholder = "Please Enter your name first";
    } else {
        localStorage.setItem("player1_name", player1_name);
        localStorage.setItem("player2_name", player2_name);
        window.location = "game_page.html"
    }

}