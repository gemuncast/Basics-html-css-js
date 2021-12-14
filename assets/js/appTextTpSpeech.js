function textSpeak(){
    var text = document.getElementById('newText').value;
    responsiveVoice.speak(text);
    document.getElementById("newText").value = "";
}