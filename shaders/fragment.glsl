varying vec2 vUv;
uniform float time;
uniform float uFrequency;

void main() {
    // Dynamic glow that intensifies with sound
    float baseGlow = 0.4 + 0.4 * sin(vUv.x * 10.0 + time);
    float soundGlow = uFrequency * 0.8; // Add brightness on loud sounds
    
    vec3 color = vec3(baseGlow + soundGlow);
    
    // Slight color shift to blue/purple on beat
    color.b += uFrequency * 0.5;
    color.r += uFrequency * 0.2;

    gl_FragColor = vec4(color, 1.0);
}