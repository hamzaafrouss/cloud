const mongoose = require('mongoose')
mongoose.set('strictQuery',true)

mongoose.connect("mongodb://127.0.0.1:27017/test2",
            {
                useNewUrlParser : true,
                useUnifiedTopology : true 
            }).then(()=> console.log("connexion reussite ! "))
            .catch(()=> console.log ("connexion echouée !"));

const ParkingShema = mongoose.Schema({
    nom:{
        type:String ,
        rzquired:true
    },
    type: String,
    city: String
})
const Parking= mongoose.model("parkings",ParkingShema)
module.exports= Parking 