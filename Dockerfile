FROM nodesource/node:4

ADD package.json package.json
RUN npm install
ADD . .

CMD ["node","app.js"]
