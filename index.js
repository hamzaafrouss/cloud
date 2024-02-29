

const express = require('express');
const app = express();
const Parking = require('./db')
app.use(express.json());
///get
app.get("/parking",(req, res)=>{
    Parking.find()
    .then(parkings => res.status(201).json(parkings))
    .catch(error => res.status(400).json({error}))
})

/////////post
app.post('/parkings',(req,res)=>{
    const {id,nom,type,city} = req.body;
    const newParking = new Parking({
        id,
        nom,
        type,
        city

    })
    newParking.save()
    .then(parking =>res.status(201).json(parking))
    .catch(error =>res.status(404).json({error}));
});

// Update a parking by ID
app.put('/parkings/:id', (req, res) => {
     Parking.UpdateOne({ _id: req.params.id },  req.body )
        .then(parkings => res.status(200).json(parkings))
        .catch(error => res.status(400).json({ error }));
});

// Destroy (Delete) a parking by ID
app.delete('/parkings/:id', (req, res) => {
    const { id } = req.params.id;
    Parking.DeleteOne({ _id: id})
        .then(()=> res.status(200).json({ message: "objet supprime"}))
        .catch(error => res.status(400).json({ error }));
});
app.listen(3000,()=>{
    console.log("serveur a l ecoute ! ")
}
)