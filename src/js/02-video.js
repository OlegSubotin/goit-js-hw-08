import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const STORAGE_KEY = "videoplayer-current-time";
    
    player.on('timeupdate', throttle(onPlay, 1000));
    setCurrentTime();       
    
function onPlay(time) {
    localStorage.setItem(STORAGE_KEY, time.seconds.toString());
}

function setCurrentTime() {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    
    if (!savedTime) {
        return
    }

    player.setCurrentTime(savedTime);
}