---
name: Cybernetic Developer HUD
colors:
  surface: '#0a1322'
  surface-dim: '#0a1322'
  surface-bright: '#31394a'
  surface-container-lowest: '#060e1d'
  surface-container-low: '#131c2b'
  surface-container: '#17202f'
  surface-container-high: '#222a3a'
  surface-container-highest: '#2c3545'
  on-surface: '#dae2f8'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dae2f8'
  inverse-on-surface: '#283141'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#d8ffe7'
  on-tertiary: '#003824'
  tertiary-container: '#65f2b5'
  on-tertiary-container: '#006d4a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0a1322'
  on-background: '#dae2f8'
  surface-variant: '#2c3545'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: 0em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.06em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system embodies a tactical sci-fi command deck designed for engineers, security researchers, and creative technologists. It bridges terminal-era precision with futuristic telemetry displays, evoking feelings of mastery, technical sophistication, and high-performance computing.

The aesthetic fuses **Cyberpunk HUD interface design** with **refined glassmorphism**:
- **Tactical Telemetry:** Information is framed with diagnostic metadata (e.g., indices like `// 01.`, status indicators, pulse dots, and bracketed corner accents).
- **Luminous Energy:** Electric cyan and sky-blue glows pierce deep space backgrounds to signal interactive focal points and active system states.
- **Precision Glass:** Translucent dark panels with micro-borders allow faint grid textures and planetary wireframes to permeate beneath structured data cards.
- **Developer Utilitarianism:** Monospace notation, terminal log sidebars, and execution command inputs integrate the utility of a CLI inside a high-end visual workspace.

## Colors

The palette operates on extreme contrast between deep void substrates and high-luminance photon emissions:

- **Primary (`#00f0ff`):** The primary neon cyan. Reserved for active navigational states, primary calls-to-action, glowing progress trackers, focused outline accents, and terminal cursor signals.
- **Secondary (`#38bdf8`):** Electric sky blue. Serves as ambient light, subheaders, category pills, borders, and secondary telemetry accents.
- **Tertiary (`#10b981`):** Telemetry green. Applied exclusively for live system diagnostics, uptime status signals (`AVAILABLE FOR WORK`), and affirmative terminal logs.
- **Neutral Substrates (`#050b14`, `#081120`, `#0b1a2f`):** Multi-tier dark navy and slate base. `#050b14` establishes the infinite canvas, while `#081120` and `#0b1a2f` define translucent card hulls.
- **Text Tiers:**
  - High-emphasis: `#ffffff` for core titles and key metrics.
  - Mid-emphasis: `#94a3b8` (Slate-400) for running copy and metadata descriptions.
  - Low-emphasis: `#00f0ff` at 50% opacity or `#475569` for framing brackets, line numbers, and comment decorators (`//`).

## Typography

The typographic hierarchy pairs the geometric edge of **Space Grotesk** with the strict, algorithmic clarity of **JetBrains Mono**.

- **Display & Headings:** Set in Space Grotesk. Section headers always integrate accented colored spans (`Hi; I'm [Karthikeyan_]`) to create instant technical identity.
- **HUD Metadata & Labels:** All telemetry markers, code snippets, status monitors, indexes, command bars, and navigation chips are rendered in uppercase or syntax-coded JetBrains Mono.
- **Syntax Prefixes:** Section titles must consistently begin with pseudo-comment prefixes such as `// 01. ABOUT ME` or `// 02. FEATURED PROJECTS` using uppercase `label-md` in cyan (`#00f0ff`).

## Layout & Spacing

This design system uses an anchored HUD viewport grid designed for cockpit clarity:

- **Desktop Layout:** 
  - **Fixed Telemetry Left Dock:** 80px to 100px width housing system logos, primary module icons, mini-terminal logs, and external channel icons.
  - **Top Navigation Banner:** 48px to 56px height displaying active path breadcrumbs (`KARTHIKEYAN.DEV | > PROJECTS`), live status beacons (`STATUS: AVAILABLE`), and UTC system clocks.
  - **Bottom Command Line:** 52px sticky terminal bar with prompt indicator (`> Type a command...`) and actionable trigger buttons (`EXECUTE`).
  - **Central Main Canvas:** 12-column modular grid using `gutter-lg` (1.5rem) containing multi-card analytical layouts.
- **Mobile Reflow:**
  - Dock transitions into a persistent floating bottom navigation pill or a top hamburger drawer.
  - The bottom command line is collapsible or fixed behind an interactive launcher icon.
  - Central grid collapses to a 1-column fluid stacked sequence with `margin` (1rem) safe areas.

