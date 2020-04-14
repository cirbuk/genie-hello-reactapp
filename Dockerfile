FROM node:10.16.0

RUN npm install pm2 -g

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

EXPOSE $PORT

CMD [ "pm2-runtime", "start","/app/bin/www"]