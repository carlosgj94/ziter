function getPicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    });

    function onSuccess(imageURI) {
        var image = document.getElementById('picture');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Ocurrió un error: ' + message);
    }

}