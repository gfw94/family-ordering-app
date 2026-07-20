# Cloudflare Quick Tunnel 临时测试

这套方案适合先验证“外网是否能直接打开”。它不需要公网 IP，也不需要自己申请域名。

## 特点

- 免费
- 不需要注册 Cloudflare 账户
- 不需要开放 80/443
- 重启后地址通常会变化

## 启动方式

在 `14_web_ordering_app` 目录下启动这个编排：

- [docker-compose.cloudflare.yml](docker-compose.cloudflare.yml)

启动后查看 `cloudflared` 容器日志，就会出现一个 `trycloudflare.com` 地址。

## 访问地址

拿到日志里的地址后，直接在外网浏览器打开即可。这个地址会转发到容器里的 `8000` 端口。

## 适用场景

- 先测你和家人能不能在外网打开
- 先测登录、页面加载、分享链接是否正常
- 不适合长期稳定使用