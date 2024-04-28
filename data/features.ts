export class Feature {
  title: string;
  text: string;
  image: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
    this.image = "";
  }
}

export const features: Feature[] = [
  new Feature(
    "Encryption",
    "Your tokens are in a secure vault, with optional biometric unlock for easy access."
  ),
  new Feature(
    "Organized",
    "All your tokens in a polished and modern interface. Material You included."
  ),
  new Feature(
    "Themes",
    "Bundled with different themes and viewmodes, including a true dark mode and a tiles view."
  ),
  new Feature("Icons", "Easily find the tokens you need by using one of the available icon packs."),
  new Feature(
    "Full control",
    "Export or import from a wide variety of 2FA apps. With support for automatic backups."
  ),
  new Feature(
    "Maintained",
    "The app is actively developed and we're constantly making improvements."
  ),
];
