# RuoYi-Cloud-Nacos

> JeeThink-Cloud 是一个 Java EE 企业级快速开发平台，基于经典技术组合（Spring Boot、Spring Cloud & Alibaba、OAuth2、Vue、Element-UI），内置模块如：部门管理、角色用户、菜单及按钮授权、数据权限、系统参数、日志管理、代码生成等。在线定时任务配置；支持集群，支持多数据源。

------
[在线文档]: http://jeethink.vip/doc/jeethink-cloud/	"文档"
在线文档 [链接](http://jeethink.vip/doc/jeethink-cloud/)

GIT [链接](https://git.code.tencent.com/chao-jeethink-cloud/jeethink.git)

技术选型
采用前后端分离的模式，微服务版本前端(基于 JeeThink-Vue)。
后端采用Spring Boot、Spring Cloud & Alibaba、OAuth2。
注册中心、配置中心选型Nacos，为工程瘦身的同时加强各模块之间的联动。
流量控制框架选型Sentinel。
权限认证使用OAuth2，实现了多终端认证系统，可控制业务模块权限。
项目分包明确，规范微服务的开发模式，使包与包之间的分工清晰。

1. 系统环境

   Java EE 8
   Servlet 3.0
   Apache Maven 3

2. 主框架

   Spring Boot 2.2
   Spring Cloud Hoxton.SR3
   Spring Framework 5.1
   Spring Security 5.1

3. 持久层

   Apache MyBatis 3.4
   Hibernate Validation 6.0
   Alibaba Druid 1.1

4. 视图层

   Vue 2.6
   Axios 0.18
   Element UI 2.11

------

### mysql
> MySQL是一种开放源代码的关系型数据库管理系统（RDBMS），使用最常用的数据库管理语言--结构化查询语言（SQL）进行数据库管理。

- 
    ```
    brew services list
    启动
    brew services start mysql@5.7 
    停止
    brew services stop mysql@5.7 
    ```
    
------

### nacos
> Nacos 支持基于 DNS 和基于 RPC 的服务发现（可以作为springcloud的注册中心）、动态配置服务（可以做配置中心）、动态 DNS 服务。

- 
    ``` 
    单机启动
    /Users/not_every/WorkTools/nacos/bin/startup.sh  -m standalone
    关闭
    /Users/not_every/WorkTools/nacos/bin/shutdown.sh 
    访问地址:http://localhost:8848/nacos 
    默认账户密码:nacos/nacos
    ```

------

### sentinel
> Sentinel 是面向分布式服务架构的高可用流量防护组件，主要以流量为切入点，从限流、流量整形、熔断降级、系统负载保护、热点防护等多个维度来帮助开发者保障微服务的稳定性。

-    
    ```
    启动
    /Users/not_every/WorkTools/sentinel-1.7.0/start-sentinel.sh 
    后台启动
    nohup /Users/not_every/WorkTools/sentinel-1.7.0/start-sentinel.sh &
    后台关闭
    lsof -i:8718
    ps -ef | grep sentinel
    访问地址:http://127.0.0.1:8718
    默认账户密码:sentinel/sentinel
    ```
    
------

### redis
> Redis（Remote Dictionary Server )，即远程字典服务，是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。

- 
    ```
    brew services list
    启动
    brew services start redis
    停止
    brew services stop redis
    ```
    
------

### 打开运行基础模块（启动没有先后顺序）

- JeeThinkGatewayApplication （网关模块 必须）

- JeeThinkAuthApplication （认证模块 必须）

- JeeThinkSystemApplication （系统模块 必须）

- JeeThinkMonitorApplication （监控中心 `可选`）

- JeeThinkGenApplication （代码生成 `可选` ）

- JeeThinkJobApplication （定时任务 `可选` ）

  ```
  提示
  Admin控制台-吉想服务状态监控（默认账户密码 root/670980756）,在nacos中配置
  ```
  
------

### showdoc
> 一个非常适合IT团队的在线API文档、技术文档工具 [showdoc](https://www.showdoc.com.cn)

- 
    ```
    // 执行showdoc_api.sh文件，扫描指定目录下存在showdoc相关注释，生成api文档
    // showdoc_api_demo为注释demo
    ./showdoc_api.sh /Users/not_every/AllProjects/chao/jeethink-cloud/jeethink
    ```
    
------

### 后端结构

- 
    ```text
    com.jeethink     
    ├── jeethink-ui              // 前端框架 [80]
    ├── jeethink-gateway         // 网关模块 [8080]
    ├── jeethink-auth            // 认证中心 [9200]
    ├── jeethink-api             // 接口模块
    │       └── jeethink-api-system                          // 系统接口
    ├── jeethink-common          // 通用模块
    │       └── jeethink-common-core                         // 核心模块
    │       └── jeethink-common-datascope                    // 权限范围
    │       └── jeethink-common-log                          // 日志记录
    │       └── jeethink-common-redis                        // 缓存服务
    │       └── jeethink-common-security                     // 安全模块
    │       └── jeethink-common-swagger                      // 系统接口
    ├── jeethink-modules         // 业务模块
    │       └── jeethink-system                              // 系统模块 [9201]
    │       └── jeethink-gen                                 // 代码生成 [9202]
    │       └── jeethink-job                                 // 定时任务 [9203]
    ├── jeethink-visual          // 图形化管理模块
    │       └── jeethink-visual-monitor                      // 监控中心 [9100]
    ├──pom.xml                // 公共依赖
    ```
