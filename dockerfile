FROM cypress/browsers:node13.6.0-chrome80-ff72

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --record --key 91e6fd39-ff45-4897-b112-a25544f8db84
RUN $(npm bin)/node ./cypress/support/reports/reporterPage.js
RUN $(npm bin)/START_SERVER_AND_TEST_INSECURE=1 start-server-and-test start https-get://localhost:3030 cy:run

