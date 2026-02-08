export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-side-curtains",
    title: "Welcome to Side Curtains",
    date: "2025-02-01",
    excerpt:
      "Why we started this little corner of the internet for lovers of post-war British roadsters.",
    content: `Welcome to Side Curtains — a place for people who understand that a car doesn't need to be fast, reliable, or even particularly weatherproof to bring you absolute joy.

If you've ever found yourself lying under an MG with a spanner in one hand and a cup of tea in the other, wondering why the oil is dripping from *there* instead of *here*, you're in the right place.

This site is for enthusiasts and restorers of post-war British roadsters — the MGs, Triumphs, Austin-Healeys, Jaguars, Lotuses, Morgans, and all the wonderful machines that came out of Britain between 1945 and 1980.

We're starting small — a few articles, a gallery, and a place to chat. But like any good restoration project, the plan is to build it up over time, one piece at a time, with care and the occasional moment of colourful language when something doesn't fit.

Pull up a chair, have a browse, and welcome aboard. The road is open, the sun is out (for now), and the side curtains are stowed behind the seat... somewhere.`,
    category: "News",
    featured: true,
  },
  {
    slug: "five-excuses-for-another-parts-car",
    title: "Top 5 Excuses for Buying Another Parts Car",
    date: "2025-01-28",
    excerpt:
      "We've all been there. Here are the finest justifications known to humankind.",
    content: `Every British roadster enthusiast has uttered at least one of these phrases. Most of us have used all five. No judgement here.

**5. "It was too cheap to pass up."**
The classic opener. It doesn't matter that you have nowhere to put it. At that price, you'd be losing money by NOT buying it. That's just basic economics.

**4. "I only need the gearbox."**
And the doors. And the boot lid. And maybe the wiring loom. And actually, that engine sounds alright...

**3. "It'll be a quick project for the winter."**
Said in October. Still saying it the following October. And the one after that.

**2. "They're not making any more of them."**
Technically true. Emotionally devastating when deployed against a spouse who's just noticed the trailer in the driveway.

**1. "It's an investment."**
The nuclear option. Bold, audacious, and surprisingly effective if delivered with enough conviction and a chart you found on the internet showing appreciating values.

If you've got a better excuse, we'd love to hear it in the forum. Bonus points if it actually worked.`,
    category: "Fun",
  },
  {
    slug: "lucas-electrics-survival-guide",
    title: "A Beginner's Guide to Lucas Electrics (and Prayer)",
    date: "2025-01-20",
    excerpt:
      "Joseph Lucas, Prince of Darkness. Here's how to keep the lights on... sometimes.",
    content: `There's an old joke: Why do the British drink warm beer? Because Lucas makes their refrigerators.

Love them or loathe them, Lucas electrical systems are part of the post-war British car experience. They're also the source of more roadside conversations with strangers than any other component.

**The Basics**

Most post-war British roadsters use positive earth (positive ground) systems — at least until the late 1960s when manufacturers began switching to negative earth. Knowing which you have is step one. Getting it wrong is step one of an expensive afternoon.

**The Golden Rules**

1. **Clean your earth points.** Ninety percent of Lucas "failures" are actually bad grounds. A wire brush and five minutes can save you hours of head-scratching.

2. **Carry spare fuses.** And a spare flasher unit. And a spare ignition condenser. Actually, just carry a spare of everything.

3. **Check your bullet connectors.** Those lovely little brass connectors corrode beautifully over the decades. Pull them apart, clean them up, and put them back. Your lights will thank you.

4. **The wiring diagram is your friend.** It looks terrifying at first, but British car wiring is actually quite logical once you learn the colour code system. Brown is always live, green is ignition-switched, and white is... well, it depends.

5. **When in doubt, check the voltage.** A simple multimeter will tell you more than an hour of guessing.

Remember: Lucas systems aren't actually unreliable. They're just... characterful. Like everything else on these cars, they reward attention and patience.

And if all else fails, there's always a torch and a long walk home. It's part of the adventure.`,
    category: "Technical",
  },
  {
    slug: "the-mg-t-series-love-letter",
    title: "A Love Letter to the MG T-Series",
    date: "2025-01-15",
    excerpt:
      "The TC, TD, and TF — the cars that started the sports car revolution.",
    content: `When American GIs returned home after the war, many brought something unexpected with them: a taste for small, nimble British sports cars. And more often than not, the car that had caught their eye was an MG.

The T-Series — TC, TD, and TF — didn't have the most power, the best handling, or the most advanced engineering. What they had was something harder to quantify: character, charm, and the pure joy of open-air motoring on a sunny afternoon.

**The TC (1945-1949)**

The car that started it all for so many enthusiasts. Essentially a pre-war design with a few updates, the TC was charmingly old-fashioned even when it was new. Fold-flat windscreen, cut-away doors, a slab fuel tank on the back, and that glorious octagonal badge on the grille.

**The TD (1950-1953)**

The modern one. Independent front suspension! Rack and pinion steering! Bumpers! The purists weren't happy, but the TD was easier to drive, more comfortable, and sold in huge numbers — especially in America.

**The TF (1953-1955)**

The swan song. A facelifted TD with a sloped grille, individual fenders blended into the body, and a more refined look. It was criticised at launch for not being modern enough, but time has been very kind to the TF. Many consider it the prettiest of the three.

Together, these three cars lit the spark that became the entire post-war sports car movement. Every Miata, every Boxster, every modern roadster owes something to the little MG that could.

Not bad for a car with 54 horsepower.`,
    category: "History",
  },
];
