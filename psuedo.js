// SETUP
    // npm install
    // require express
    // setup a PORT
    // setup your server
    // setup public static folder
    // setup data parsing
    // have your server listen

// ROUTES
    // API
        // '/api/notes' 
            // GET all the notes
                // send it back as JSON
                // FS to interact with db.json and get the notes
            // POST create a new note and save it
                // receive JSON from the front end
                // generate ID for the new note
                // FS to write the JSON to db.json
            // DELETE delete a note
                // receive ID parameter
                // compare it with the IDs in db.json
                // match the ID and delete that note
    // HTML
        // '/' send your index.html
        // '/notes' send your notes.html
        
// DEPLOYMENT
    // follow heroku guide instructions