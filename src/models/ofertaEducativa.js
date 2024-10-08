import mongoose from 'mongoose';

const { Schema } = mongoose;

const ofertaEducativaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    admisiones: [{
        type: Schema.Types.ObjectId,
        ref: 'Admision'
    }],
    profesores: [{
        type: Schema.Types.ObjectId,
        ref: 'Profesor'
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('OfertaEducativa', ofertaEducativaSchema);
