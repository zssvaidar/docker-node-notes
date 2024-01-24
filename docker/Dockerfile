FROM debian:bullseye-slim

WORKDIR /var/app/website_second

RUN apt-get update && \
    apt-get install -y \
    npm \
    curl

RUN curl -fsSL https://deb.nodesource.com/setup_18.x
RUN apt-get install nodejs

COPY package.json .
RUN npm install
COPY build ./build

ENV APP_PORT 5000

CMD [ "/bin/bash", "-c", "npm run serve"]
# CMD [ "/bin/bash", "-c", "ls"]