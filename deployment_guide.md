# Deployment Guide: Dr. Makarand Jawadekar's Portfolio

Because this project is a **Static Frontend Application** built with React and Vite (and the contact form uses an external API), you do **not** need to pay for a complex backend server. 

Here are the two best ways to deploy this website to your custom domain. We highly recommend **Method 1** because it is free, incredibly fast, and automatically gives you a secure `https://` domain.

---

## Method 1: The Modern & Easiest Way (Vercel or Netlify) 🌟 *Highly Recommended*

Services like Vercel and Netlify are designed specifically for React/Vite apps. They offer **free hosting**, global CDNs for fast loading, and free SSL certificates.

### Step 1: Upload your code to GitHub
1. Create a free account on [GitHub](https://github.com/).
2. Create a new repository (e.g., `dr-makarand-portfolio`).
3. Open your terminal in your project folder (`c:\Users\GAMING\Downloads\dr.-makarand-jawadekar`) and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dr-makarand-portfolio.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com/) and sign up using your GitHub account.
2. Click **"Add New Project"**.
3. Import the `dr-makarand-portfolio` repository you just created.
4. Vercel will automatically detect that it's a Vite project. Leave all default settings as they are.
5. Click **Deploy**. In about 1 minute, your site will be live on a temporary Vercel URL!

### Step 3: Connect Your Custom Domain
1. In your Vercel project dashboard, go to **Settings > Domains**.
2. Type in your custom domain (e.g., `drmakarandjawadekar.com`) and click Add.
3. Vercel will give you a set of **DNS Records** (usually an A Record pointing to `76.76.21.21` or a CNAME).
4. Log into wherever you bought your domain (GoDaddy, Namecheap, Google Domains, etc.), go to DNS Management, and add the records Vercel provided.
5. Wait a few minutes. Vercel will automatically verify the domain and generate a free SSL certificate. You're done!

---

## Method 2: Traditional Server (cPanel / HostGator / GoDaddy / VPS)

If your client already bought a standard web hosting package (like cPanel shared hosting) and wants to put the files directly on that server:

### Step 1: Build the Production Files
A React/Vite project cannot just be dragged and dropped into a server as raw code. It must be "built" into standard HTML, CSS, and JS first.

1. Open your terminal in the project folder.
2. Run the build command:
   ```bash
   npm run build
   ```
3. This will create a new folder called `dist` inside your project directory. This `dist` folder contains your finalized, optimized, production-ready website.

### Step 2: Upload to your Server (cPanel)
1. Log into your hosting provider's **cPanel**.
2. Open the **File Manager** and navigate to your `public_html` folder (or the root folder for your domain).
3. If there are default files there (like a default `index.php` or `default.html`), delete them.
4. On your computer, open the `dist` folder you just generated.
5. Select **all the files** inside the `dist` folder (do not just drag the folder itself, select the *contents* of the folder: `assets/`, `index.html`, etc.).
6. Upload those files directly into the `public_html` folder on your server.

### Step 3: Server Configuration (If Using Router - Optional)
*Note: Because this is a single-page portfolio using anchor links (e.g., `#about`), you likely don't need this, but it is best practice for React apps.*
If you ever add multiple pages (like `/about` or `/blog`), traditional servers get confused because they look for physical folders that don't exist. To fix this:
1. In your `public_html` folder, create a file named `.htaccess`
2. Add this code to it to route everything to your `index.html`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

Your site is now live on your traditional server!
