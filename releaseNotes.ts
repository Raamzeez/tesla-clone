const releaseNotes = [
  {
    version: "2024.32.10",
    features: [
      {
        title: "ASS (Actually Smart Summon)",
        body: `Buckle up for the ride of your life, except, surprise! You're not in the car. ASS (Actually Smart Summon) allows your vehicle to come to you, or head to a spot that you choose, all on its own. It's like magic, but with more tech and less wand-waving.

Additionally, Dumb Summon allows you to move your Tesla forward or back with simple controls directly in your mobile app.

To use, open your Tesla app, hit the Summon tab, and get a live feed from your car’s cameras to guide your supervision.
- COME TO ME: Press and hold to have your Tesla come to you.
- GO TO TARGET: Set where you want your Tesla to go, then press and hold to send it on its merry way.

You can halt your journey anytime by just letting go of the button. See your Owner's Manual for additional details.

ASS and Dumb Summon should only be used in parking lots or driveways. Keep an eye on your car and its surroundings when using these features.`,
      },
    ],
  },
  {
    version: "2024.32.4.1",
    features: [
      {
        title: "LiveOne Powered by Slacker Radio",
        body: `The Streaming app has been changed to LiveOne. To access, tap the LiveOne icon in the Application Launcher. Requires Premium Connectivity or a WiFi connection.`,
      },
    ],
  },
  {
    version: "2024.32.3",
    features: [
      {
        title: "Exclude Home When Using Hands-Free Trunk",
        body: `The hands-free trunk feature now allows you to exclude your home location. This ensures that the trunk won’t automatically open when you are near your home.`,
      },
    ],
  },
  {
    version: "FSD (Supervised) v12.5.4.1",
    features: [
      {
        title: "FSD (Supervised)",
        body: `FSD (Supervised) v12 upgrades the city-streets driving stack to a single end-to-end neural network trained on millions of video clips, replacing over 300k lines of explicit C++ code.

Includes vision-based attention monitoring with sunglasses.`,
      },
      {
        title: "Upcoming Improvements",
        body: `- Earlier and more natural lane change decisions.
- End-to-End on highway.
- FSD on Cybertruck.`,
      },
    ],
  },
];

export default releaseNotes;
