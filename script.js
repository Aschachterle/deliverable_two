var question = "What type of event are you going to?"

var question2 = "What is the temperature going to be?"

var eventType = prompt(question);

if (eventType == "casual"){
    formalWear = "something comfy";
} else if (eventType == "semi-formal"){
    formalWear = "a polo";
} else if (eventType == "formal"){
    formalWear = "a suit";
} else
    formalWear = "?";

var tempFahr = prompt(question2);

var formalWear

var clothing

if (tempFahr < 54) {
    clothing = "a coat";
} else if (tempFahr >= 54 && tempFahr < 70){
    clothing = "a jacket";
} else if (tempFahr >= 70){
    clothing = "no jacket";
} else
    clothing = "?";


var result = ("Because the temperature is ") + tempFahr + (" and you are going to a ") + eventType + (" event, you should wear ") + formalWear + (" and ") + clothing;

if (question = "casual" || "formal" || "semi-formal"); {
            console.log(result);
}

alert(result);