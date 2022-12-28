require('dotenv').config({path:'../.env'})
module.exports={
    MONGO_STORE: process.env.MONGO_STORE || 'mongodb+srv://fracaroFederico:fracaroFederico@cluster0.viv6icy.mongodb.net/?retryWrites=true&w=majority',
    SESSION_SECRET: process.env.SESSION_SECRET || 'shhhhhhhhhhhhhhhhhhhhh'
}