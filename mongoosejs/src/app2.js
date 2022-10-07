import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/MultipleMongoose")
    .then((data) => {
        console.log("connection successful")
    })

    .catch((err) =>{
        console.log(err)
    })


    const playlistSchema = new mongoose.Schema({

        name: {

                type:       String,
                required:   true,
        },


        ctype:  String,
        videos: Number,
        author: String,
        active: Boolean,
        date:   {
                type:       Date,
                default:    Date.now
        }
    })


    const Playlist = new mongoose.model("Playlist", playlistSchema)


    const createDocument = async() =>{

        try{
            const jsPlaylist = new Playlist({
                name:   "JavaScript",
                ctype:  "Front End",
                videos: 150,
                author: "Thapa",
                active: true
 
            })

            const mongoPlaylist = new Playlist({
                name:   "MongoDB",
                ctype:  "Database",
                videos:  40,
                author: "Thapa",
                active: true

            })

            const mongoosePlaylist = new Playlist({
                name:   "Mongoose",
                ctype:  "Database",
                videos:  89,
                author: "Thapa",
                active: false

            })

            const expressPlaylist = new Playlist({
                name:   "Expressjs",
                ctype:  "Back End",
                videos:  84,
                author: "Thapa",
                active: true

            })
            
            const result = await Playlist.insertMany([jsPlaylist,mongoPlaylist,mongoosePlaylist,expressPlaylist]
        }
        
    }