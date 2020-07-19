FROM node:lts-alpine AS development

RUN apk add --no-cache tzdata

RUN mkdir -p /home/node/app-um/node_modules && chown -R node:node /home/node/app-um

WORKDIR /home/node/app-um

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .
# COPY src/config/database.docker.js src/config/database.js

EXPOSE 3333

RUN yarn build

CMD ["yarn", "start:production"]
