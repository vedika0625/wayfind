FROM node:20-alpine

WORKDIR /app

ARG RENDER_GIT_COMMIT
ENV COMMIT_ID=$RENDER_GIT_COMMIT

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]