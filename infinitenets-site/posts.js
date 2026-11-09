/* ============================================================
   Infinite Nets — News / blog posts
   ------------------------------------------------------------
   TO ADD A NEWS ITEM: copy one { ... } block below, paste it at
   the TOP of the list, and edit the fields. Newest date shows first.

   Fields:
     date   "YYYY-MM-DD"            (required)
     title  "Headline"              (required)
     image  "assets/yourphoto.jpg"  (optional — remove the line to skip)
     body   `...HTML...`            (required; wrap each paragraph in <p>…</p>,
                                      links allowed: <a href="https://...">text</a>)

   The three posts below are EXAMPLES — replace them with your own.
   ============================================================ */

const POSTS = [
  {
    date: "2026-11-05",
    title: "Winter testing is under way",
    image: "assets/headset.jpg",
    body: `
      <p>With the outdoor season over and the nights drawing in, we're putting Infinite Nets
      through its paces indoors — exactly the problem the app is built to solve.</p>
      <p>Expect new drills and bowling variations over the coming weeks as we get ready for a
      wider grassroots rollout.</p>
    `
  },
  {
    date: "2026-10-22",
    title: "Why cheaper VR headsets matter for grassroots cricket",
    body: `
      <p>As standalone headsets keep getting more capable and more affordable, the barrier to
      year-round practice at home keeps dropping. For clubs and schools, that's the opening:
      quality bowling on demand without a net, a bowler, or good weather.</p>
      <p>We think the next few seasons will see VR move from novelty to a genuine training tool
      at the grassroots level — and we're building for exactly that.</p>
    `
  },
  {
    date: "2026-10-08",
    title: "Record interest in the game — now let's turn it into practice",
    image: "assets/drills.jpg",
    body: `
      <p>Participation is up, new audiences are watching, and investment is flowing into the
      grassroots game. The missing piece is practice time: somewhere to face a ball, often,
      whatever the season.</p>
      <p>That's the whole idea behind Infinite Nets — turning momentum into repeatable reps.</p>
    `
  }
];
