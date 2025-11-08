FROM node:24-alpine

WORKDIR /app/frontend

COPY package-lock.json package.json /app/frontend/

RUN npm install

COPY . .  

EXPOSE 5173

CMD ["npm", "run", "dev"]
