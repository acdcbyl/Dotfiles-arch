#iChannel0 "file:///Users/asherwin/.config/ghostty/myshaders/screen2.png"


// [SH17A] Matrix rain. Created by Reinder Nijhoff 2017
// Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
// @reindernijhoff
//
// https://www.shadertoy.com/view/ldjBW1
//

#define R fract(1e2*sin(p.x*8.+p.y))

// this works on shadertoy site
// void mainImage(out vec4 fragColor, vec2 fragCoord) {
//     vec3 v = vec3(fragCoord, 1) / iResolution - .5;
//     vec3 s = .5 / abs(v);
//     vec3 i = ceil(8e2*(s.z=min(s.y,s.x))*(s.y<s.x?v.xzz:v.zyz));
//     vec3 j = fract(i*=.1);
//     vec3 p = vec3(9,int(iTime*(9.+8.*sin(i-=j).x)),0)+i;
//     fragColor -= fragColor;
//     fragColor.g = R / s.z;
//     p *= j;
//     fragColor *= R >.5 && j.x < .6 && j.y < .8 ? 1. : 0.;
// }

void mainImage(out vec4 fragColor, vec2 fragCoord) {
    vec3 v = vec3(fragCoord, 1) / iResolution - .5;
    vec3 s = .5 / abs(v);
    vec3 i = ceil(8e2*(s.z=min(s.y,s.x))*(s.y<s.x?v.xzz:v.zyz));
    vec3 j = fract(i*=.1);
    vec3 p = vec3(9,int(iTime*(9.+8.*sin(i-=j).x)),0)+i;
    vec3 col = fragColor.rgb;
    col -= col;
    col.g = R / s.z;
    p *= j;
    col *= R >.5 && j.x < .6 && j.y < .8 ? 1. : 0.;

  	// Sample the terminal screen texture including alpha channel
    vec2 uv = fragCoord.xy / iResolution.xy;
  	vec4 terminalColor = texture(iChannel0, uv);
  
  	// Combine the matrix effect with the terminal color
  	// vec3 blendedColor = terminalColor.rgb + col;

    // Make a mask that is 1.0 where the terminal content is not black
    float mask = 1.2 - step(0.5, dot(terminalColor.rgb, vec3(1.0)));
    vec3 blendedColor = mix(terminalColor.rgb * 1.2, col, mask);

    fragColor = vec4(blendedColor, terminalColor.a);
}
