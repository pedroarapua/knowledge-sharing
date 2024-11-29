npm install

docker build -t pedroarapua/app-web-traces .
docker run -d -p 3000:3000 pedroarapua/app-web-traces