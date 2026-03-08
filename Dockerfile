FROM node:24-alpine

WORKDIR /website

COPY package-lock.json package.json /website/

RUN npm install

COPY . .  

EXPOSE 5173

CMD ["npm", "run", "dev"]
