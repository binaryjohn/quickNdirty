$(document).ready(function (){
    var visualSearch = VS.init({
        container :$('.visual_search'),
        query:'',
        callbacks:{
            search:function(query,searchCollection){},
            facetMatches:function (callback){},
            valueMatches: function (facet,searchTerm,callback){}
        }
    });
});
