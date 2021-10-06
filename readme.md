部署步骤
1.配置host+prot
2.压缩发布包
3.把发布包传到服务器
4.解压
5.安装依赖
6.启动服务

ssh root@106.75.26.38//连接服务器

scp .\real-nuxtjs.zip root@106.75.26.38:/root/real-nuxtjs//把发布包传到服务器

unzip real-nuxtjs//解压压缩包

npm i


npm install --global pm2 下载

pm2 start npm -- start  启动

pm2 list
pm2 start
pm2 stop
pm2 reload重载
pm2 restart重启
pm2 delete删除


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