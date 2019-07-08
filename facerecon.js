(function(){
    var video = document.getElementById("video"),
        canvas=document.getElementById("canvas"),
        context=canvas.getContext("2d"),
        photo = document.getElementById("photo"),
        vendorUrl= window.URL || window.webkitURL;
    
    navigator.getMedia= navigator.getUserMedia ||
        navigator.webkitUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
    navigator.getMedia({
      video: true,
      audio: false
  }, function(stream) {
      video.src= vendorUrl.createObjectURL(stream);
  }, function(error) {
      // an error occoured
      //error.code
  }) ;
    
    document.getElementById("capture").addEventListener("click", function() {
      context.drawImage(video,0 ,0, 400, 400);
      photo.setAttribute("src", canvas.toDataURL("image/jpg"));
  });
});