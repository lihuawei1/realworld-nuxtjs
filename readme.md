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

rm -rf 文件夹//删除文件夹

npm i

npm run start







npm install --global pm2 下载

pm2 start npm -- start  启动

pm2 list
pm2 start
pm2 stop
pm2 reload重载
pm2 restart重启
pm2 delete删除





自动化部署
在.githup文件夹中添加workflows/main.yaml文件夹
添加pm2.config.json 文件
git init //初始化仓库
git add .
git status
git branch -M main//切换到main分支
git remote rm origin //删除远端仓库
git remote add origin https://github.com/lihuawei1/realworld-nuxtjs.git  //连接远端仓库
git push -u origin main //代码推送到远端仓库

在githup上settings ->developer setting ->personal access tokens 生成新的token

在项目仓库 setting->secrets配置Repository secrets  HOST:主机ip  PASSWORD：密码  PROT：22 TOKEN  USERNAME：root

修改代码
git add .
git commit -m ''
git tag v0.0.1
git tag
git push origin v0.0.1
//推送成功，查看仓库actions位置
部署成功



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