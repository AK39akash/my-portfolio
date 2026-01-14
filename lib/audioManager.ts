class AudioManager {
    audioContext: AudioContext | null = null;
    analyser: AnalyserNode | null = null;
    source: MediaElementAudioSourceNode | null = null;
    dataArray: Uint8Array | null = null;
    audioElement: HTMLAudioElement | null = null;

    initialize() {
        if (this.audioContext) return;

        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 256; // Defines data resolution
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

        // Create an audio element for music
        this.audioElement = new Audio('/music/demo.mp3'); // We'll need a demo track or use mic
        this.audioElement.loop = true;
        this.audioElement.crossOrigin = "anonymous";
        
        // Connect source -> analyser -> destination
        this.source = this.audioContext.createMediaElementSource(this.audioElement);
        this.source.connect(this.analyser);
        this.analyser.connect(this.audioContext.destination);
    }

    // Alternative: Use Microphone
    async useMicrophone() {
        if (this.audioContext) {
             if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }
             return; 
        }

        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 256;
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const source = this.audioContext.createMediaStreamSource(stream);
            source.connect(this.analyser);
            // Note: Don't connect mic to destination (speakers) to avoid feedback loop
        } catch (err) {
            console.error("Microphone access denied", err);
        }
    }

    getFrequencyData() {
        if (!this.analyser || !this.dataArray || !this.audioContext || this.audioContext.state === 'suspended' || this.audioContext.state === 'closed') return 0;
        this.analyser.getByteFrequencyData(this.dataArray as any);
        
        // Calculate average frequency
        let sum = 0;
        for (let i = 0; i < this.dataArray.length; i++) {
            sum += this.dataArray[i];
        }
        return sum / this.dataArray.length; // Returns 0-255 average
    }
}

export const audioManager = new AudioManager();
