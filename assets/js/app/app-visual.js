$(function() {
function canvasSupported() {
  var canvas_compatible = false;
  try {
   canvas_compatible = !!(document.createElement('canvas').getContext('2d')); // S60
  } catch(e) {
   canvas_compatible = !!(document.createElement('canvas').getContext); // IE
  }
  return canvas_compatible;
}

if (canvasSupported()) {
  
  var canvas = document.getElementById("pallette");
  var p = Processing(canvas);

  var initialized = false;

  var search = $("#fb-suggest");
  search.suggest({"type": "/common/topic"})
  .bind("fb-select", function(e, data) {
     p.resourceId = data.id;
     if (!initialized) {
       p.init(p.ajax("/javascripts/pjs/physics.pjs")+p.ajax("/javascripts/pjs/value.pjs")+p.ajax("/javascripts/pjs/attribute.pjs")+p.ajax("/javascripts/pjs/resource.pjs")+p.ajax("/javascripts/pjs/node.pjs")+p.ajax("/javascripts/pjs/edge.pjs")+p.ajax("/javascripts/pjs/graph.pjs")+p.ajax("/javascripts/pjs/network.pjs"));
       initialized = true;
     } else {
       p.setup();
     }
  })
  .focus(function(e) {
    if ($(this).val() == $(this).attr('default')) {
      $(this).val("");
    }
    else {
      $(this).select();
    }
    $(this).removeClass('ghost-input');
  })
  .blur(function(e) {
    if (!$(this).val()) {
      $(this).val($(this).attr('default')).addClass('ghost-input');
    }
  });
  
  search.val(search.attr('default')).addClass('ghost-input');

  // init
  p.resourceId = null; // "/en/new_order";
  p.init(p.ajax("/javascripts/pjs/physics.pjs")+p.ajax("/javascripts/pjs/value.pjs")+p.ajax("/javascripts/pjs/attribute.pjs")+p.ajax("/javascripts/pjs/resource.pjs")+p.ajax("/javascripts/pjs/node.pjs")+p.ajax("/javascripts/pjs/edge.pjs")+p.ajax("/javascripts/pjs/graph.pjs")+p.ajax("/javascripts/pjs/network.pjs"));
  initialized = true;
  
  $(window).resize(function(){
    p.resize();
  });
} else {
  $('#browser_not_supported').show();
  $('#explanation').hide();
}
});
