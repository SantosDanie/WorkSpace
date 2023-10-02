// Imports
require('dotenv').config()
const express		= require('express')
const cors			= require('cors')
const cookieParser	= require('cookie-parser')
const mongoose		= require('mongoose')
const path			= require('path')
const corsOptions	= require('./config/cors')
const connectDB		= require('./config/database')
const credentials	= require('./middleware/credentials')
const errorHandlerMiddleware	= require('./middleware/error_handler')
const authenticationMiddleware	= require('./middleware/authentication')

const app = express()
const PORT = process.env.PORT || 5000;

// Execute Connection
connectDB()

// Allow Credentials
app.use(credentials)

// Cors
app.use(cors(corsOptions))

// Application/json
app.use(express.json())

// Application.x-www-form-urlencoded
app.use(express.urlencoded({
	extended: true
}))

// Middleware Cookies
app.use(cookieParser())
app.use(authenticationMiddleware)

// Uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Static Files
app.use('/static', express.static(path.join(__dirname, 'public')))

// Default Error Handler
app.use(errorHandlerMiddleware)

// Routes
app.use('/api', (req, res) => {
	res.json({'message': 'Welcome to this app'});
});

// Auth
app.use('/api/auth', require('./routes/api/auth'))

// Pages
app.use('/api/page', require('./routes/api/pages'))

// Media
app.use('/api/media', require('./routes/api/media'))

app.all('*', (req, res) => {
	res.status(404)

	if(req.accepts('json')){
		res.json({'error': '404 Not Found'})
	} else{
		res.type('text').send('404 Not Found')
	}
})

mongoose.connection.once('open', () => {
	console.log('DB connected')
	app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })
})