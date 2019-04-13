FROM node

ADD . /code
WORKDIR /code
CMD ["node","src/index.js"]
