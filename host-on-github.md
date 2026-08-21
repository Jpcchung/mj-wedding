# Host your wedding site free on GitHub Pages

Result: a public link like `https://yourname.github.io/mj-wedding/` that works on any phone or computer, with the RSVP writing to your Google Sheet. Takes about 10 minutes. No coding.

## What you're uploading

Unzip `mj-wedding-site.zip` first. It contains `index.html`, the video, and all photos. Keep them all together in one folder; GitHub needs `index.html` and the media side by side.

## Steps

### 1. Make a GitHub account
Go to github.com and sign up (free) if you don't have one.

### 2. Create a repository
1. Click the **+** in the top right → **New repository**.
2. **Repository name:** `mj-wedding` (this becomes part of your URL).
3. Set it to **Public**.
4. Click **Create repository**.

### 3. Upload the site files
1. On the new repo page, click **uploading an existing file** (the link in the "Quick setup" box), or **Add file → Upload files**.
2. Unzip `mj-wedding-site.zip`, then drag in ALL the files from inside it: `index.html`, `intro.mp4`, `intro-poster.jpg`, and every `eng-*.jpg`.
   - Important: upload the files themselves, not the zip and not a folder wrapping them. `index.html` must sit at the top level of the repo.
3. Click **Commit changes**.

### 4. Turn on GitHub Pages
1. In the repo, go to **Settings** (top menu) → **Pages** (left sidebar).
2. Under "Build and deployment," set **Source** to **Deploy from a branch**.
3. **Branch:** choose `main`, folder `/ (root)`, then **Save**.
4. Wait 1–2 minutes. Refresh the page; a link appears at the top:
   `https://yourname.github.io/mj-wedding/`

### 5. Test it
1. Open the link on your phone.
2. The video should play, photos should load, and an RSVP submission should land in your Google Sheet.

## Updating the site later

To change anything, edit the file on your computer, then in the repo click the file → pencil icon → paste the new version, or use **Add file → Upload files** to replace it. Changes go live in a minute or two.

## Want a custom domain?

You can point something like `maggieandjonathan.com` at GitHub Pages. Buy the domain (Namecheap, Google Domains, Cloudflare, ~$12/yr), then in **Settings → Pages → Custom domain** enter it and follow the DNS instructions. Optional, but nice on a save the date.

## Notes

- The AYANA resort photos load from AYANA's servers, so guests need internet (they will anyway). Everything else is served from your repo.
- A public GitHub repo means the files are technically viewable by anyone who finds the repo, not just your guests. That's normal for a wedding site. If you'd rather it not be discoverable, a host like **Netlify** or **Cloudflare Pages** offers the same free hosting with drag-and-drop and keeps the source private. Say the word and I'll write those steps instead.
