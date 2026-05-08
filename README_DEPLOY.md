# 免费部署说明

这个项目是纯静态网页游戏：

- 入口文件：`index.html`
- 样式：`style.css`
- 脚本：`app.js`
- 资源目录：`assets/`

所以它**不需要后端服务器**，最适合部署到免费静态托管平台。  
最省事的两个方案是：

1. `Cloudflare Pages`
2. `GitHub Pages`

## 方案一：Cloudflare Pages（最推荐）

适合你想要：

- 最快上线
- 免费 HTTPS
- 访问速度好
- 后续还能接自定义域名

### A. 最快方式：直接拖拽上传

1. 打开 Cloudflare Pages 控制台
2. 选择 `Create application`
3. 选择 `Pages`
4. 选择 `Drag and drop your files`
5. 把整个项目文件夹里的这些内容一起上传：
   - `index.html`
   - `style.css`
   - `app.js`
   - `assets/`
6. 部署完成后，你会得到一个 `*.pages.dev` 地址

注意：

- 这种方式最方便
- 但之后**不能把这个同一个项目切换成 Git 自动部署**
- 如果以后想接 Git 自动发布，需要新建一个 Pages 项目

### B. 更推荐的长期方式：接 GitHub 自动部署

1. 先把这个项目上传到 GitHub 仓库
2. 打开 Cloudflare Pages
3. 选择 `Create application > Pages > Connect to Git`
4. 选择你的 GitHub 仓库
5. 这个项目是纯静态项目，所以构建参数这样填就行：
   - `Framework preset`: `None`
   - `Build command`: 留空
   - `Build output directory`: `/`
6. 点击部署

以后你只要 `git push`，网站就会自动更新。

## 方案二：GitHub Pages（最简单、最稳）

适合你想要：

- 完全靠 GitHub
- 不接第三方平台
- 代码和网站放一起管理

### 步骤

1. 新建一个 GitHub 仓库
2. 把当前项目上传到仓库根目录
3. 打开仓库 `Settings`
4. 左侧进入 `Pages`
5. 在 `Build and deployment` 里选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/(root)`
6. 保存后，等待 GitHub 发布

发布地址通常会是：

`https://你的用户名.github.io/仓库名/`

## 方案三：Netlify（也很方便）

适合你想要：

- 拖拽就能发
- 或者想接 Git 自动部署

### 最快方式

1. 打开 Netlify
2. 进入拖拽部署页面
3. 直接把项目文件夹拖进去
4. 等待生成站点地址

如果后续要更新：

- 改完本地文件
- 再拖一次更新后的项目目录

## 我对这个项目的建议

### 如果你现在只想“先发出去给别人玩”

用 `Cloudflare Pages` 的拖拽上传最省事。

### 如果你接下来还会频繁改剧情、图片和分支

用 `Cloudflare Pages + GitHub` 或者 `GitHub Pages` 更合适。

我更推荐：

1. 先把项目传到 GitHub
2. 再接 `Cloudflare Pages`

这样以后每次改完剧情，只要推送代码就能自动上线。

## 部署前要确认的事

### 1. 上传时要包含整个 `assets/` 目录

少了图片资源，游戏会正常打开，但场景图会丢失。

### 2. 本游戏存档使用 `localStorage`

这意味着：

- 本地 `file:///` 下的存档
- 部署后线上域名下的存档

是**两套独立数据**。

也就是说，部署后第一次访问会像新游戏，不会自动继承你本地浏览器里 `file:///` 的存档。

### 3. 这是静态站点，不需要：

- Node 服务
- 数据库
- Linux 云主机
- PM2
- Docker

## 如果你想进一步做到“一键发布”

下一步可以继续加：

- Git 初始化和首个提交
- GitHub 仓库推送
- Pages 配置整理
- 自定义域名绑定说明

如果你要，我可以直接继续帮你把这个项目整理成最适合 `Cloudflare Pages` 或 `GitHub Pages` 发布的版本。
