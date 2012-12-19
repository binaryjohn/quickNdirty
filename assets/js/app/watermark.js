(function (){
    $("#inputBx").bind("keypress",function (e){
        var box =$("#inputBx"); 
        var tempString = '';
        var sourceString = box.val();
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
    return tableTBL[character.toLowerCase()];
}
