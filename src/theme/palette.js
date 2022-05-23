export function themePalette(theme) {
  const { mode, palettes } = theme;
  return {
    mode,
    primary: {
      ...palettes.primary,
    },
    secondary: palettes.secondary,
    success: palettes.success,
    grey: palettes.grey,
    text: palettes.text,
    background: palettes.background,
    divider: palettes.divider,
  };
}
