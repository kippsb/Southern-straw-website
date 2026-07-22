# Southern Straw Brand Guide
**For use with Claude Code and any AI-assisted development**

---

## Who We Are

Southern Straw is a Low Country landscaping company that does one thing exceptionally well: laying pine straw and ground cover across residential and commercial properties in coastal South Carolina. We are not a full-service lawn company. We are specialists. Our work is physical, seasonal, seasonal-smelling, and deeply rooted in the Lowcountry's landscape: live oaks, sandy soil, hot light, and the particular warmth of fresh pine straw in the afternoon sun.

Our customers are homeowners who care about curb appeal, HOA managers, and property developers who want their landscapes to look cared-for year-round. They value reliability and craft over flash.

---

## Voice

**The analogy:** Southern Straw speaks the way a good contractor does: confident, plain, no upselling. Not salesy. Not corporate. Not precious. If a knowledgeable neighbor who lays straw for a living told you what you needed to know, that's the voice.

### Principles

**Plain and direct.** Use short sentences. Say what the thing does. Avoid filler words like "comprehensive," "solutions," "world-class," or "seamless." Nobody who lays straw for a living talks that way.

**Warm, not folksy.** The Low Country has a distinctive culture and we live in it. We don't perform it. No forced Southern charm, no "y'all" unless it's a natural fit, no overuse of regional color. The warmth comes through in confidence and ease, not affectations.

**Grounded in the work.** We can talk about soil, drainage, bale counts, coverage estimates, and seasonal timing because we actually know these things. Specificity is more trustworthy than enthusiasm.

**Never salesy.** We don't push. We inform. The customer came to us. We explain what they need and let the work speak.

**No em dashes, ever.** Never use an em dash (—) anywhere in site copy, code comments, documentation, or any written material for this brand. Use a period, comma, or colon instead, or restructure the sentence. Em dashes read as AI-generated filler and undercut the plain, direct voice.

### Voice Examples

| Don't write | Write instead |
|---|---|
| "Comprehensive ground cover solutions" | "Pine straw laid right, the first time." |
| "We'd love to help transform your landscape!" | "We'll give you an honest estimate, usually within 24 hours." |
| "Our team of experts is standing by" | "We show up when we say we will." |
| "Elevate your curb appeal today" | "Fresh straw makes a yard look cared for." |

### Tone by Context

- **Website headlines:** Bold, spare, factual. One strong claim per section.
- **Service descriptions:** Direct. Cover what's included, what's not, and why it matters.
- **Calls to action:** Low-pressure. "Get an estimate" over "Book now!" We're not selling concert tickets.
- **Error or empty states:** Matter-of-fact. "No jobs scheduled yet" not "Looks like you're all clear!"

---

## Color Palette

The palette draws from the literal materials and light of the Low Country: pine straw gold, sandy soil, deep shade under the live oaks, and the gray-green of Spanish moss. No bright greens, no artificial landscape colors.

| Name | Hex | Use |
|---|---|---|
| **Straw Gold** | `#C8983A` | Primary brand color. Headlines, accents, CTAs. The color of dry pine straw in afternoon light. |
| **Deep Canopy** | `#1E2B1F` | Primary dark. Backgrounds (dark mode), text on light. Near-black with green undertone, the shade under a live oak. |
| **Sandy Loam** | `#F0E9DC` | Light background. Off-white with a warm, earthy cast. Never pure white. |
| **Spanish Moss** | `#8A9B7E` | Secondary / supporting. Muted sage green. Used for secondary text, borders, subtle accents. |
| **Bark Brown** | `#5C3D1E` | Tertiary accent. Grounding color for borders, hover states, footer backgrounds. Deep pine bark. |
| **Fog White** | `#FAF8F4` | Surface white. Card backgrounds, input fields. Slightly warmer than Sandy Loam. |

### Usage Rules

- **Straw Gold** on **Deep Canopy** is the signature pairing. Use for hero sections and primary CTAs.
- Never put **Straw Gold** on **Sandy Loam**: insufficient contrast.
- **Spanish Moss** is a supporting player, never a hero color.
- Avoid pure `#FFFFFF` or `#000000` anywhere. The brand lives in the warmth between those extremes.

---

## Typography

