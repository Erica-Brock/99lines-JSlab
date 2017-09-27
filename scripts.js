var friends=["Kiara", "Kirsten", "Tyffani", "Jeff", "Brandon"];
function sing(friend){
    console.log (friend +":")
    for(var i=99; i>1; i--){
        console.log( i + " lines of code in the file,", i + " lines of code; " , friend ," strikes one out clears it all out", i-1 +" lines of code in the file.");
    }
    console.log("1 line of code in the file, 1 line of code;", friend +" strikes one out, clears it all out, no more lines of code in the file." );
}
function callFriend(friends){
    for(var i=0; i<friends.length ; i++){
        sing(friends[i]);
    }
}

callFriend(friends);