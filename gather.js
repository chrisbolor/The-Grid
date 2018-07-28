// JavaScript Document


// THIS FUNCTION CHECKS FOR VIEWABLE WINDOW RESIZING AND MAKES COMPUTE() RUN TO DYNAMICALLY UPDATE WIDTHS AND SCALING

function gather(){	
	
	var myWindowWidth = window.innerWidth;
	var myWindowHeight = window.innerHeight;

	innerWrapper.style.height = myWindowHeight*(.944444) + 'px';

	
	var myBgWidth = window.getComputedStyle(myWindow, null).getPropertyValue("width").replace('px', '');
	var myBgHeight = window.getComputedStyle(myWindow, null).getPropertyValue("height").replace('px', '');
	
	text1.innerHTML = "<h1>CUSTOM GRID TEMPLATE SAMPLE</h1>by Chris Bolor | <a href='http://www.chrisbolor.com' target='_blank'>chrisbolor.com</a><br /><br />";
	text1.innerHTML += "VIEWABLE WINDOW WIDTH = " + myWindowWidth + "px" + " | " + "VIEWABLE WINDOW HEIGHT = " + myWindowHeight + "px" + '<br />';
	text1.innerHTML += "ENTIRE DOCUMENT WIDTH = " + myBgWidth + "px" + " | " + "ENTIRE DOCUMENT HEIGHT = " + myBgHeight + "px";
	
	window.onresize = function(){
		
		
		clearTimeout(timer1);
		timer1 = setTimeout(gather, 0010);
		
		clearTimeout(timer2);
		timer2 = setTimeout(compute, 0010);

		
		
	}
	
}
gather();

// END GATHER FUNCTION