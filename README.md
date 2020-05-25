# verdaccio_test
npm 私服



```sh
cd compose # 1. 切换目录
docker network create compose_default # 2. 创建默认网络
docker-compose up --scale web=5 # 3. 启动并创建5个web app容器

#查看容器的ip
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id

# 检验
curl -I 127.0.0.1:4000
```

或者在 浏览器上 访问 127.0.0.1:4000



## 参考资料

+ [Docker多容器部署实践(nginx+node.js)](https://www.jianshu.com/p/1f7ccba1d65f)

+ [docker-compose with node&pm2&nginx 使用](https://blog.csdn.net/weixin_34249367/article/details/91371245)