var w = 1280,
    h = 1024,
    fill = d3.scale.category20(),
    id = 0,
    nodes = [],
    links = [];

var vis = d3.select("body").append("svg:svg")
    .attr("width", w)
    .attr("height", h);

vis.append("svg:rect")
    .attr("width", w)
    .attr("height", h);

var force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .linkDistance(50)
    .size([w, h]);

var cursor = vis.append("svg:circle")
    .attr("r", 5)
    .attr("transform", "translate(-100,-100)")
    .attr("class", "cursor");

force.on("tick", function() {
    vis.selectAll("line.link")
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

    vis.selectAll("circle.node")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
});

vis.on("mousemove", function() {
    cursor.attr("transform", "translate(" + d3.svg.mouse(this) + ")");
});

restart();

function restart() {

    vis.selectAll("line.link")
    .data(links)
    .enter().insert("svg:line", "circle.node")
    .attr("class", "link")
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

    vis.selectAll("circle.node")
    .data(nodes)
    .enter().insert("svg:circle", "circle.cursor")
    .attr("class", "node")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", 5)
    .call(force.drag);

    force.start();
}

function addPoints(){
    
    id++;
    node = {x: getRandX(), y: getRandY(), identifier:id,parent:getRandParent()},
    n = nodes.push(node); 
    nodes.forEach(function(target) {
        var x = target.x - node.x,
        y = target.y - node.y;
        if(node.identifier >0){
            if(target.identifier == node.parent){
                console.log("Pushing to array now");
                links.push({source: node, target: target});
            }
        }
    });

    restart();
}

function getRandX(){
    var rand= d3.scale.linear().domain([0,1]).range([screen.width / 2 - 400,screen.width / 2 + 400]);
    rand = Math.floor(Math.random()*w);
    return rand;
}

function getRandY(){
    var rand= d3.scale.linear().domain([0,1]).range([0,h]);
    rand = Math.floor(Math.random()*h);
    return rand;
}
function getRandParent(){
    var rand= d3.scale.linear().domain([0,1]).range([0,id]);
    rand = Math.floor(Math.random()*id);
    return rand;
}
