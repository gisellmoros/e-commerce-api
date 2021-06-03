let express = require('express');
let mongoose = require('mongoose');
let app = express();
let port = 4000;

mongoose.connect('mongodb+srv://gisellmoros:3.14easyaspi@cluster0.mhzvf.mongodb.net/e-commerce-InstaG?retryWrites=true&w=majority', {

	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false

})
.then(() => {
	console.log("Connected to Database.")
})
.catch((err) => {
	console.log(err.message)
});

app.use(express.json());

app.listen(port,() => {console.log(`Server is running at localhost:${port}`)});