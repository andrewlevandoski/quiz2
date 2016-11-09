// write jQuery or vanilla javascript to do the following:
//  - loop through the list items in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function() {
	$('.links li a').on('click', function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!");

	var ul = document.getElementById("ordered-list");
	var items = ul.getElementsByTagName("li");

	for (var i = 0; i < items.length; ++i) {
		if (i === 1) {
			items[i].innerHTML = "New text 1"
	  	items[i].style.color = "red";
		} else if (i == 2) {
			items[i].innerHTML = "New text 2"
	  	items[i].style.color = "green";
		} else {
			items[i].innerHTML = "New text 3"
	  	items[i].style.color = "blue";
		}
	}

	// ACCORDION
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
	}

	// BUTTON
	$('.button').on('click', function(){
		$('.start-screen').fadeOut();
		document.body.style.background = "white";
		$('.end-screen').fadeIn();
	});

	$('.fun-button').on('click', function(){
		x = 1;
		setInterval(change, 60);
	});

	function change() {
		if (x === 1) {
				color = "#E0F2F1";
				x = 2;
		} else if (x === 2) {
				color = "#B2DFDB";
				x = 3;
		} else if (x === 3) {
				color = "#80CBC4";
				x = 4;
		} else if (x === 4) {
				color = "#4DB6AC";
				x = 5;
		} else if (x === 5) {
				color = "#26A69A";
				x = 6;
		} else if (x === 6) {
				color = "#009688";
				x = 7;
		} else if (x === 7) {
				color = "#00897B";
				x = 8;
		} else if (x === 8) {
				color = "#00796B";
				x = 9;
		} else if (x === 9) {
				color = "#00695C";
				x = 10;
		} else {
				color = "#004D40";
				x = 1;
		}
		document.body.style.background = color;
	}
})();
