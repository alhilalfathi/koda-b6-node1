const fs = require(`fs`)
const bands = ["Niki", "Hindia", "Noah", "OneDirection", "JustinBieber"]
let artist 

fs.mkdir(`Music`,function(err){
        if(err){
            console.log(`Gagal membuat file "Music"` )
        }else console.log(`Berhasil membuat file "Music"`)
    })
for(i=0; i<bands.length; i++){
    artist = bands[i]
    // console.log(artist)
    fs.mkdir(`Music/${artist}`,function(err){
        if(err){
            console.log("Gagal membuat file")
        }else console.log("Berhasil membuat file")

    
    })
}


