/*
========================================================================
  DLBC WEBSITE CONTENT FILE
  Devine Love Bible Church — Barangay Libas, Merida, Leyte

  This is the ONLY file you need to edit to post a new devotion, sermon,
  or event. Do not touch index.html unless you're comfortable with code.

  HOW TO EDIT THIS FILE
  ----------------------
  1. Open this file in any plain text editor (Notepad, TextEdit,
     Notepad++, or GitHub's own "Edit" button if the site is on GitHub).
  2. Find the section you want (DEVOTIONS, SERMONS, or EVENTS below).
  3. Copy one existing entry (the { ... } block), paste it, and change
     the text between the quotes " " to your new content.
  4. Keep the commas after each line and after each entry — that's what
     separates one item from the next. If you're not sure, copy an
     existing entry exactly and just change the words.
  5. Save the file, then re-upload/re-publish it the same way you did
     the first time (e.g. commit + push on GitHub, or re-upload on
     Netlify).
  6. Dates must always be written as "YYYY-MM-DD", e.g. July 12, 2026
     is written "2026-07-12". This is what lets the site automatically
     figure out what "today's devotion" is and which events are still
     upcoming.

  If you make a mistake (like forgetting a comma), the site will just
  fall back to showing the last version that worked — it won't break
  anything permanently, so feel free to experiment.
========================================================================
*/

const SITE_CONTENT = {

  // ======================================================================
  // DEVOTIONS
  // Add a NEW devotion by copying the template below and pasting it as
  // the FIRST entry in the list (right after the opening "[").
  // The site automatically shows whichever devotion matches today's date.
  // Older ones automatically move into "Recent Devotions".
  //
  // TEMPLATE — copy this block to add a new devotion:
  // {
  //   date: "YYYY-MM-DD",
  //   title: "Short devotion title",
  //   verseText: "The Bible verse text, without quotation marks",
  //   verseRef: "Book Chapter:Verse",
  //   body: "A short reflection, 2-5 sentences.",
  //   prayer: "A one or two sentence prayer."
  // },
  // ======================================================================
  devotions: [
    {
      date: "2026-07-03",
      title: "Roots That Hold",
      verseText: "He will be like a tree planted by the water, that sends out its roots by the stream.",
      verseRef: "Jeremiah 17:8",
      body: "Mangroves survive the tide because their roots go down before the storm comes, not during it. Our walk with God works the same way — the quiet mornings spent in His Word are what hold us steady when the harder days arrive. Take a few minutes today to sit with this verse before the day gets busy.",
      prayer: "Lord, plant my roots deep in Your Word today, so that whatever the day brings, I remain steady in You. Amen."
    },
    {
      date: "2026-07-02",
      title: "A Present Help",
      verseText: "God is our refuge and strength, a very present help in trouble.",
      verseRef: "Psalm 46:1",
      body: "It's easy to run to everything else first — worry, distraction, other people — before we run to God. This verse reminds us He isn't a last resort. He's present, right now, in whatever today holds.",
      prayer: "Father, teach me to run to You first today, not last. Amen."
    },
    {
      date: "2026-07-01",
      title: "Small Beginnings",
      verseText: "Do not despise these small beginnings, for the Lord rejoices to see the work begin.",
      verseRef: "Zechariah 4:10",
      body: "Whatever small, unseen thing you're doing in faith today — it matters to God, even if no one else notices it yet.",
      prayer: "Lord, thank You for seeing the small things. Help me be faithful in them. Amen."
    },
    {
      date: "2026-06-30",
      title: "Made New Each Morning",
      verseText: "His mercies are new every morning; great is Your faithfulness.",
      verseRef: "Lamentations 3:22-23",
      body: "Yesterday's failures don't get to define today. God's mercy resets every single morning — that includes this one.",
      prayer: "Lord, thank You for a fresh start today. Help me walk in it. Amen."
    }
  ],

  // ======================================================================
  // SERMONS
  // Add a NEW sermon by pasting it as the FIRST entry in the list — the
  // site always shows entry #1 as "Latest Message" on the homepage.
  // Older sermons can stay in the list below it for your own records.
  //
  // TEMPLATE — copy this block to add a new sermon:
  // {
  //   series: "Series name · Part #",
  //   title: "Sermon title",
  //   scripture: "Bible passage, e.g. Psalm 46:1-11",
  //   pastor: "Pastor's name",
  //   date: "YYYY-MM-DD",
  //   description: "A 2-3 sentence summary of the message.",
  //   videoUrl: "https://facebook.com/... or https://youtube.com/...  (leave as empty quotes \"\" if not posted yet)",
  //   notesUrl: "https://link-to-pdf-notes  (leave as empty quotes \"\" if you have none)"
  // },
  // ======================================================================
  sermons: [
    {
      series: "Anchored: Faith in Every Tide · Part 3",
      title: "Holding Fast When the Water Rises",
      scripture: "Psalm 46:1-11",
      pastor: "Pastor [Pastor's Name]",
      date: "2026-06-28",
      description: "God is our refuge and strength, a very present help in trouble. This week we looked at what it means to stay planted when the storms of life try to pull us loose — and why community, like a mangrove forest, is how we survive them together.",
      videoUrl: "",
      notesUrl: ""
    }
  ],

  // ======================================================================
  // EVENTS
  // Add events in ANY order — the site automatically sorts them by date
  // and hides anything already in the past. "tag" is a short label like
  // "Outreach", "Youth", "Fellowship", or "Prayer".
  //
  // TEMPLATE — copy this block to add a new event:
  // {
  //   date: "YYYY-MM-DD",
  //   title: "Event name",
  //   time: "7:00 AM",
  //   location: "Where it's happening",
  //   tag: "Outreach"
  // },
  // ======================================================================
  events: [
    {
      date: "2026-07-12",
      title: "Barangay Libas Coastal Clean-Up & Outreach",
      time: "7:00 AM",
      location: "Meet at the chapel grounds",
      tag: "Outreach"
    },
    {
      date: "2026-07-19",
      title: "Youth Fellowship Night",
      time: "6:30 PM",
      location: "Fellowship Hall",
      tag: "Youth"
    },
    {
      date: "2026-07-26",
      title: "Family Fun Day & Fellowship Lunch",
      time: "10:00 AM",
      location: "After Sunday Service",
      tag: "Fellowship"
    },
    {
      date: "2026-08-02",
      title: "Prayer & Fasting Week Begins",
      time: "All week",
      location: "Details at Sunday service",
      tag: "Prayer"
    }
  ]

};
