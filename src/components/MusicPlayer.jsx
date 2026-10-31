import { useEffect, useState } from "react";
import { audioManager } from "../utils/audioSynth";
export const MusicPlayer = () => {
 const [isPlaying,setIsPlaying]=useState(audioManager.isPlaying);
 useEffect(()=>audioManager.subscribe(setIsPlaying),[]);
 return <button className="pixel-music-player" onClick={()=>void audioManager.toggle()} aria-pressed={isPlaying} aria-label={isPlaying?"Tạm dừng nhạc":"Bật nhạc sinh nhật"}><img src={"/assets/crisp/icons/"+(isPlaying?"pause":"play")+".svg"} alt="" /><span><strong>Một chút nhạc dịu êm</strong><small>{isPlaying?"Đang phát · chạm để tạm dừng":"Đã tạm dừng · chạm để phát"}</small></span><span className={"music-notes "+(isPlaying?"playing":"")} aria-hidden="true">♫</span></button>;
};
