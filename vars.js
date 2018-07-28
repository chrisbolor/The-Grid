// JavaScript Document

// THE FOLLOWING VARIABLES COLLECT SCREEN & VIEWPORT INFORMATION
// ALSO SETS VARIABLES AND ARRAYS THAT WILL BE USED TO GENERATE AND CREATE CSS WIDTH UPDATES


var myWindow = document.getElementById("wrapper");
var innerWrapper = document.getElementById("inner-wrapper");

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text2holder;
var text3holder;
var text4holder;

var invisible = document.getElementById("invisible");

var mainContainer = document.getElementById("main");
var mainSections = new Array();
mainSections[0] = text2;
mainSections[1] = text3;
mainSections[2] = text4;

var timer1;
var timer2;
var timer3;

var perentages = new Array();
var pixels = new Array();
var css = new Array();
var classes = new Array();

var myWindowWidth = window.innerWidth;
var myWindowHeight = window.innerHeight;

var myBgWidth = window.getComputedStyle(myWindow, null).getPropertyValue("width").replace('px', '');
var myBgHeight = window.getComputedStyle(myWindow, null).getPropertyValue("height").replace('px', '');
	