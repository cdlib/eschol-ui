// ##### Media Queries ##### //

// import Breakpoints from './breakpoints.json'

// console.log(Breakpoints.screen1);

module.exports = function joelMQ() {
	if (matchMedia) {
	  var mq = window.matchMedia("(min-width: 900px)");
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	}

	// media query change
	function WidthChange(mq) {
	  if (mq.matches) {
			console.log("min-width is 900px");
	  	// document.getElementById("mqdiv").innerHTML = "min-width is 900px";
	  } else {
	    console.log("min-width is less than 900px");
    	// document.getElementById("mqdiv").innerHTML = "min-width is less than 900px";
	  }

	}

}
