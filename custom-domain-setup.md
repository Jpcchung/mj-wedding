# Connect maggiechungiewedding.com to your GitHub Pages site

You'll (1) buy the domain, (2) point it at GitHub with a few DNS records, and (3) flip on HTTPS. Plan about 20 minutes of work, then up to a day for DNS to fully spread (usually much faster).

The `CNAME` file is already in your site files, so GitHub knows the domain the moment you upload it.

## 1. Buy the domain

Go to any registrar, search `maggiechungiewedding.com`, and buy it (~$12/year for a .com).
- **Cloudflare Registrar** (dash.cloudflare.com) is cheapest with no markup. Recommended.
- **Namecheap** or **Porkbun** are also great and simple.

Skip the upsells (privacy protection is usually free and worth keeping; you don't need their hosting or email add-ons).

## 2. Make sure the site is already on GitHub Pages

If you haven't yet: create the public `mj-wedding` repo, upload all the site files (including the `CNAME` file), and turn on Pages under Settings → Pages (branch `main`, root). See `host-on-github.md`. Confirm the `yourusername.github.io/mj-wedding/` link works before doing DNS.

## 3. Add the DNS records at your registrar

In your registrar's DNS settings for maggiechungiewedding.com, add these.

**Four A records** (for the bare domain, maggiechungiewedding.com). Host/Name is `@`:

| Type | Name | Value |
|------|------|-------------------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**One CNAME record** (for the www version):

| Type | Name | Value |
|------|------|----------------------|
| CNAME | www | yourusername.github.io |

Replace `yourusername` with your actual GitHub username. Note the value ends in `.github.io` with no repo name and no trailing slash.

If your registrar already created placeholder A or CNAME records for `@` or `www`, delete those first so they don't conflict.

## 4. Set the custom domain in GitHub

1. In your repo: **Settings → Pages**.
2. Under **Custom domain**, type `maggiechungiewedding.com` and click **Save** (this matches the CNAME file already in your repo).
3. GitHub will check DNS. It can take a few minutes to a few hours to show a green check.
4. Once verified, tick **Enforce HTTPS** (may be greyed out until the certificate is issued; check back later and enable it).

## 5. Test

- Visit `https://maggiechungiewedding.com` and `https://www.maggiechungiewedding.com`. Both should load your site with the padlock.
- Enter the password (katowato), and submit a test RSVP to confirm it reaches your Google Sheet.

## Shortcut: Cloudflare for both

If you buy the domain at Cloudflare, you can also host on **Cloudflare Pages** instead of GitHub, and the DNS is wired automatically with no records to type. If you'd like that route instead, tell me and I'll write the Cloudflare Pages steps.

## Troubleshooting

- **"Domain does not resolve to the GitHub Pages server"**: DNS hasn't spread yet. Wait and click Save again in Settings → Pages.
- **HTTPS checkbox greyed out**: normal right after setup. GitHub is issuing the certificate; check back in a few hours.
- **Site loads but photos/video missing**: make sure every file from the zip (including `intro.mp4` and the `eng-*.jpg` files) was uploaded to the repo root alongside `index.html`.
