# Milliman Design System Carbon v11 tokens

Translates Milliman Design System Carbon v10 tokens into their corresponding Carbon v11 tokens.

_App.scss_ - Milliman theme

```scss
@use '@carbon/themes' with (
  $theme: (
    button-primary: $vibrantBlue,
    background-brand: $vibrantBlue,
    button-secondary: $charcoal,
    button-tertiary: #004D87,
    border-interactive: #0080E2,
    interactive: #0080E2,
    ....
```

_App.playground.scss_ - Translation details - not imported into App.test

```scss
// Hex conversion
@use '@carbon/themes' with (
  $theme: (
  // interactive-01: #005A9E,
  button-primary: #005A9E,
  background-brand: #005A9E,
  // interactive-02: #39414D,
  button-secondary: #39414D,
  // interactive-03: #004D87,
  button-tertiary: #004D87,
  // interactive-04: #0080E2,
  border-interactive: #0080E2,
    ....
```

_App.playground.scss_ is intended as a reference for integration into the Milliman Design Repository.