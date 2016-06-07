FROM nodesource/node:6.1.0

ADD package.json package.json

RUN npm install

ADD . .

CMD ["node","app.js"]