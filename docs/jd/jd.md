# JD_tools
## python 执行
#### 执行python中的jd任务
```
python /Users/not_every/AllProjects/chao/jd_python/script_python/index.py  
```
#### 查看京豆信息
```
python /Users/not_every/AllProjects/chao/jd_python/script_python/count_bean.py  
```
# jd
## nodejs 执行

#### 更新shell脚本
```
bash /Users/not_every/AllProjects/chao/jd_nodejs/sh_nodejs/git_pull.sh
```
#### 导出互助码清单
```
bash /Users/not_every/AllProjects/chao/jd_nodejs/sh_nodejs/export_sharecodes.sh
```
#### 然后修改
```
/Users/not_every/AllProjects/chao/jd_nodejs/config/config.sh
```
#### 执行nodejs中的jd任务
```
python /Users/not_every/AllProjects/chao/jd_python/index_python/control.py  
```
```
python /Users/not_every/AllProjects/chao/jd_python/index_python/controljob.py  
```
```
python /Users/not_every/AllProjects/chao/jd_python/index_python/controltimes.py  
```
#### controltext文件(将要执行的任务列表)

#### [删除优惠券](./jd_scripts/scripts/jd_delCoupon.js)
```
bash /Users/not_every/AllProjects/chao/jd_nodejs/sh_nodejs/jd.sh jd_delCoupon now
```
#### [注销京东会员卡](./jd_scripts/scripts/jd_unbind.js)
```
bash /Users/not_every/AllProjects/chao/jd_nodejs/sh_nodejs/jd.sh jd_unbind now
```
#### [取关京东店铺和商品](./jd_scripts/scripts/jd_unsubscribe.js)
```
bash /Users/not_every/AllProjects/chao/jd_nodejs/sh_nodejs/jd.sh jd_unsubscribe now
```

#### 更新git项目
```
cd /Users/not_every/AllProjects/chao/JD-scripts
本地与服务器端同步
git pull

复制更新的脚本到指定文件夹下
python /Users/not_every/AllProjects/chao/jd_python/tools_python/update_script.py  
```