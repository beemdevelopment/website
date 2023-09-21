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
    "Your passwords are in a secure vault, with optional biometric unlock for easy access."
  ),
  new Feature("Organized", "All your tokens in a polished and modern interface."),
  new Feature("Themes", "Bundled with different themes and viewmodes, including a true dark mode."),
  new Feature("Expert", "Edit your tokens in our advanced editing screen"),
  new Feature("Icons", "Easily find the tokens you need by using our icons."),
  new Feature("Full control", "Export or import from a wide variety of 2FA apps."),
];
