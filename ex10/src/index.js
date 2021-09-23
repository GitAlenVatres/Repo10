function myFunction(){
var myMusic={
    001: {
      artist:"Billy Joel",
      title: "Piano Man",
      release_year:1973,
      formats:{
        1: "CD",
        2: "8T",
        3: "LP"
      },
      gold:true
     },
     
     002: {
      artist:"Neki Artist",
      title: "Neki Naziv",
      release_year:2015,
      formats:{
        1: "AB",
        2: "DE",
        3: "FG"
      },
      gold:true
      }
   };
   return myMusic;
}

myFunction()[2];
module.exports=myFunction;