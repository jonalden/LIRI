# LIRI

LIRI is a Language Interpretation Recognition Interface, similar to SIRI but it takes in commands from to terminal. LIRI is equipped to help you find the next concert of your favorite band and details about your favorite song or movie by entering them into the command line. :=1:

###To begin:
    1. enter 'node liri.js
    2. then continue the command with either
        * "music-this 'song name here' " to grab details about any song
        * "concert-this 'band name here' " to grab details about the bands next concert
        * "movie-this 'movie name here' " to grab details about any movie
        * ex. node liri.js movie-this Pulp Fiction
    3. your info will pop up in the terminal telling you everything you wanted to know
    4. you can also find all the music, concert, movie info that you've searched in the log.txt file in     the root directory    
    5. finally, if you want to know what Bowie's favorite song in the whole world is try:
        node liri.js do-what-it-says

###LIRI uses multiplt NPMs including:
    *axios
    *dotenv
    *colors
    *node-spotify-api
    *moment
    