The type system pairs a workhorse serif, the kind you'd find on a well-made seed catalog or a county agricultural extension pamphlet, with a clean, utilitarian sans for body and UI. Nothing trendy. Nothing that will feel dated in three years.

### Typefaces

**Display / Heading: Playfair Display**
- Source: Google Fonts (`https://fonts.google.com/specimen/Playfair+Display`)
- Weights used: 700 (Bold) only
- Character: A high-contrast serif with Southern editorial weight. Use for page titles, section headers, and hero copy only. Do not use at small sizes.
- Setting: Tracked slightly tighter than default (`letter-spacing: -0.01em` at large sizes)

**Body / UI: DM Sans**
- Source: Google Fonts (`https://fonts.google.com/specimen/DM+Sans`)
- Weights used: 400 (Regular), 500 (Medium), 600 (SemiBold)
- Character: Clean, geometric, unpretentious. Used for all body copy, navigation, labels, buttons, and form fields.
- Setting: Comfortable line height (`1.6` for body, `1.3` for UI elements)

### Type Scale

| Role | Face | Size | Weight | Color |
|---|---|---|---|---|
| H1 (Page title) | Playfair Display | 3rem–4rem | 700 | Deep Canopy or Fog White |
| H2 (Section title) | Playfair Display | 2rem–2.5rem | 700 | Deep Canopy |
| H3 (Subsection) | DM Sans | 1.25rem | 600 | Deep Canopy |
| Body | DM Sans | 1rem | 400 | Deep Canopy |
| Caption / Label | DM Sans | 0.8125rem | 500 | Spanish Moss |
| Button | DM Sans | 0.9375rem | 600 | N/A (see buttons) |
| Nav | DM Sans | 0.9375rem | 500 | Deep Canopy |

### Do Not Use

- Script or handwritten fonts: they undercut the craft-over-charm positioning
- All-caps body copy
- More than two typefaces
- Em dashes in any copy, anywhere

---

## Buttons and UI Elements

**Primary CTA:**
- Background: `Straw Gold (#C8983A)`
- Text: `Deep Canopy (#1E2B1F)`
- Border radius: `4px`, utilitarian, not pill-shaped
- Hover: darken background to `#B0832F`
- Label style: Sentence case. "Get an estimate" not "GET AN ESTIMATE"

**Secondary / Ghost button:**
- Border: `1.5px solid Deep Canopy`
- Text: `Deep Canopy`
- Background: transparent
- Hover: `Sandy Loam` background fill

**Form fields:**
- Border: `1px solid Spanish Moss`
- Focus ring: `Straw Gold`, `2px`
- Background: `Fog White`
- Label: DM Sans, 0.8125rem, Medium, `Deep Canopy`

---

## Imagery Direction

*(For use when selecting or generating photos)*

- Pine straw being laid by hand or by a crew: the work itself, not stock photo smiles
- Lowcountry yards: live oaks, sandy soil, established plantings
- Before/after of freshly laid straw beds
- Golden-hour light: warm, late afternoon
- No stock imagery of people in branded shirts shaking hands
- No bright, oversaturated greens (that's Florida lawn care, not South Carolina pine straw)

---

## What Southern Straw Is Not

Use this as a negative constraint when making design or copy decisions:

- Not a full-service landscaping firm (no mowing, planting, irrigation)
- Not a franchise or national chain: locally owned, Lowcountry-specific
- Not premium in a luxury sense: premium in a craft and reliability sense
- Not flashy: the best compliment a customer gives us is "they just handled it"

---

## Claude Code Instructions

When building the Southern Straw website or any related tool:

1. Import Playfair Display and DM Sans from Google Fonts.
2. Define all six palette colors as CSS custom properties on `:root`.
3. Default all backgrounds to `Sandy Loam` or `Fog White`. Never pure white.
4. All primary CTAs use the Straw Gold + Deep Canopy button style.
5. Border radii should be small (`4px` max). Avoid pill/rounded cards.
6. Section spacing should feel generous. The Low Country is not cramped.
7. Mobile-first. Many customers will be homeowners checking the site from a phone while outside.
8. No animations that feel tech-startup. If there's motion, it's slow and deliberate (like straw settling).
9. Never use an em dash (—) in any copy, code comment, or documentation. Use a period, comma, or colon instead.

---

*Last updated: July 2026*
