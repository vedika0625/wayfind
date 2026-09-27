FROM node:20-alpine

WORKDIR /app

ARG COMMIT_ID=development
ENV COMMIT_ID=$COMMIT_ID

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]