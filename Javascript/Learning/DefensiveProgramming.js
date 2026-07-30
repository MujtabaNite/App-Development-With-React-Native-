function letterFinder(word, match) {
     /*1.checking length of word more than 2 
      and match length is one and both are strings */
     if(
        !(word.length > 2 
        && match.length == 1 
        && typeof(word) == 'string'
        && typeof(match) == 'string')
    ){ 
        console.log('Please pass correct arguments to the function')
        return;
    }
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("cat", "c")
letterFinder("1",2)

try {
(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}