This project is a test of Cloudflare Pages product and it's interaction with Cloudflare Turnstile Product

Refer: 
https://blog.cloudflare.com/guide-to-cloudflare-pages-and-turnstile-plugin/
https://developers.cloudflare.com/pages/functions/plugins/turnstile/
https://developers.cloudflare.com/pages/tutorials/forms/
https://developers.cloudflare.com/pages/functions/get-started/

Started with https://blog.cloudflare.com/turnstile-ephemeral-ids-for-fraud-detection/


Notes:
 - npm and Node
 - git clone using HTTP URLs
 - git push with personal access token as password authentication has been deprecated
 - Turnstile plugin was installed and the referred in the functions "/api/submit.js"
 - For Functions to be configured, the following behavior must be followed: "create a /functions directory at the root of your Pages project."
 - Also key to note how functions routing works and how they get applied: https://developers.cloudflare.com/pages/functions/routing/
