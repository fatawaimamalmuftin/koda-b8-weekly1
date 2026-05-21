# Collaborative Terminal Temperature Converter

This repository serves as a collaborative workspace for building a Node.js interactive terminal application. The app will convert temperatures between Celsius (C), Kelvin (K), Rankine (R), and Fahrenheit (F).

## Purpose

Practice collaborative Git workflows, semantic versioning, semantic commits, branch naming conventions, and pull request reviews while building a functional CLI tool.

## Formulas for Temperature Conversion

All conversions use these formulas:

### From Celsius (C)
- **C to K**: `K = C + 273.15`
- **C to R**: `R = (C + 273.15) × 9/5`
- **C to F**: `F = (C × 9/5) + 32`

### From Kelvin (K)
- **K to C**: `C = K - 273.15`
- **K to R**: `R = K × 9/5`
- **K to F**: `F = (K - 273.15) × 9/5 + 32`

### From Rankine (R)
- **R to C**: `C = (R - 491.67) × 5/9`
- **R to K**: `K = R × 5/9`
- **R to F**: `F = R - 459.67`

### From Fahrenheit (F)
- **F to C**: `C = (F - 32) × 5/9`
- **F to K**: `K = (F - 32) × 5/9 + 273.15`
- **F to R**: `R = F + 459.67`

## Constraints for Collaboration

To keep the repository organized and avoid conflicts, follow these rules strictly.

### 1. Versioning (SemVer)
We use **Semantic Versioning 2.0.0** (`MAJOR.MINOR.PATCH`):
- **MAJOR** – Breaking changes (e.g., changing input/output structure)
- **MINOR** – New functionality (e.g., adding a new conversion direction)
- **PATCH** – Bug fixes, documentation, or non-functional changes

The maintainer will update `version` in `package.json` before merging.

### 2. Commit Messages (Semantic Commit)
Use this format:
```
<type>(<scope>): <short description>
```

**Allowed types**:  
`feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Scope examples**: `cli`, `converter`, `input`, `output`, `README`

Examples:  
- `feat(converter): add C to F conversion`  
- `fix(cli): handle negative temperature input`  
- `docs(readme): add formula for R to K`

### 3. Branch Names (Semantic Branch)
Use this format:
```
<type>/<short-description>
```

Examples:  
- `feat/c-to-f-conversion`  
- `fix/input-validation`  
- `docs/update-readme-formulas`

### 4. Workflow for Collaborators

1. **Pick a task** from the "Tasks to Work On" section below.
2. **Create a branch** from `development` using semantic branch naming.
3. **Write code** with clear comments. No external dependencies unless approved.
4. **Commit** using semantic commit messages. Keep commits focused.
5. **Push** and **open a Pull Request (PR)** against `development`.
6. **Ensure no merge conflicts** – rebase your branch onto latest `development` if needed.
7. Wait for manual review. The maintainer will test and merge if ready.

### 5. Pull Request Rules

- PR title must be a semantic commit summary.
- PR description must include:  
  - What conversion(s) were added/fixed  
  - Example usage (input → output)  
  - Screenshot of terminal output (optional but helpful)
- No merge conflicts allowed. You must resolve them locally before opening PR.
- One PR = one logical change (e.g., one conversion direction or one fix).
- Do not modify `package.json` version – maintainer handles that.

## Tasks to Work On

Pick any unclaimed task. Open a draft PR early to signal intent.

### Core Logic (converter functions)
- [ ] `celsiusToKelvin(value)`
- [ ] `celsiusToRankine(value)`
- [ ] `celsiusToFahrenheit(value)`
- [ ] `kelvinToCelsius(value)`
- [ ] `kelvinToRankine(value)`
- [ ] `kelvinToFahrenheit(value)`
- [ ] `rankineToCelsius(value)`
- [ ] `rankineToKelvin(value)`
- [ ] `rankineToFahrenheit(value)`
- [ ] `fahrenheitToCelsius(value)`
- [ ] `fahrenheitToKelvin(value)`
- [ ] `fahrenheitToRankine(value)`

### Interactive CLI (Node.js terminal)
- [ ] Parse user input (e.g., `25 C to F`)
- [ ] Prompt for source unit and value
- [ ] Prompt for target unit
- [ ] Display result with proper rounding
- [ ] Handle invalid inputs gracefully

**Do not commit changes to `package.json`** unless you are fixing a typo in `description` or `keywords`. Version updates are maintainer-only.

## Getting Started (after maintainer adds package.json)

1. Clone the repo
2. Run `npm install` (if any dependencies are added later)
3. Run `npm start` to launch the interactive terminal
