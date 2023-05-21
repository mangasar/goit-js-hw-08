!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds))}),1e3));var r=localStorage.getItem("videoplayer-current-time");null!==r&&t.setCurrentTime(r)}();
//# sourceMappingURL=02-video.ad626607.js.map
