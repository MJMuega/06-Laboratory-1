
function favArtistAge(){
    let artistAge =  prompt("Enter the Age of your favoraite Artist: ");

    if (artistAge<25){
       document.write(`They're ${artistAge} old and they're younger than google`);
       console.log(`They're ${artistAge} old and they're younger than google`);
    }
    else if (artistAge>25){
        document.write(`They're ${artistAge} old and they're older than google`);
        console.log(`They're ${artistAge} old and they're older than google`);
    }
    else if (artistAge==25){
        document.write(`They're ${artistAge} old and they're as old as google`);
        console.log(`They're ${artistAge} old and they're as old as google`);
    }    
}
favArtistAge();