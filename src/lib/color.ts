function hexToRgb(hex) {
  const hexColorRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
  const result = hexColorRegex.exec(hex)
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
}

function brightness({ r, g, b }) {
  return +((r * 299 + g * 587 + b * 114) / 255000).toFixed(2)
}

export function getConstratColor(hex: string): string {
  const brightnessThreshold = 0.69
  const rgb = hexToRgb(hex);

  if (brightness(rgb) <= brightnessThreshold) {
    return 'white';
  } else {
    return 'black';
  }
}
