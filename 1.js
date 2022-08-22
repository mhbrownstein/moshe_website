
function prompt1(){
let one =  prompt("Hello what is your name")
prompt2(one)
paragraph(one);
}
function prompt2(prompt1){
    let two = prompt("Hello, " + prompt1 + ", How are you doing? (answer either good or bad)").toLowerCase();
    response(two)
}
function response(prompt2){
    if (prompt2 == "good"){
        alert("Happy to hear")
       }
       else if(prompt2 == "bad"){
           alert("Oh I'm sorry to hear that")
       }
       else{
           alert("That is not a valid answer");
           prompt1();

}
 }

 function paragraph(prompt1){
document.getElementById("p1").innerHTML = `ok ${prompt1} you may now access the page`;  
 }