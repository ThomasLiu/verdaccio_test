FROM node
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm config set registry https://registry.npm.taobao.org/ && npm i -g pm2 --no-optional
EXPOSE 3000
#pm2在docker中使用命令为pm2-docker
CMD ["pm2-docker", "start", "--json", "../process.json"]
