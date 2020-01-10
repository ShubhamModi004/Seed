import React, { Component } from 'react';
import Video from '../assets/Video.mp4';
import { Player } from 'video-react';

// importing icons
import { MdPlayCircleOutline } from "react-icons/md";

import { PlayButton } from '../Common/Styles';
import '../Common/styles.css';


export default class PlayerControlExample extends Component {
    state = {
        played: false
    }
    playVideo = () => {
        this.refs.vidRef.play();
    }
    pauseVideo = () => {
        this.refs.vidRef.pause();
    }

    render() {
        const { source } = this.props;
        const { played } = this.state;
        return (
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 15 }}>
                <Player
                    ref={player => {
                        this.player = player;
                    }}
                    src={source}
                />
                {!played && (
                    <PlayButton onClick={() => {
                        this.setState({ played: true })
                        this.player.play()
                    }}>
                        <MdPlayCircleOutline style={{ marginTop: 5.9, marginLeft: 4.3 }} color='#fff' size={42} />
                    </PlayButton>
                )}
            </div>
        );
    }
}