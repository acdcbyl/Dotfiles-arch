#iChannel0 "file:///Users/asherwin/.config/ghostty/myshaders/screen2.png"

void mainImage(out vec4 fragColor, vec2 fragCoord) {
  vec2 uv = fragCoord.xy / iResolution.xy;
  vec4 terminalColor = texture(iChannel0, uv);
  fragColor = terminalColor;
}
