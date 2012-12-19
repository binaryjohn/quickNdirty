var width=1024
    ,height=768
    ,radius=75;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var drag = d3.behavior.drag()
    .origin(function(d) { 
        console.log("Do1n this");
        return d;
    })
    .on("dragstart", dragstart)
    .on("drag", dragmove)
    .on("dragend", dragend);

    
function begin(x){
    var data = [];
    for(var i=0;i<x;i++)
        data.push({x:getRandX(),y:getRandY()});
    //plotCircle(data);
    addACircle();
}
function addACircle(){
        randX = getRandX();
        randY = getRandY();
        enter = svg.append("circle");
        enter.attr("r",radius);
        enter.attr("cx",randX);
        enter.attr("cy",randY);
        enter.attr("fill","yellow");
        enter.attr("stroke","orange");
        enter.attr("stroke-width",25);
        enter.call(drag);
}
function plotCircle(data){
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("r",radius)
        .attr("cx",function(d) {return d.x;})
        .attr("cy",function(d) {return d.y;})
        .attr("fill","yellow")
        .attr("stroke","orange")
        .attr("stroke-width",25)
        .call(drag);
}

function dragstart(){
    console.log("Do2n this");
}

function dragmove(d){
  console.log("Do3n this");
  d3.select(this)
      .attr("cx", d.x = Math.max(radius, Math.min(width - radius, d3.event.x)))
      .attr("cy", d.y = Math.max(radius, Math.min(height - radius, d3.event.y)));
}

function dragend(){
        console.log("Do4n this");
}

function getRandX(){
    var rand= d3.scale.linear().domain([0,1]).range([screen.width / 2 - 400,screen.width / 2 + 400]);
    rand = Math.floor(Math.random()*width);
    return rand;
}

function getRandY(){
    var rand= d3.scale.linear().domain([0,1]).range([0,height]);
    rand = Math.floor(Math.random()*height);
    return rand;
}
