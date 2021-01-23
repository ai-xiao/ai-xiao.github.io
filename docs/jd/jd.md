## 通过reposync方式进行代码同步
-----------------

项目原址 [链接](https://github.com/weizz157/jd)

## How
-----------------

**创建新仓库**

1. 点击创建自己的仓库 [链接](https://github.com/new)

2. 填入`Repository name`后点击最下方的`Create repository`即可完成创建

**自己创建工作流**

1. 在创建完成页面点击Actions再点击set up a workflow yourself

2. 复制https://github.com/sazs34/MyActions/raw/master/.github/workflows/repo-sync.yml 里面的代码

3. 复制完毕后直接点击右上角的Start commit后直接Commit new file即可

**申请PAT**

1. 点击 GitHub 用户设置页面 最下方的Developer setting ，然后选择 Personal access tokens(点击快捷到达指定页面) 来生成一个 token，把 repo和workflow 两部分勾上即可。

2. 点击最下面的创建按钮后，图示部分即为你的PAT(图示的已经删除了,仅为演示)，复制下来马上就要使用了

**填写PAT到Secrets**

1. 申请完毕后，在分支中点击Settings-Secrets-New secret

2. name填PAT，Value填入上方申请到的PAT,保存即可

**手动触发一次代码同步**

点击Actions,找到指定的脚本,按图示运行一次

等待两分钟左右,能够发现代码全部同步过来了

**Enjoy**

操作到这一步,表示您已经全部完成了

剩下的去配置cookie等secrets就好了

-----------------