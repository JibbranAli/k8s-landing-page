# Kubernetes Bootcamp Landing Page

## Deploying to Vercel

1. **Frontend**: No changes needed. Vercel will auto-detect and deploy the Vite/React app.
2. **Backend (Contact Form Email)**: Now handled by `/api/send-email.js` as a Vercel Serverless Function.
3. **Environment Variables**:
   - Go to your Vercel project dashboard.
   - Set the following environment variables:
     - `EMAIL_USER` = your Gmail address (e.g., technical@lwindia.com)
     - `EMAIL_PASS` = your Gmail App Password
4. **Contact Form**: The form will POST to `/api/send-email` automatically.
5. **No Express server needed**: The old `server.cjs` is removed.

---

**You can now deploy directly to Vercel!** 