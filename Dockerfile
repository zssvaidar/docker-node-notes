FROM debian:bullseye-slim

WORKDIR /var/app/website_second

RUN apt-get update && \
    apt-get install -y \
    npm \
    curl

RUN curl -fsSL https://deb.nodesource.com/setup_18.1 | sudo -E bash -
RUN apt-get install nodejs

COPY src/ .
RUN npm install

ENV APP_PORT 5000

CMD [ "/bin/bash", "-c", "node app.py"]
# CMD [ "/bin/bash", "-c", "~/.venvs/venv/bin/python3 app.py"]