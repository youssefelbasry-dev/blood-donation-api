const mongoose=require('mongoose');

const PostSchema =mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    tel: String,
    ville: String,
    Type_de_sang: String,
    temps_dappel: String
})


module.exports=mongoose.model('Posts',PostSchema);