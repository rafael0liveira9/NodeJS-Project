FROM node

WORKDIR /usr/src/app

COPY package.json .

RUN npm isntall

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
