function addScript(src) {
	const script = document.createElement('script');
	script.src = src;
	script.async = false;
	document.head.appendChild(script);
}
function clearHTML(...ns) {
	[...ns].forEach(n => document.querySelector(n).remove());
}

addScript('images/logotype.js');
addScript('images/background.js');
addScript('images/preloader.js');
addScript('images/updateIcon.js');
clearHTML('script');
