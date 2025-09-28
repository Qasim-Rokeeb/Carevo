# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2024-08-02

### ✨ Features
- Add hover-reveal tooltip to footer social icons for better usability.
- Add keyboard shortcut "Ctrl + K" to open the language switcher.
- Implement an offline toast notification to inform users of connectivity status.
- Animate WhatsApp float button path using SVG stroke-dashoffset for a polished look.

### 🎨 Styling
- Apply a 1px translucent white inset shadow to cards for added depth.
- Swap the default system focus ring for a custom 2px brand-colored rounded outline.
- Implement a brand-pattern clip-path for section dividers.
- Add a sunrise/sunset tint to the background gradient based on local time.
- Add staggered entrance animation to footer links with a 0.05s delay each.

### 🐛 Fixes
- Remove the 100ms click delay on iOS by adding `touch-action: manipulation` to buttons.

### ♿ Accessibility
- Add `aria-expanded` & `aria-controls` to the mobile hamburger menu.

### ⚙️ Chore
- Bumped package versions for cache-busting.

## [1.0.0] - 2024-08-01

### ✨ Features
- Add cookie consent banner with graceful fade-in animation.
- Add "tap to copy" functionality for the phone number in the footer.
- Add an entrance animation to the WhatsApp floating badge for better visibility.

### 🎨 Styling
- Swap default focus ring for a custom rounded outline on interactive elements.
- Add a gradient overlay to the hero image to improve text legibility.
- Increase button font-weight to 600 for emphasis.
- Apply a subtle noise texture to the application background.

### ♻️ Refactors
- Convert the navigation bar to be sticky with a slide-down animation on scroll-up.

### 🐛 Fixes
- Remove the white flash on page load when in dark mode.
- Corrected several CSS parsing errors related to complex selectors in the charting components.

### ⚙️ Chore
- Formatted the entire codebase using Prettier and Stylelint for consistency.
