p1_name = localStorage.getItem("player1_name");
p2_name = localStorage.getItem("player2_name");

p1_score = 0;
p2_score = 0;

document.getElementById("player1_name").innerHTML = p1_name + ":";
document.getElementById("player2_name").innerHTML = p2_name + ":";

document.getElementById("player1_score").innerHTML = p1_score;
document.getElementById("player2_score").innerHTML = p2_score;

document.getElementById("player_question").innerHTML = "Question turn-" + p1_name;
document.getElementById("player_answer").innerHTML = "Answer turn-" + p2_name;

function send() {
    w = document.getElementById("word").value;
    word = w.toLowerCase();
    c1 = word.charAt(1);
    l = Math.floor(word.length / 2);
    c2 = word.charAt(l);
    last = word.length - 1;
    c3 = word.charAt(last);

    r1 = word.replace(c1, "_");
    r2 = r1.replace(c2, "_");
    r3 = r2.replace(c3, "_");

    question = "<h4 id='word_display'> Q. " + r3 + "</h4>";
    input = "<br> Answer:<input type='text' id='input_check_box'>";
    cb = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

var question_t = "player1";
var ans_t = "player2";

function check() {
a = document.getElementById("input_check_box").value;
answer = a.toLowerCase();
if ( answer==word ){
if ( ans_t=="player2" ) {
    p2_score=p2_score+1;
    document.getElementById("player2_score").innerHTML = p2_score;
}
else{
    p1_score=p1_score+1;
    document.getElementById("player1_score").innerHTML = p1_score;
}
}


if (question_t=="player1"){
    question_t = "player2";
    document.getElementById("player_question").innerHTML ="Question Turn -" + p2_name;
}
else{
    question_t = "player1";
    document.getElementById("player_question").innerHTML ="Question Turn -" + p1_name;
}


if (ans_t=="player1"){
    ans_t = "player2";
    document.getElementById("player_answer").innerHTML ="Answer Turn -" + p2_name;
}
else{
    ans_t = "player1";
    document.getElementById("player_answer").innerHTML ="Answer Turn -" + p1_name;
}

document.getElementById("output").innerHTML="";

}



















