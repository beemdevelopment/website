export class Review {
  text: string;
  stars: number;
  date: Date;

  constructor(text: string, stars: number, date: string) {
    this.text = text;
    this.stars = stars;
    this.date = new Date(date);
  }
}

export const reviews: Review[] = [
  new Review(
    "Switched to Aegis from Authy. I'm blown away by how good and customizable this app is. Love it. A big thank you to the developers.",
    5,
    "2023-09-9"
  ),
  new Review(
    "A completely professional and flawless app. I don't see the slightest flaw in this app and it deserves five stars and a lot of praise. Thanks to the programmers",
    5,
    "2023-09-17"
  ),
  new Review(
    "User-friendly interface, can import key backups of many other two-factor authenticators. From the authenticators FreeOTP+, Google, Microsoft and andOTP I settled on this one. If the device is rooted, it can import data from other installed authenticators directly.",
    5,
    "2023-02-20"
  ),
  new Review(
    "Possibility of import and export, all necessary security measures, pleasant appearance and usability, free, no advertising, open source, actively updated. Of all the authentication apps I've used, this is the best.",
    5,
    "2023-02-28"
  ),
  new Review(
    "Very nice interface, much better then andOTP. Thanks for doing opensource projects!",
    5,
    "2023-09-11"
  ),
  new Review(
    "Very good, I'm satisfied with the application. Easy to backup and faster than Google authenticator",
    4,
    "2023-09-13"
  ),
  new Review(
    "Free. Supports other authentication algorithms beyond SHA1. Has cloud backups. Can export data files. Automatically prompts to enter PIN and biometrics to lock the app. Automatically prompts to enter password to encrypt the backup files.",
    4,
    "2023-06-29"
  ),
  new Review(
    "Great app. Google did not allow me to move from one phone to another: It did not recognize my own QR code. But this application recognized it. There are many interface settings and backup!",
    5,
    "2020-10-31"
  ),
  new Review(
    "I especially like that there is import and export. Nice native interface. Lightweight and convenient utility. Class! 👌",
    5,
    "2019-10-4"
  ),
  new Review(
    "Exactly what I was looking for! It's open source, ad-free, and lets me control my keys. It doesn't suck all my data into the cloud and lock it up like some other authenticator apps do. I can back up my keys where and when I want to. It's not tied to a SIM or phone number, so I can move to another device any time I want. This app has worked with every site/server I've tried (4 so far)",
    5,
    "2022-03-30"
  ),
  new Review(
    "The best authenticator app. Open sourse, no ads, full control, import or export from other apps. Password protected, and the best is easy backup that can be saved anywhere. Couldn't find a better app with all these features.",
    5,
    "2023-08-25"
  ),
  new Review(
    "Free, open source, it works completely offline, and allows you to encrypt the safe with a password of your choice. Requires only 3 permissions, avoiding dozens of unnecessary ones. Definitely the best Android app for managing two-step verification tokens.",
    5,
    "2023-08-9"
  ),
];
