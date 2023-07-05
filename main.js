
const translateFunc = () => {
    let txtInput = document.getElementById("txtInput").value;
    let modifiedTxt = txtInput.replace(/\s+/g, '🤸');
    document.getElementById("resultText").innerHTML = modifiedTxt;
    
}