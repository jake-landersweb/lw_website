FROM node:14

RUN mkdir /landersweb

WORKDIR /landersweb

COPY ./package.json /landersweb

RUN npm install

COPY . /landersweb

RUN npm run build

CMD ["npm", "start"]

