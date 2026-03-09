FROM node:24-alpine

WORKDIR /website

COPY package-lock.json package.json /website/

RUN npm install

COPY . .

# Build for production
RUN npm run build

EXPOSE 5173
EXPOSE 3000

CMD ["npm", "run", "dev"]
