#iChannel0 "file:///Users/asherwin/.config/ghostty/myshaders/screen2.png"

#define BLACK_BLEND_THRESHOLD .99

vec3 BLOCK_COLOR1 = vec3(1.0, 0.0, 0.0);
vec3 BG_COLOR2 = vec3(0.0, 1.0, 0.0);

// vec3 COLOR1 = vec3(0.0, 0.0, 0.3);
// vec3 COLOR2 = vec3(0.5, 0.0, 0.0);
float BLOCK_WIDTH = 0.01;

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
	vec2 uv = fragCoord.xy / iResolution.xy;
	
	// To create the BG pattern
	vec3 final_color = vec3(1.0);
	vec3 bg_color = vec3(0.0);
	vec3 wave_color = vec3(0.0);
	
	float c1 = mod(uv.x, 2.0 * BLOCK_WIDTH);
	c1 = step(BLOCK_WIDTH, c1);
	
	float c2 = mod(uv.y, 2.0 * BLOCK_WIDTH);
	c2 = step(BLOCK_WIDTH, c2);
	
	// To create the waves
	float wave_width = 0.01;
	uv = -1.0 + (2.0 * uv);
	uv.y += 0.1;
	for(float i = 0.0; i < 8.0; i++) {
		
		uv.y += (0.2 * sin(uv.x + i / 10.0 + iTime ));
		wave_width = abs(1.0 / (150.0 * uv.y));
		wave_color += vec3(wave_width * 2.9, wave_width * 2.0, wave_width * 1.0);
	}
	
	final_color = wave_color;

  vec2 termUV = fragCoord.xy / iResolution.xy;
  vec4 terminalColor = texture(iChannel0, termUV);

  final_color *= 0.5;

  float alpha = step(length(terminalColor.rgb), BLACK_BLEND_THRESHOLD);
  vec3 blendedColor = mix(terminalColor.rgb, final_color, alpha);
  
  fragColor = vec4(blendedColor, terminalColor.a);

}