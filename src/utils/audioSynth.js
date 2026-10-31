/**
 * Audio Manager: Hỗ trợ phát file MP3 thực tế,
 * và tích hợp sẵn bộ tổng hợp giai điệu Music Box (Web Audio API)
 * để trang web luôn có nhạc du dương ngay cả khi chưa kịp bỏ file MP3 vào!
 */

class BirthdayAudioManager {
  constructor() {
    this.audioElement = null;
    this.audioContext = null;
    this.isPlaying = false;
    this.isUsingSynth = false;
    this.synthLoopTimer = null;
    this.listeners = new Set();
  }

  init(musicSrc) {
    if (this.audioElement) return;

    this.audioElement = new Audio(musicSrc);
    this.audioElement.loop = true;
    this.audioElement.preload = "auto";

    // Khi bài nhạc kết thúc hoặc có sự kiện
    this.audioElement.addEventListener("play", () => {
      this.isPlaying = true;
      this.notifyListeners();
    });

    this.audioElement.addEventListener("pause", () => {
      this.isPlaying = false;
      this.notifyListeners();
    });

    this.audioElement.addEventListener("error", (e) => {
      console.warn("Không thể tải file MP3, tự động chuyển sang giai điệu Music Box tích hợp sẵn 🎵", e);
      this.isUsingSynth = true;
    });
  }

  // Đăng ký listener để cập nhật state trong React
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notifyListeners() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  async play() {
    if (this.isPlaying) return;

    // Ưu tiên phát file MP3 nếu có
    if (this.audioElement && !this.isUsingSynth) {
      try {
        await this.audioElement.play();
        this.isPlaying = true;
        this.notifyListeners();
        return;
      } catch (err) {
        console.warn("Trình duyệt chặn autoplay hoặc file MP3 lỗi:", err.message);
        // Fallback sang synth
        this.startMusicBoxSynth();
        return;
      }
    }

    // Nếu chuyển sang Synth
    this.startMusicBoxSynth();
  }

  pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.synthLoopTimer) {
      clearTimeout(this.synthLoopTimer);
      this.synthLoopTimer = null;
    }
    this.isPlaying = false;
    this.notifyListeners();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  // Giai điệu "Happy Birthday to You" du dương phong cách Music Box / Glockenspiel
  startMusicBoxSynth() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!this.audioContext) {
        this.audioContext = new AudioCtx();
      }

      if (this.audioContext.state === "suspended") {
        this.audioContext.resume();
      }

      this.isPlaying = true;
      this.notifyListeners();
      this.playBirthdayNotesSequence();
    } catch (e) {
      console.error("Web Audio API không khả dụng:", e);
    }
  }

  playBirthdayNotesSequence() {
    if (!this.isPlaying) return;

    // Giai điệu Happy Birthday (Tần số Hz và độ dài nốt)
    // C4=261.63, D4=293.66, E4=329.63, F4=349.23, G4=392.00, A4=440.00, B4=493.88, C5=523.25
    const notes = [
      { f: 392.00, d: 0.35, pause: 0.1 }, // Sol
      { f: 392.00, d: 0.35, pause: 0.1 }, // Sol
      { f: 440.00, d: 0.7,  pause: 0.1 }, // La
      { f: 392.00, d: 0.7,  pause: 0.1 }, // Sol
      { f: 523.25, d: 0.7,  pause: 0.1 }, // Đố
      { f: 493.88, d: 1.2,  pause: 0.3 }, // Si

      { f: 392.00, d: 0.35, pause: 0.1 }, // Sol
      { f: 392.00, d: 0.35, pause: 0.1 }, // Sol
      { f: 440.00, d: 0.7,  pause: 0.1 }, // La
      { f: 392.00, d: 0.7,  pause: 0.1 }, // Sol
      { f: 587.33, d: 0.7,  pause: 0.1 }, // Rế
      { f: 523.25, d: 1.2,  pause: 0.3 }, // Đố

      { f: 392.00, d: 0.35, pause: 0.1 }, // Sol
      { f: 392.00, d: 0.35, pause: 0.1 }, // Sol
      { f: 783.99, d: 0.7,  pause: 0.1 }, // Sol cao
      { f: 659.25, d: 0.7,  pause: 0.1 }, // Mí
      { f: 523.25, d: 0.7,  pause: 0.1 }, // Đố
      { f: 493.88, d: 0.7,  pause: 0.1 }, // Si
      { f: 440.00, d: 1.0,  pause: 0.3 }, // La

      { f: 698.46, d: 0.35, pause: 0.1 }, // Phá
      { f: 698.46, d: 0.35, pause: 0.1 }, // Phá
      { f: 659.25, d: 0.7,  pause: 0.1 }, // Mí
      { f: 523.25, d: 0.7,  pause: 0.1 }, // Đố
      { f: 587.33, d: 0.7,  pause: 0.1 }, // Rế
      { f: 523.25, d: 1.6,  pause: 0.6 }, // Đố kéo dài
    ];

    let totalDelay = 0;
    const now = this.audioContext.currentTime;

    notes.forEach((item) => {
      this.scheduleNote(item.f, now + totalDelay, item.d);
      totalDelay += item.d + item.pause;
    });

    // Lặp lại sau khi hết bài
    this.synthLoopTimer = setTimeout(() => {
      if (this.isPlaying) {
        this.playBirthdayNotesSequence();
      }
    }, totalDelay * 1000 + 1500);
  }

  // Tạo nốt nhạc kiểu tiếng chuông hộp âm nhạc (Music Box / Celesta)
  scheduleNote(frequency, startTime, duration) {
    if (!this.audioContext) return;

    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    // Sóng sin kết hợp triangle tạo độ trong trẻo, êm dịu
    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, startTime);

    // Envelope tiếng gõ chuông êm
    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.18, startTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  }
}

export const audioManager = new BirthdayAudioManager();
