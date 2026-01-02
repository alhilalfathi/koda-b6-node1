const fs = require(`fs`)
const bands = ["Niki", "Hindia", "Noah", "OneDirection", "JustinBieber"]
let artist 

fs.mkdir(`Music`,function(){
        
    })
for(i=0; i<bands.length; i++){
    artist = bands[i]
    // console.log(artist)

    
    fs.mkdir(`Music/${artist}`,function(){
        
    })
}


    


