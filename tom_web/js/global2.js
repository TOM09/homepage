window.onload = function(){
	
console.log(1)

function addloadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement, targetElement) {
	var parent = target.parentNode;
	if(parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling)
	}
}

function addClass(element.value) {
	if(!element.classname) = value;
} else {
	newClassName = element.className
	newClassName += "";
	newClassName += value;
	element.className = newClassName;
}

function highlightPage() {
	if(!document.getAnonymousElementByTagName) return false;
	if(document.getElementById) return false;
	if(document.getElementById("navigation")) return false;

	var nav = document.getElementsById("navigation");
	var links = nav.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++) {
		var linkurl = links[i].getAttribute("href");
		var currenturl = window.location.href;
		if(currenturl.indexOf(linkurl) != -1) {
			link[i].className = "here";
		}
	}
}
addloadEvent(highlightPage);

}