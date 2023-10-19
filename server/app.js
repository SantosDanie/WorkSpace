// Imports
require('dotenv').config()
const express					= require('express')
const cors						= require('cors')
const cookieParser				= require('cookie-parser')
const mongoose					= require('mongoose')
const path						= require('path')
const corsOptions				= require('./config/cors')
const connectDB					= require('./config/database')
const credentials				= require('./middleware/credentials')
const errorHandlerMiddleware	= require('./middleware/error_handler')
const authenticationMiddleware	= require('./middleware/authentication')
const app						= express()
const PORT						= process.env.PORT || 10000;

connectDB()										// Execute Connection
app.use(credentials)							// Allow Credentials
app.use(cors(corsOptions))						// Cors
app.use(express.json())							// Application/json
app.use(express.urlencoded({ extended: true }))	// Application.x-www-form-urlencoded

app.use(cookieParser())													// Middleware Cookies
app.use(authenticationMiddleware)
app.use('/uploads',	express.static(path.join(__dirname, 'uploads')))	// Uploads
app.use('/static',	express.static(path.join(__dirname, 'public')))		// Static Files
app.use(errorHandlerMiddleware)											// Default Error Handler

// Routes
app.use('/api/auth',	require('./routes/api/auth'))	// auth
app.use('/api/project',	require('./routes/api/project'))// Project
app.use('/api/page',	require('./routes/api/pages'))	// Pages
app.use('/api/media',	require('./routes/api/media'))	// Media

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