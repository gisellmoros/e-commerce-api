let express = require('express');
let mongoose = require('mongoose');
let app = express();
let port = 4000;

mongoose.connect('mongodb+srv://gisellmoros:3.14easyaspi@cluster0.mhzvf.mongodb.net/instag-api?retryWrites=true&w=majority', {

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

const userRoutes = require('./routes/userRoutes')
app.use('/api/users',userRoutes);

const productRoutes = require('./routes/productRoutes')
app.use('/api/products',productRoutes);

/*const orderRoutes = require('./routes/orderRoutes')
app.use('/api/orders',orderRoutes);*/

app.listen(port,() => {console.log(`Server is running at localhost:${port}`)});