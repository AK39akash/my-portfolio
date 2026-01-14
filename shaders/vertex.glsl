varying vec2 vUv;
uniform float time;
uniform float uFrequency;

void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Base distortion
    float distortion = sin(pos.x * 4.0 + time) * 0.1;
    
    // Sound reaction: spike outward based on frequency
    // We add more displacement when frequency is high
    float soundSpike = sin(pos.y * 10.0 + time * 2.0) * uFrequency * 0.5;
    
    // Apply normal displacement (move vertices along their normal)
    pos += normal * (distortion + soundSpike);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}