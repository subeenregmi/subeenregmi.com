FROM node:26-slim

WORKDIR /website

COPY package-lock.json package.json /website/

RUN npm ci

COPY . .

# Build for production
RUN npm run build

EXPOSE 5173
EXPOSE 3000

CMD ["npm", "run", "dev"]
