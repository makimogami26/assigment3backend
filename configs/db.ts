import mongoose from 'mongoose'


class mongoDB {
   public connectDB(): void{
      const pathURL = 'mongodb+srv://Dimas:rukanogi123@cluster0.txhqr.mongodb.net/test'
      const connectOption = { useNewUrlParser: true, useUnifiedTopology: true }
      mongoose.connect(pathURL, connectOption)
      
      // cecking mongodb
      const db = mongoose.connection
      db.on('error', console.error.bind(console, 'Connection error :'))
      db.once('open', () => {
         
         console.log('Database connected..')
      })
   }
}

export default new mongoDB().connectDB