var testString = "";
(function (){
    $("#inputBx").bind("keyup",function (e){
        var box =$("#inputBx"); 
        var tempString = '';
        var sourceString = box.val();
        testString = sourceString;
        console.log("Pressed"+testString);
        for (characterOrDigit in sourceString){
            tempString += lookUp(characterOrDigit);
        }
        renderTxt(tempString);
    });
})();
function renderTxt(stringToRender){
    console.log(stringToRender);
    $("#output").html(stringToRender);
}
function lookUp(character){
    console.log("rendering ->"+testString);
    return tableTBL[character.toLowerCase()];
}
