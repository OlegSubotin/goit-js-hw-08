import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const KEY = "videoplayer-current-time";
    
    player.on('timeupdate', throttle(onPlay, 1000));
    setCurrentTime();       
    
function onPlay(time) {
    localStorage.setItem(KEY, time.seconds.toString());
}

function setCurrentTime(){
    player.setCurrentTime(localStorage.getItem(KEY));
}