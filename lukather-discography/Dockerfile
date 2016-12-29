
# Node App Section
FROM node:boron

# Create app directory
RUN mkdir -p /apps/lukather-discography/src/app
WORKDIR /apps/lukather-discography/src/app

# Install app dependencies
COPY ./package.json /apps/lukather-discography/src/app/
RUN npm install

# Bundle app source
COPY . /apps/lukather-discography/src/app

EXPOSE 8080

CMD [ "npm", "start" ]
