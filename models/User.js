const Mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 


const UserSchema  = new Mongoose.Schema({

    name:{ type: String, required: true },
    email:{ type:String, required: true, unique: true },
    password:{ type: String, required: true },
    role:{ type: String, enum: ['admin', 'user'], default: 'user' },
    createdAt:{ type: Date, default: Date.now }
}, { timestamps: true });


UserSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next();

    const  salt = await bcrypt.gensalt(10)

    this.password = await bscypt.hash(this.password, salt);

    next();
    
})

UserSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

Mongoose.model.exports = Mongoose.model('User', UserSchema);