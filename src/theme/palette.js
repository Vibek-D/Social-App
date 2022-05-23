export function themePalette(theme) {
  const { mode, palettes, grey } = theme;
  return {
    mode: theme.mode,
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
