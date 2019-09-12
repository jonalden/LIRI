require("dotenv").config();
const keys = require("./keys.js");
const axios = require("axios");
const moment = require("moment")
const fs = require("fs");
const Spotify = require('node-spotify-api');
const colors = require("colors");
const spotify = new Spotify(keys.spotify);

let selector = process.argv[2];
let term = process.argv.slice(3).join(" ");

const nextShow = function () {

    let myQuery = term || "beck";

    axios
        .get("https://rest.bandsintown.com/artists/" + myQuery + "/events?app_id=codingbootcamp")
        .then(function (response) {

            let name = `Name: ${response.data[0].lineup}`
            let venue = `Venue: ${response.data[0].venue.name}`
            let date = `Date: ${moment(response.data[0].datetime).format("MMM Do YY")}`

            console.log("\n----------------------------");
            console.log(name.cyan);
            console.log(venue.cyan);
            console.log(date.cyan);
            console.log("----------------------------\n");

            fs.appendFile("log.txt", "\n" + name + "\n" + venue + "\n" + date + "\n----------------------------------------------", function (err) {
                if (err) throw err;
                console.log('Saved!'.green);
            })

        })
        .catch(function (error) {
            if (error.response) {

            } console.log(error.config);
        })
}

const getMovie = function () {

    let myQuery = term || "Mr. Nobody";

    axios
        .get("http://www.omdbapi.com/?apikey=trilogy&limit=1&t=" + myQuery)
        .then(function (response) {

            let title = `Title: ${response.data.Title}`;
            let year = `Year: ${response.data.Year}`;
            let imdb = `IMDB: ${response.data.imdbRating}`;
            let tomatoes = `RottenTomatoes: ${response.data.Ratings[1].Value}`;
            let country = `Country: ${response.data.Country}`;
            let language = `Language: ${response.data.Language}`;
            let actors = `Actors: ${response.data.Actors}`;
            let plot = `Plot: ${response.data.Plot}`;

            console.log("\n----------------------------");
            console.log(title.magenta);
            console.log(year.magenta);
            console.log(imdb.magenta);
            console.log(tomatoes.magenta);
            console.log(country.magenta);
            console.log(language.magenta);
            console.log(actors.magenta);
            console.log(plot.magenta);
            console.log("----------------------------\n");

            fs.appendFile("log.txt", "\n" + title + "\n" + year + "\n" + imdb + "\n" + tomatoes + "\n" + country + "\n" + language + "\n" + actors + "\n" + plot + "\n----------------------------------------------", function (err) {
                if (err) throw err;
                console.log('Saved!'.green);
            })

        })
        .catch(function (error) {
            if (error.response) {

            } console.log(error.config);
        })
}

const getSong = function () {
    let myQuery = term || "Ace of Base The Sign";
    spotify
        .search({ type: 'track', query: myQuery })
        .then(function (data) {

            let artists = `Artists: ${data.tracks.items[0].artists[0].name}`;
            let name = `Name: ${data.tracks.items[0].name}`;
            let url = `URL: ${data.tracks.items[0].external_urls.spotify}`;
            let album = `Album: ${data.tracks.items[0].album.name}`;

            console.log("\n----------------------------");
            console.log(artists.america);
            console.log(name.america);
            console.log(url.america);
            console.log(album.america);
            console.log("----------------------------\n");

            fs.appendFile("log.txt", "\n" + artists + "\n" + name + "\n" + url + "\n" + album + "\n----------------------------------------------", function (err) {
                if (err) throw err;
                console.log('Saved!'.green);
            })
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
}

const whatItSays = function () {

    fs.readFile("random.txt", 'utf8', function (err, data) {
        if (err) throw err;

        spotify
            .search({ type: 'track', query: data })
            .then(function (data) {

                let artists = `Artists: ${data.tracks.items[0].artists[0].name}`;
                let name = `Name: ${data.tracks.items[0].name}`;
                let url = `URL: ${data.tracks.items[0].external_urls.spotify}`;
                let album = `Album: ${data.tracks.items[0].album.name}`;

                console.log("\n----------------------------");
                console.log(artists.rainbow);
                console.log(name.rainbow);
                console.log(url.rainbow);
                console.log(album.rainbow);
                console.log("----------------------------\n");

                fs.appendFile("log.txt", "\n" + artists + "\n" + name + "\n" + url + "\n" + album + "\n----------------------------------------------", function (err) {
                    if (err) throw err;
                    console.log('Saved!'.green);
                })
            })
            .catch(function (err) {
                console.error('Error occurred: ' + err);
            });
    })
}

if (selector === "movie-this") {
    getMovie();
}
else if (selector === "concert-this") {
    nextShow();
}
else if (selector === "music-this") {
    getSong();
}
else if (selector === "do-what-it-says") {
    whatItSays();
}



