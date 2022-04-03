const mongoose = require('mongoose')

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(
            "mongodb://localhost/text-app",
            connectionParams
        );
    } catch (error) {
        console.log("Could not connect to database", error)
    }
}