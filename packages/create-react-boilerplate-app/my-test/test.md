# create-react-boilerplate-app 测试点列举 #

1. create-react-boilerplate-app  &lt; project-name &gt; 正常运行，即运行过程无报错

2. 上一步执行完成必须生成以下文件目录

    ```sh
    my-app/
      .gitignore
      node_modules/
      package.json
      public/
        favicon.ico
        index.html
      src/
        #自动创建
        .redcers.js
        #自动创建
        .routes.js
        #应用入口js文件
        index.jsx 
        #根据选项创建。
        #i18n文件夹
        locale/
        #css and image
        style/ 
        #layout和页面视图，您的主要编码位置。
        view/
          layout/
            main/
              index.jsx
              _route.js
              #自动生成
              .child_routes.js
          #for example
          about/
            index.jsx
            _route.js
            #redux reducer编码区
            #通过npm run ac，reducer函数会被读取到src/.reducers.js。
            reducer.js
    ```
  3. package.json 内容正常