## Elevation & Depth

Visual depth is achieved through optical luminescence rather than physical drop shadows:

- **Layer 0 (Canvas Base):** Deep hex `#050b14` overlaid with an ultra-subtle coordinate grid (`rgba(0, 240, 255, 0.03)` 32px mesh).
- **Layer 1 (Modular Panels):** Glassmorphic surfaces using background `#081120` at 70% opacity, `backdrop-filter: blur(16px)`, and 1px perimeter border of `rgba(0, 240, 255, 0.15)`.
- **Layer 2 (Interactive Floating Surfaces & Hover Cards):** Surface elevated to `rgba(11, 26, 47, 0.85)` with active border `rgba(0, 240, 255, 0.45)` and ambient photon glow: `box-shadow: 0 0 20px rgba(0, 240, 255, 0.15), inset 0 0 12px rgba(0, 240, 255, 0.05)`.
- **Layer 3 (Active Focus & Cursor Nodes):** Intense glow applied to active tab badges, telemetry progress pins, and execute buttons: `box-shadow: 0 0 15px #00f0ff, 0 0 30px rgba(0, 210, 255, 0.4)`.
- **HUD Target Brackets:** Select hero modules use 90-degree corner crosshair brackets (`4px` length, `1.5px` border width in `#00f0ff`) positioned at card edges to simulate HUD reticles.

## Shapes

The design uses balanced, modern sci-fi corners (0.5rem / 8px for standard containers; 0.75rem / 12px for primary feature cards). 

- Standard cards, terminal logs, input boxes, and action containers adopt `roundedness: 2` (8px), avoiding aggressive curves in favor of structural panels.
- Filter chips, status pills, and small telemetry badges utilize pill silhouettes (`rounded-full` / `9999px`) to maintain optical separation from rectangular containers.
- HUD corner brackets maintain strict 90-degree outer borders to accentuate the tactical computing aesthetic.

## Components

### Buttons & Action Bars
- **Primary Cyber Button:** Background `rgba(0, 240, 255, 0.1)`, 1px border `rgba(0, 240, 255, 0.8)`, text `#00f0ff`, `label-lg` uppercase tracking. On hover: background `#00f0ff`, text `#050b14`, and bright cyan glow (`box-shadow: 0 0 18px rgba(0, 240, 255, 0.6)`).
- **HUD Reticle Button:** Bounded by corner brackets (`> VIEW MY WORK <`).
- **Command Execute Action:** Solid high-contrast block on the terminal bar with monospaced label `EXECUTE`.

### Telemetry Badges & Chips
- **Status Pills:** Translucent background (`rgba(16, 185, 129, 0.1)`), green border (`#10b981`), pulsating glowing dot, uppercase `label-sm` text.
- **Filter Chips:** Inactive chips feature border `rgba(56, 189, 248, 0.2)` with slate typography; active chips feature vibrant `#00f0ff` fill with dark ink text.

### HUD Cards & Panels
- **Telemetry Shell Card:** 1px border `rgba(0, 240, 255, 0.15)`, top header preceded by cyan index markers (`// 02. MY PROJECTS`), body content with optional code-bracket frames.
- **Metric Micro-Card:** Compact tiles displaying large Space Grotesk metrics (`15+`, `100%`) alongside mono labels (`Projects Built`).

### Form Elements & Command Inputs
- **Command Terminal Input:** Bottom bar input with permanent prompt prefix (`> `) in neon cyan, blinking terminal cursor (`_`), monospaced placeholder text in `#475569`, and transparent background.
- **Glass Text Inputs:** Form fields with `rgba(8, 17, 32, 0.6)` backgrounds, 1px border `rgba(56, 189, 248, 0.2)`, leading mono icons, and active focus state illuminating with a 1px border of `#00f0ff` and subtle interior glow.

### Skills & Telemetry Meters
- **Cyan Energy Sliders:** Track line `2px` tall in `rgba(0, 240, 255, 0.15)`, filled with electric cyan `#00f0ff`, capped with a glowing bead thumb (`box-shadow: 0 0 8px #00f0ff`), accompanied by a right-aligned percentage in `JetBrains Mono`.
- **Dot Matrix Ratings:** Row of 5 discrete status pips (e.g., for soft skills) glowing cyan for proficient units and dim navy (`rgba(0, 240, 255, 0.15)`) for remaining units.

### Mini Terminal Console
- Fixed bottom-left dock containing real-time stream logs (`> Loading skills...`, `> Skills loaded successfully ✓`), colored green and cyan with a miniature window control cluster (`- □ ×`).