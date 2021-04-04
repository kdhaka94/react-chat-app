import mongoose,{ Schema } from 'mongoose';

const { ObjectId } = Schema.Types;
ObjectId.prototype.valueOf = () => this.toString();

export const UserModel = mongoose.model('User',new Schema({
  email:{
    type: String,
    required: true,
  },
  name:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
}))