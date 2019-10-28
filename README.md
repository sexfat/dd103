
# 安裝sass
https://sass-lang.com

`npm install -g sass`


# vscode 安裝 live sass
https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass

# vscode sass 套件設定

```json
"liveSassCompile.settings.formats":[
        // This is Default.
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": null
        },
        // You can add more
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "/dist/css"
        },
        // More Complex
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "~/../css/"
        }
    ]
```

https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md