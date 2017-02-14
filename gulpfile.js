/**
 * Gulp Object
 *
 * The main object of the Gulp Build System.
 * Used to organize the build tasks.
 * 
 * @type {Object}
 */
var gulp = require('gulp');	


/**
 * Gulp Webserver Object
 *
 * Local webserver for testing purposes
 * 
 * @type {Object}
 */
var webserver = require('gulp-webserver');

/**
 * Host name
 *
 * You should set your ip here in order to be able to
 * access the app from another device in the lan
 * 
 * @type {String}
 */
//var host = '192.168.1.103';
var host = '0.0.0.0';

/**
 * Default Task
 *
 * This task will build the application and start the local 
 * webserver when the gulp command is executed on the
 * command line in the app root directory
 */
gulp.task('default', [
	'serve'
])

/**
 * Serve Task
 *
 * This task start the local webserver
 */
gulp.task('serve',  function () {

	//Starts the webserver on the "8000" port
	//To access the app go to "http://localhost:8000"
	gulp.src('./src')
    	.pipe(webserver({
			open: true,
			host : host
		}));
})