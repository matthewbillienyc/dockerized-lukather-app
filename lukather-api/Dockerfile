# Ruby API Section
FROM ruby:2.3
RUN apt-get update && \
  apt-get -y install build-essential libpq-dev && \
  apt-get -y install nodejs --no-install-recommends && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  gem install bundler

RUN mkdir /app
WORKDIR /app

COPY ./Gemfile /app/Gemfile
COPY ./Gemfile.lock /app/Gemfile.lock
# BUNDLER_RUBYGEMS_MIRROR example value: "http://localhost:9292"

RUN bundle install --jobs 4 --retry 10
COPY ./ /app
