# Infinite Nets — holding site

A two-page static site (Home + About) in the Infinite Nets brand: navy background,
white text, Helvetica Neue. No build step, no dependencies — just HTML, CSS and images.

```
index.html        Home (hero, video, features)
about.html        About / the vision + "player login — coming soon"
contact.html      Contact form (emails you via FormSubmit)
thanks.html       "Message sent" page shown after the form submits
blog.html         News page (renders posts from posts.js)
posts.js          Your news items — edit this to add posts
styles.css        All styling (colours + fonts live at the top in :root)
assets/           Logo + photos
media/            Put your gameplay video here as showcase.mp4
CNAME             Your custom domain (www.infinitenets.net)
```

---

## Editing the content

- **Text**: open `index.html` / `about.html` and edit the words directly.
- **Images**: replace the files in `assets/` (keep the same filenames), or add your own and
  update the `src="assets/..."` references.
- **Video**: drop your file at `media/showcase.mp4`. Prefer YouTube? In `index.html`, delete
  the `<video>…</video>` block and uncomment the YouTube `<iframe>` block just below it.
- **Contact email**: the pages link to `hello@infinitenets.net` — change that to whatever
  address you set up (search the files for `hello@infinitenets.net`).
- **Colours / font**: everything is defined at the top of `styles.css` under `:root`.

### A note on the font
The site uses **Helvetica Neue**, which is standard on Macs and most Apple devices but **not**
on Windows/Android. The stylesheet falls back to Helvetica → Arial, so it still looks clean
everywhere; it just won't be the exact Neue cut on those machines. If you want Helvetica Neue
to render identically for everyone you'd need to licence and self-host a web-font version.

---

## Putting it live on www.infinitenets.net (GitHub Pages)

**1. Create a repository** on GitHub (any name, e.g. `infinitenets-site`). Make it public.

**2. Add these files** to the repo root. Either:
- drag-and-drop them into the repo using GitHub's **"Add file → Upload files"** button, or
- with git: `git init`, `git add .`, `git commit -m "Holding site"`, then push to the repo.

**3. Turn on Pages**: repo **Settings → Pages →** Source: *Deploy from a branch* →
Branch: `main` / `/ (root)` → **Save**.

**4. Set the custom domain**: still in **Settings → Pages**, under **Custom domain**, enter
`www.infinitenets.net` and **Save**. (The `CNAME` file in this folder already contains that.)

**5. Point your DNS** — at the registrar where you bought the domain, add these records:

| Type | Name/Host | Value |
|------|-----------|-------|
| CNAME | `www` | `YOUR-USERNAME.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Replace `YOUR-USERNAME` with your GitHub username. The four A records on the apex (`@`) let
`infinitenets.net` redirect to `www.infinitenets.net`. (Optionally add the IPv6 AAAA records
too: `2606:50c0:8000::153`, `::8001::153`, `::8002::153`, `::8003::153`.)

**6. Wait, then enforce HTTPS**: DNS can take up to 24 hours (often much less). Once GitHub
shows the domain as verified, tick **"Enforce HTTPS"** in Settings → Pages.

That's it — your site will be live at **https://www.infinitenets.net**.

> **Even simpler alternative:** drag this folder onto **https://app.netlify.com/drop** for
> instant hosting, then add the domain under Netlify's Domain settings. Good if you'd rather
> not use git.

---

## Later: the player login

The **Player Login** button currently points to the "coming soon" section on the About page.
When your stats portal is ready, just change those links (search for `#portal`) to point at
the portal's URL — e.g. `https://app.infinitenets.net` or `/app`.

---

## Contact form (emails you)

The form on `contact.html` uses **FormSubmit** (formsubmit.co) — a free service that
forwards submissions to your inbox. It's already pointed at **nick.dunn2019@gmail.com**.

**One-time activation (required):**
1. Once the site is live, open `/contact.html` and send yourself a test message.
2. FormSubmit emails `nick.dunn2019@gmail.com` a confirmation — click **Activate** in it.
3. After that, every submission lands in your inbox. (You only do this once.)

**Good to know:**
- After submitting, visitors are redirected to `thanks.html`. That redirect uses the full
  URL in the form's `_next` field — currently `https://www.infinitenets.net/thanks.html`.
  If your live address differs, update that one line in `contact.html`.
- To **change the destination email**, edit the `action="https://formsubmit.co/…"` line in
  `contact.html`.
- **Spam:** a hidden "honeypot" field (`_honey`) quietly blocks most bots. reCAPTCHA is
  turned off for a smoother experience (`_captcha` = `false`); if you ever get spam, delete
  that line to turn the captcha back on.
- **Hiding your address:** the email sits in the page source, where bots can scrape it. Once
  your form is activated, FormSubmit can give you a random endpoint (e.g.
  `https://formsubmit.co/xxxxxxxx`) to use instead of the raw address — see their docs. You
  can also switch to [Formspree](https://formspree.io) if you prefer an account-based service.

---

## Adding news posts

Open **`posts.js`** and add a block to the top of the list — newest date shows first:

```js
{
  date: "2026-11-20",
  title: "Your headline here",
  image: "assets/your-photo.jpg",   // optional — delete this line for no image
  body: `
    <p>First paragraph.</p>
    <p>Second paragraph, with a <a href="https://example.com">link</a> if you like.</p>
  `
},
```

Save, commit/push (or re-upload `posts.js`), and the News page updates — no HTML needed.
Put any images you reference into the `assets/` folder first.

> Want a proper "write a post in your browser" admin screen later? That needs a small CMS
> layer (e.g. Decap CMS) on top of this — easy to add when you're ready.
