# Ruby API Section
FROM ruby:2.3
RUN mkdir /apps/
RUN mkdir /apps/lukather-api
WORKDIR /apps/lukather-api
RUN apt-get update && \
  apt-get -y install build-essential libpq-dev && \
  apt-get -y install nodejs --no-install-recommends && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  gem install bundler

COPY /lukather-api/Gemfile /apps/lukather-api/Gemfile
COPY /lukather-api/Gemfile.lock /apps/lukather-api/Gemfile.lock
# BUNDLER_RUBYGEMS_MIRROR example value: "http://localhost:9292"
ARG BUNDLER_RUBYGEMS_MIRROR
RUN if [ -n "${BUNDLER_RUBYGEMS_MIRROR}" ]; then \
      bundle config mirror.https://rubygems.org "${BUNDLER_RUBYGEMS_MIRROR}" ; \
    fi
RUN bundle install --jobs 4 --retry 10
COPY ./lukather-api /apps/lukather-api

# Node App Section
FROM node:boron

# Create app directory
RUN mkdir -p /apps/lukather-discography/src/app
WORKDIR /apps/lukather-discography/src/app

# Install app dependencies
COPY ./lukather-discography/package.json /apps/lukather-discography/src/app/
RUN npm install

# Bundle app source
COPY . /apps/lukather-discography/src/app

EXPOSE 8080

CMD [ "npm", "start" ]
