FROM node:22.14.0-alpine

WORKDIR /opt/app

ENTRYPOINT ["sh", "setup.sh"]