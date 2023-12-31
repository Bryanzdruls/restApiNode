const {Schema,model} = require('mongoose'); 

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is a Must.']
    },
    email: {
        type: String,
        required: [true, 'Email is a Must.'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is a Must.'],
    },
    img: {
        type: String,     
    },
    role: {
        type: String,  
        required: [true, 'Role is a Must.'],  
        default:'USER_ROLE',
        enum: ['ADMIN_ROLE', 'USER_ROLE','VENTAS_ROLE']  
    },
    state: {
        type: Boolean,  
        default: true,        
    },
    google: {
        type: Boolean,
        default: false,
    }
})

UserSchema.methods.toJSON = function(){
    const {_id,__v, password, ...user}= this.toObject();
    user.uid = _id
    return user;
}

module.exports = model('User',UserSchema);