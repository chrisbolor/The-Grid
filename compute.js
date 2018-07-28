// JavaScript Document

// JavaScript Document


// THE FOLLOWING DISPLAYS COLUMN AND GUTTER WIDTH PERCENTAGES //

function compute(){
	
	// the following variables are called again to compute the window and bg widths again before adjusting the CSS 
	// must be here to obtain most recent change to properly scale and adjust
	var myBgWidth = window.getComputedStyle(myWindow, null).getPropertyValue("width").replace('px', '');
	var myBgHeight = window.getComputedStyle(myWindow, null).getPropertyValue("height").replace('px', '');
	
	var myWindowWidth = window.innerWidth;
	var myWindowHeight = window.innerHeight;
	
	
	text2holder = "<h2>TOTAL COMBINED COLUMN & WIDTH PERCENTAGES</h2>";
	text2holder += "<i>Depicted are combinations with sets of up to 13 items.</i><br><br><br><br>";
	
	text3holder = "<h2>ADJUSTED COLUMN AND GUTTER WIDTHS IN PIXELS</h2>";
	text3holder += "<i>Depicted are combinations with sets up to 13 items.</i><br><br><br><br>";
	
	text4holder = "<h2>CSS FOR DYNAMIC COLUMN AND GUTTER WIDTH</h2>";
	text4holder += "<i>Depicted are combinations with sets up to 13 items.</i><br><br><br><br>";
	


	//THE FOLLOWING STATEMENT CHECKS IF THE SCREEN IS ORIENTED LANDSCAPE AND WILL ARRANGE THE HTML OBJECTS ACCORDINGLY
	if((myWindowWidth/myWindowHeight) > "1.125"){
		for(p=0; p < mainSections.length; p++){
			mainSections[p].style.display = 'inline-block';
			mainSections[p].style.marginLeft = '2.2222%';
			mainSections[p].style.marginRight = '';
			mainSections[p].style.position = 'relative';
			mainSections[p].style.width = '';
			
			// THESE TWO STATEMENTS FIX THE MINWIDTH SO THINGS DON'T GET TOO UGLY WHEN SQUISHED
			mainSections[p].style.minWidth = window.getComputedStyle(mainSections[p], null).getPropertyValue("width").replace('px', '')*(40/100) + 'px';
			text1.style.minWidth = window.getComputedStyle(text1, null).getPropertyValue("width").replace('px', '')*(40/100) + 'px';
			mainContainer.style.minWidth = window.getComputedStyle(mainContainer, null).getPropertyValue("width").replace('px', '')*(40/100) + 'px';
			myWindow.style.minWidth = window.getComputedStyle(myWindow, null).getPropertyValue("width").replace('px', '')*(40/100) + 'px';

		}

	}


	// even number of COLUMNS and gutters
	text2holder += "EVEN NUMBER OF COLUMNS AND GUTTERS<br>";
	text3holder += "EVEN NUMBER OF COLUMNS AND GUTTERS<br>";
	text4holder += "EVEN NUMBER OF COLUMNS AND GUTTERS<br>";
	for(i=0; i<13; i++){
		perentages[i] = ((i*6.25)+(i*2.27)) + '%' + '<br />';
		pixels[i] = (((i*6.25)+(i*2.27))/100)*(myWindowWidth);
		
		//document.getElementsByClassName("'" + [i] + "cols-" + [i] + "guts" + "'").style.width = "50px";
		
		pixels[i] += '<br />';
		css[i] = '.' + [i] + 'cols-' + [i] + 'guts';
		css[i] += ' { width:' + ' ' + (((i*6.25)+(i*2.27))/100)*(myWindowWidth) + 'px }';
		css[i] += '<br />';
		
				
		text2holder += perentages[i];
		text3holder += pixels[i];
		text4holder += css[i]
	}
	text2holder += "<br />";
	text3holder += "<br />";
	text4holder += "<br />";
	
	// gutters only
	text2holder += "GUTTERS ONLY<br>";
	text3holder += "GUTTERS ONLY<br>";
	text4holder += "GUTTERS ONLY<br>";
	for(i=0; i<12; i++){
		perentages[i] = (i*2.27) + '%' + '<br />';
		pixels[i] = ((i*2.27)/100)*(myWindowWidth);
		pixels[i] += '<br />';
		css[i] = '.' + '0cols-' + [i] + 'guts';
		css[i] += ' { width: ' + ' ' + ((i*2.27)/100)*(myWindowWidth) + 'px }'; 
		css[i] += '<br />';
		
		text2holder += perentages[i];
		text3holder += pixels[i];
		text4holder += css[i];
	}
	text2holder += "<br>";
	text3holder += "<br>";
	text4holder += "<br>";
	
	// COLUMNS only
	text2holder += "COLUMNS ONLY<br>";
	text3holder += "COLUMNS ONLY<br>";
	text4holder += "COLUMNS ONLY<br>";
	for(i=0; i<13; i++){
		perentages[i] = (i*6.25) + '%' + '<br />';
		pixels[i] = ((i*6.25)/100)*(myWindowWidth);
		pixels[i] += '<br />';
		css[i] = '.' + [i] + 'cols-' + '0guts';
		css[i] += ' { width: ' + ' ' + ((i*6.25)/100)*(myWindowWidth) + 'px }';
		css[i] += '<br />';
		
		text2holder += perentages[i];
		text3holder += pixels[i];
		text4holder += css[i];
	}
	text2holder += "<br>";
	text3holder += "<br>";
	text4holder += "<br>";
	

	// BEGIN TIMESAVING COMPUTATION FOR 99% SIMILAR PROCESS //
	// THIS WILL COMPUTE MULTIPLE FIXED QUANTITY COLUMNS + VARIABLE QUANTITY GUTTERS AND GENERATE THE CSS CODE //
	for(s=0; s<13; s++){
		
		text2holder += s + " COLUMN<br>";
		text3holder += s + " COLUMN<br>";
		text4holder += s + " COLUMN<br>";
		
		for(i=0; i<13; i++){
			
			perentages[i] = ((s*6.25)+(i*2.27)) + '%' + '<br />';
			pixels[i] = (((s*6.25)+(i*2.27))/100)*(myWindowWidth);
			pixels[i] += '<br />';
			css[i] = '.' + s + 'cols-' + i + 'guts';
			css[i] += ' { width: ' + ' ' + (((s*6.25)+(i*2.27))/100)*(myWindowWidth) + 'px }';
			css[i] += '<br />';

			text2holder += perentages[i];
			text3holder += pixels[i];
			text4holder += css[i];
			
			
			
			
			// THIS FOLLOWING SUB-FUNCTION DETERMINES WHICH GRID CLASSES ARE PRESENT IN THE DOCUMENT, AND HOW MANY ITEMS WITH THAT CLASS DESIGNATION THERE ARE
			for(x=0; x<13; x++){
				classes[x] = document.getElementsByClassName(s + "cols-" + i + "guts");
				
				if(classes[x].length > 0){

					// THIS IS FOR DEBUGGING //
					console.log("INFORMATION FOR CLASS: " + "." + s + "cols-" + i + "guts");
					console.log("ITEMS IN CLASS: " + classes[x].length);
					console.log(classes[x]);
					
					
					// THIS SETS THE WIDTH CURRENTLY SELECTED CLASS; OVER AND OVER; DYNAMICALLY
					if(classes[x].item(x)){
						classes[x].item(x).style.width = (((s*6.25)+(i*2.27))/100)*(myWindowWidth) + "px";	
					}

				}
			}
			
			
			
		}
		text2holder += "<br>";
		text3holder += "<br>";
		text4holder += "<br>";	
	}
	
	
	
	
	text2.innerHTML = text2holder;
	text3.innerHTML = text3holder;
	text4.innerHTML = text4holder;
	
	
	// END TIMESAVER //
	
	
	
	
	
	
	// THE FOLLOWING IS FOR DEBUGGING
	for(t=0; t<13; t++){
		for(v=0; v<13; v++){
			console.log("'" + t + "cols-" + v + "guts" + "'");
	
		}
	}


	// THE FOLLOWING STATEMENT CHECKS IF IT IS TIME TO RE-ORIENT/RE-ORDER THE HTML ELEMENTS TO FIT THE RESIZED SCREEN FOR PORTRAIT/MOBILE
	if((myWindowWidth/myWindowHeight) < "1.125"){
		for(p=0; p < mainSections.length; p++){
			mainSections[p].style.display = 'block';
			mainSections[p].style.marginLeft = 'auto';
			mainSections[p].style.marginRight = 'auto';
			mainSections[p].style.position = '';
			mainSections[p].style.width = '95.5555%';
		}
	}
	
	/*if(((myWindowWidth/myWindowHeight) < "1.125") && (myWindowWidth <'400')){
		myWindow.style.fontSize = '16pt';
	}
	*/

	
}
compute();

// END COMPUTING FOR COLUMN + GUTTER WIDTH PERCENTAGES, PIXELS & CSS CODE GENERATION //