#  [Next.js](https://nextjs.org/) on Ultahost

Deploy [React](https://facebook.github.io/react/)-based universal web apps on [Ultahost](https://ultahost.com/).

## Production deployment

Once you have a [Next app working locally](https://nextjs.org/docs/#setup), you may deploy it for public access.

##### Config for `/etc/nginx/app/your_serverIP`

   ```
   server {
    server_name your_server_IP;

    location / {
        proxy_pass http://localhost:3000;
    }
   }
   ```