window.onload = function () {
	var objectDesktop = document.createElement('object');
	objectDesktop.setAttribute('data', 'desktop.html');

	var objectMobile = document.createElement('object');
	objectMobile.setAttribute('data', 'mobile.html');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementsByTagName('body')[0].appendChild(objectMobile);
    } else {
        document.getElementsByTagName('body')[0].appendChild(objectDesktop);
    }
}