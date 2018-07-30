/*
*	author: Michael Wang
*	date created:07-28-2018
*	date lasted edited: 07-29-2018
*/

// # npm install readline-sync
// # npm install timer-stopwatch
// # npm install lodash

function printMenu(){
	console.log("This is a timer app");
	console.log("This app will ask for the number of secods for the timer");
	console.log("This app will display the remaining time and print timer is complete upon completion");
}

function stopwatch(){
	var stopwatch = new Stopwatch(); // A new count up stopwatch. Starts at 0.
}

function timer(amount){
	var timer = new Stopwatch(amount); // A new countdown timer with 60 seconds
	timer.start();
	timer.onTime(function(time) {
	    console.log(time.ms/1000);
	});
	timer.onDone(function(){
	    console.log('Timer is complete');
	});
}

printMenu();

var readline = require('readline-sync');

var options = {
    refreshRateMS: 1000,		// How often the clock should be updated
    almostDoneMS: 10000, 	// When counting down - this event will fire with this many milliseconds remaining on the clock
}

var Stopwatch = require('timer-stopwatch');

do{
	var time1 = readline.question("How many seconds do you want to set a timer for?");
} while (!(/^\d+$/.test(time1)))
var tTime = parseInt(time1) * 1000;
timer(tTime);