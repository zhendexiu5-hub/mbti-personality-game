# 心境地图

一个静态网页人格探索游戏。玩家通过 32 幕奇幻剧情选择生成四维偏好结果，并获得带有剧情演出的自我理解报告。

## 本地运行

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

打开：

```text
http://127.0.0.1:5173/
```

## 测试

```powershell
npm test
```

## 部署

本仓库是纯静态站，可直接部署到 Cloudflare Pages。根路径 `/` 和 `/mbti-game.html` 都可以打开游戏。
