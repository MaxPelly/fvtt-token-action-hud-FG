# Token Action HUD - Fathomless Gears

> [!WARNING]
> **Alpha release.** `1.0.0-alpha` is the first Foundry v13/v14-compatible release of this module. It hasn't been tested against a live Foundry client yet (see below) - expect rough edges, and please report anything broken.

> [!IMPORTANT]
> **This module's Foundry v13/v14 compatibility update - including this readme - was implemented by an AI coding agent (Claude Code), not a human contributor.** Every change was reviewed step-by-step against the real `token-action-hud-core` and `fathomlessgears` source as work progressed, but **no live Foundry client was available to actually run the module during development**, so nothing here has been smoke-tested in a real game yet. Please test carefully before relying on it, and report anything unexpected via [Issues](https://github.com/MaxPelly/fvtt-token-action-hud-FG/issues).

Token Action HUD - Fathomless Gears is the [Token Action HUD](https://foundryvtt.com/packages/token-action-hud-core) integration for the [Fathomless Gears](https://github.com/MaxPelly/fathomlessgears) Foundry VTT system: a repositionable HUD of actions for a selected token, built around Fathomless Gears' attributes, internals, maneuvers, deep words, and utility actions.

![Token Action HUD](.github/readme/token-action-hud.gif)

# Features
- Roll attributes, use internals (weapons, active, passive), and trigger maneuvers or deep words directly from the HUD instead of opening the character sheet.
- Right-click an internal, maneuver, or deep word action to open its item sheet.
- Move the HUD and choose to expand the menus up or down.
- Unlock the HUD to customise layout and groups per user, and actions per actor.
- Quick access to Injury, Touch of the Deep, and Meltdown roll tables, narrative checks, and utility actions (weight totals, ballast tokens).

# Compatibility

|              | Foundry VTT | Fathomless Gears | Token Action HUD Core |
|--------------|-------------|-------------------|------------------------|
| **Minimum**  | 13.351      | 2.0.0              | 2.1.0                  |
| **Verified** | 14.368      | 2.0.0              | 2.1.2                  |

Foundry v12 is no longer supported as of this module's `1.0.0-alpha` release. If you're still running Fathomless Gears on Foundry v12, stay on this module's 0.6.x line.

# Installation

This module is bundled with the Fathomless Gears system, so most users won't need to install it separately.

## Method 1
1. On Foundry VTT's **Configuration and Setup** screen, go to **Add-on Modules**
2. Click **Install Module**
3. Search for **Token Action HUD FG**
4. Click **Install** next to the module listing

## Method 2
1. On Foundry VTT's **Configuration and Setup** screen, go to **Add-on Modules**
2. Click **Install Module**
3. In the Manifest URL field, paste: `https://github.com/MaxPelly/fvtt-token-action-hud-FG/releases/latest/download/module.json`
4. Click **Install** next to the pasted Manifest URL

## Required Modules

- [Token Action HUD Core](https://foundryvtt.com/packages/token-action-hud-core) - **required**.
- The [Fathomless Gears](https://github.com/MaxPelly/fathomlessgears) Foundry VTT system - **required**.

## Recommended Modules
Token Action HUD uses the [Color Picker](https://foundryvtt.com/packages/color-picker) library module for its color picker settings.

# Support

For a guide on using Token Action HUD, go to: [How to Use Token Action HUD](https://github.com/Larkinabout/fvtt-token-action-hud-core/wiki/How-to-Use-Token-Action-HUD)

For questions, feature requests, or bug reports specific to the Fathomless Gears integration, please open an issue [here](https://github.com/MaxPelly/fvtt-token-action-hud-FG/issues).

Pull requests are welcome. Please include a reason for the request or create an issue before starting one.

# License

This Foundry VTT module is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) and this work is licensed under [Foundry Virtual Tabletop EULA - Limited License Agreement for module development](https://foundryvtt.com/article/license/).
