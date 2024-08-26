import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ProfileSchma = new Schema({
    sexe: String,
    pays: String,
    ville: String,
    Image:String,
})

const Profile = mongoose.model('Profile', ProfileSchma);
export default Profile;