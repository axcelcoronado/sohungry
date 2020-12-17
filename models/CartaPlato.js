import { strictEqual } from 'assert';
import mongoose,{Schema} from 'mongoose';

const platosSchema =  new Schema({
    nombre: {type: String, maxlength: 15, required: true},
    description: {type: String, maxlength: 255, required: true},
    price: {type: Number, required: true},
    img: {type: String, required: true},
    category: {type: String, required: true, maxlength: 30}
});

const platos = mongoose.model('platos', platosSchema);

export default platos;