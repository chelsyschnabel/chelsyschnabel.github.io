# Chelsy Schnabel Portfolio

My portfolio site, in plain HTML and CSS with no build step. Edit `index.html` in any text editor and the change goes live on the next push.

## Publish on GitHub Pages

1. On GitHub, create a new **public** repository named `chelsyschnabel.github.io`. Using that exact name makes the site live at https://chelsyschnabel.github.io.
2. Upload everything in this folder (`index.html`, `README.md`, `assets/`, `files/`), either with "Add file > Upload files" on the repo page or with git:

   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/chelsyschnabel/chelsyschnabel.github.io.git
   git push -u origin main
   ```

3. In the repo, open **Settings > Pages**. Under "Build and deployment," choose **Deploy from a branch**, then pick `main` and `/ (root)`, and save.
4. Wait a minute or two, then open https://chelsyschnabel.github.io.

## What's where

- `index.html`: the whole site. Work samples are the cards under "Work samples." Skills are listed in the script near the bottom of the file.
- `assets/headshot.jpg`: the portrait.
- `files/`: downloadable files (High Low teacher edition and card decks, and the MATH 252 course plan).

## Adding a work sample

Copy one `<li class="card">` block and edit it. The `data-levels` attribute controls the level filter. Use any of `k5 68 912 ug grad`, separated by spaces.

## Before you share the link

- Check it in a private browser window and on your phone.
- Run it through WAVE (https://wave.webaim.org) for an accessibility pass.
- Remember the repo is public, including its history. Anything committed once stays findable even after you delete it.
