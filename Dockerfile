FROM node:8.11.1-alpine

ENV DIR /todo-app

RUN mkdir ${DIR}
COPY . ${DIR}
WORKDIR ${DIR}

RUN yarn install
