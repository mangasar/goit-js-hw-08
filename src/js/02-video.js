const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('timeupdate', throttle(onPlay, 1000));


    function onPlay(data) {
        localStorage.setItem(
          'videoplayer-current-time',
          JSON.stringify(data.seconds)
        );
      }

      const currentTime = localStorage.getItem('videoplayer-current-time');

      if (currentTime !== null) {
        player.setCurrentTime(currentTime);
      }