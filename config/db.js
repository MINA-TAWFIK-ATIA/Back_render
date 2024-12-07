const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://minatawfik98:*C4Du_zhhhTW-*8@cluster0.99ifm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


.then(()=>{
    console.log('connected to DB')
})
.catch(()=>{
    console.log('unable to connect to DB')

})


// async function connectDB() {
//     try {
//         console.log(process.env.DATABASE_URL);
//         await mongoose.connect(process.env.DATABASE_URL);
//         console.log("Connected to database");
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = { connectDB };
