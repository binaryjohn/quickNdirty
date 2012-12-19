var svg = d3.select("body").append("svg")
    .attr("viewBox", "0 0 500 300");
var code = populateArray();
svg.append("defs").append("path")
    .attr("id", "s3")
    .attr("d", "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0");

var thing = svg.append("g")
    .attr("id", "thing")
    .style("fill", "navy");

thing.append("text")
    .style("font-size", "9px")
    .append("textPath")
    .attr("xlink:href", "#s3")
    .text(code);

d3.timer(rotateCircle,40)
    
function rotateCircle(){
    thing.attr("transform","rotate(2)");
}

function populateArray(){
    var targetArray = [];
    var actg='ACTG'; 
    for (var i=0;i<150;i++){
        var index = Math.floor(Math.random()*4);
        targetArray.push(actg[index]);
    }
    return targetArray.join("");
}
