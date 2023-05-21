const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds))}),1e3));const r=localStorage.getItem("videoplayer-current-time");null!==r&&t.setCurrentTime(r);
//# sourceMappingURL=02-video.7020c127.js.map
