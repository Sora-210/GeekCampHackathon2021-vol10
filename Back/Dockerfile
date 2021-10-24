FROM node:14
RUN mkdir /home/BackEnd
COPY ./ /home/BackEnd
WORKDIR /home/BackEnd
RUN /bin/bash &&\
    apt-get -y update &&\
    apt-get -y upgrade &&\
    npm update -g &&\
    npm install 

ENTRYPOINT npm run server
EXPOSE 8000