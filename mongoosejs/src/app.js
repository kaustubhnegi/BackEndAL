// const mongoose = require("mongoose");
import mongoose from "mongoose";
/////////////////////////////////////////////////////

//      DATABASE CREATION
mongoose.connect("mongodb://localhost:27017/NewMongooseDB")
    .then((data) => { console.log("connection sucessful") })
    .catch((err) => { console.log(err) })

///////////////////////////////////////////////////////



// A Mongoose schema defines the structure of the document, 
// default values, validators , etc.

////////////////////////////////////////////////////////

//      SCHEMA
    const playlistSchema = new mongoose.Schema({
        name:  { 
            
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
//////////////////////////////////////////////////////////////
    // Modal
    // A Mongoose Model is a wrapper on the Mongoose Schema.
    // A Mongoose Schema defines the structure of the document,
    // default values, validators, etc., whereas a Mongoose model
    // provides an interface to the database for creating, querying,
    // updating, deleting records etc.


    ////////////////////////////////////////////////////////

    //          COLLECTION CREATION
    const Playlist = new mongoose.model("Playlist", playlistSchema)


    //////////////////////////////////////////


    // create or insert document

    // const reactPlaylist =  new Playlist({
    //     name:   "ReactJs",
    //     ctype:  "Front End",
    //     videos:  80,
    //     author: "Alice",
    //     active:  true
       
    // })


    // returns a promise
    // reactPlaylist.save();

    // using async await is better than a promise

    const createDocument = async() =>{
        try{
         const reactPlaylist =  new Playlist({
            name:   "NodeJs",
            ctype:  "Back End",
            videos:  60,
            author: "Thapa",
            active:  true
       
    })
    const result = await reactPlaylist.save();
    console.log(result);

        }catch(err){
            console.log(err);
        }



    }

    createDocument();
    