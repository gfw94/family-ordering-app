# 极空间 Docker 部署步骤

这套方案用于在极空间上长期运行家庭点菜项目，并通过 GitHub 作为发布源，在容器启动时自动同步最新代码。

## 一、准备条件

这版 Compose 不要求你先把整套项目文件上传到极空间。

你只需要准备：

- 一个可用的 GitHub 仓库地址
- 当前项目的 `docker-compose.zspace.yml`
- 一个用于保存持久化数据的极空间目录，例如 `/sata1/my/data/docker/family-ordering`

容器首次启动时，会自动从 GitHub 下载当前项目代码到持久化目录里的 `app/` 子目录。
以后你只要把本地改动推到 GitHub，极空间容器重启时就会同步到最新版本。

## 二、创建容器

如果极空间支持 Compose 或项目编排：

1. 在 Docker 应用中新建项目。
2. 项目名称填写 `family-ordering`。
3. 存储位置填写一个持久化目录，例如 `/sata1/my/data/docker/family-ordering`。
4. 在编辑器中粘贴 `docker-compose.zspace.yml` 的内容。
5. 保持“创建项目后立即启动”为开启。
6. 点击创建。

如果你后面改代码并推到 GitHub，只需要在极空间里重启项目，或者直接重建项目一次，容器就会重新拉取最新代码。

## 五、发布流程

每次版本发布按这个顺序走就行：

1. 在本地修改代码并确认能跑通。
2. `git add`、`git commit`、`git push` 到 GitHub。
3. 在极空间里重启 `family-ordering` 项目。
4. 容器启动后会从 GitHub main 重新下载代码并启动服务。
5. 用浏览器确认新版本是否已经生效。

如果你想强制拉取最新版本，直接在极空间里删除 `app/` 目录后再重启一次项目也可以。

最短命令可以直接用这三行：

```bash
git add .
git commit -m "release: sync latest"
git push origin main
```

## 三、本地验证

启动后，先在极空间所在局域网内访问：

- `http://极空间局域网IP:8000`

确认以下几点：

1. 页面能打开。
2. 管理后台可以进入。
3. 打开管理后台时提示已检测到 SQLite 后端。
4. 保存共享配置后，存储目录下的 `data/main.db` 会自动创建。

## 四、后续公网接入

如果你有自己的域名和可达公网地址，最直接的做法是：

1. 把域名的 `A` 记录指向你的公网 IP。
2. 路由器或防火墙放行 `80` 和 `443`。
3. 在部署目录使用 [docker-compose.public.yml](docker-compose.public.yml) 和 [Caddyfile.public](Caddyfile.public) 启动。

示例环境变量：

- `APP_DOMAIN=你的域名`
- `CADDY_EMAIL=你的邮箱`

然后访问：

- `https://你的域名`

如果你没有公网 IP，再考虑 Cloudflare Quick Tunnel、Cloudflare Tunnel、Tailscale 之类的内网穿透方案，把外网入口转到 `http://极空间局域网IP:8000`。