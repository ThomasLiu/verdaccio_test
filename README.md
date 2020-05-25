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

+ [5分钟内3种方法搭建企业内部私有npm仓库](https://blog.csdn.net/weixin_34290096/article/details/87991369)

+ [npm私服搭建—verdaccio方案及其最佳实践](https://www.jianshu.com/p/d32ce7e9d4d8)