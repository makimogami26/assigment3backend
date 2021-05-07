import mongoose, { Mongoose } from 'mongoose'
const Schema = mongoose.Schema

interface IUser {
   nama: string,
   email: string,
   password: string,
   Alamat : string
   phone : number,
  
}

interface UserDocument extends mongoose.Document{
    nama: string,
    email: string,
    password: string,
    Alamat : string
    phone : number,
   }


interface UserModelInterface extends mongoose.Model<UserDocument>{
   build(attr: IUser): UserDocument
}

const usersSchema = new Schema({
   nama: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   alamat: {
       type: String,
       required: false
   },
   phone: {
    type: Number,
    required: false
   },
})

const User = mongoose.model<UserDocument, UserModelInterface>('Users', usersSchema)





export {User}