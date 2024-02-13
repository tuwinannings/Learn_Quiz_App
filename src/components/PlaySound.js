import React from 'react'
import useSound from 'use-sound';
import winSound from '../sounds/10coins1.mp3';
import loseSound from '../sounds/coinlose.mp3';

export default function PlaySound() {
    const [play, { stop }] = useSound(winSound);
    return (
        <div>
                <button onMouseEnter={play} onMouseLeave={stop}>
      <span role="img" aria-label="trumpet">
        🎺
      </span>
    </button>
        </div>
    )
}

