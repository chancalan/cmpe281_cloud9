
var async = require("async") ;

async.series({
    one: function(c){
        console.log ( "1" ) ; 
        c(null, "hello") ; // call two
    },
    two: function(c){
        console.log ( "2" ) ; 
        c("error", "there") ; // call threee
    },
    three: function(c){
        console.log ( "3" ) ; 
        c(null, "class!") ;
    }
},
function(err, results) {
    console.log("err: " + err);
    console.log(results ) ;
}
);
