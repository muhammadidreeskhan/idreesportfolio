interface FontConfig {
  family: string;
  weights: string[];
  display?: string;
}

export const preloadFonts = () => {
  // Configure fonts with Google Fonts
  const fonts: FontConfig[] = [
    {
      family: 'Inter',
      weights: ['400', '500', '600', '700'],
      display: 'swap'
    }
  ];

  // Add Google Fonts stylesheet
  const googleFontsUrl = fonts
    .map(font => {
      const weights = font.weights.join(',');
      return `family=${font.family.replace(/\s+/g, '+')}:wght@${weights}`;
    })
    .join('&');

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?${googleFontsUrl}&display=swap`;
  document.head.appendChild(link);

  // Add font-display CSS
  const style = document.createElement('style');
  style.textContent = fonts
    .map(font => `
      @font-face {
        font-family: '${font.family}';
        font-display: ${font.display || 'swap'};
      }
    `)
    .join('\n');
  document.head.appendChild(style);
};
