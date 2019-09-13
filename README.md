# LIRI

**LIRI** is a Language Interpretation Recognition Interface, similar to SIRI but it takes in commands from the terminal instead of from your voice. LIRI is currently equipped to help you find the next concert of any band and details about your favorite song or movie by entering them into the command line. 

Video showing how Liri works in detail: [Click Here!](https://drive.google.com/open?id=1Jam03dJYz5x2JczFaCSn5mB87ml9f1dy)

    

### To begin:

    1. right-click on liri.js and open in terminal
    2. on the command line enter 'node liri.js
    3. then continue the command with either
        - "music-this 'song name here' " to grab details about any song
        - "concert-this 'band name here' " to grab details about the bands next concert
        - "movie-this 'movie name here' " to grab details about any movie
        - ex. node liri.js movie-this Pulp Fiction
    4. your info will pop up in the terminal telling you everything you wanted to know
    5. you can also find all the music, concert, movie info that you've searched in the 
       log.txt file in the root directory    
    6. finally, if you want to know what Bowie's favorite song in the whole world is try:
       node liri.js do-what-it-says

### Technologies Used:

    JavaScript
    Node.js
    
    Node Modules:
     *axios
     *dotenv
     *colors
     *node-spotify-api
     *moment
     
    APIs:
     *Spotify-node-api
     *OMDB
     *Bands in Town
    
    
    
##### Developed by Jon Alden
    


