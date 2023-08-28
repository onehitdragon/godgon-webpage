FROM node

COPY package.json /godgon-web/
WORKDIR /godgon-web
RUN npm i
COPY . /godgon-web/
RUN npm run build

CMD ["npm","run","start"]