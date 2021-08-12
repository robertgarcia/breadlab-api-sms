FROM node:14.17.4-buster-slim

WORKDIR /tmp
RUN apt-get update && apt-get -y upgrade && apt-get -y dist-upgrade && apt-get install -y alien libaio1 && apt-get install -y wget
RUN wget http://yum.oracle.com/repo/OracleLinux/OL7/oracle/instantclient/x86_64/getPackage/oracle-instantclient19.3-basiclite-19.3.0.0.0-1.x86_64.rpm
RUN alien -i --scripts oracle-instantclient*.rpm
RUN rm -f oracle-instantclient19.3*.rpm && apt-get -y autoremove && apt-get -y clean

WORKDIR /app
COPY package*.json ./app/
RUN npm install oracledb
RUN npm install -g --force nodemon
RUN npm install
COPY . .
# CMD ["npm", "run", "dev"]