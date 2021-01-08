---
translate_title: ''
---
// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/logo.png");
        document.title = '(つェ⊂) 我藏好了哦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/ccknbc-backup/cdn/logo/favicon.png");
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});

if((location.href==="https://ccknbc.github.io/"))
    {
        Snackbar.show({
                pos: 'bottom-center',
                text: '🔔 您当前访问的是 <a href="http://blog.ccknbc.cc"><font color="#4CAF50"> 博客 </font></a> - <font color="#8fbc8f">Github</font> 镜像站</a>',
                actionText: '🚀<a href="http://blog.ccknbc.cc"><b>跳转</b></a>',
                duration: '15000',       
            });
}


if((location.href==="https://ccknbc.gitlab.io/"))
{
    Snackbar.show({
            pos: 'bottom-center',
            text: '🔔 您当前访问的是 <a href="http://blog.ccknbc.cc"><font color="#4CAF50"> 博客 </font></a> - <font color="#8fbc8f">Gitlab</font> 镜像站</a>',
            actionText: '🚀<a href="http://blog.ccknbc.cc"><b>跳转</b></a>',
            duration: '15000',
        });
}

if((location.href==="https://ccknbc.gitee.io/"))
{
    Snackbar.show({
            pos: 'bottom-center',
            text: '🔔 您当前访问的是 <a href="http://blog.ccknbc.cc"><font color="#4CAF50"> 博客 </font></a> - <font color="#8fbc8f"> Gitee</font> 镜像站</a>',
            actionText: '🚀<a href="http://blog.ccknbc.cc"><b>跳转</b></a>',
            duration: '15000',  
        });
}

if((location.href==="https://ccknbc.netlify.app/"))
{
    Snackbar.show({
            pos: 'bottom-center',
            text: '🔔 您当前访问的是 <a href="http://blog.ccknbc.cc"><font color="#4CAF50"> 博客 </font></a> - <font color="#8fbc8f">Netlify</font> 镜像站</a>',
            actionText: '🚀<a href="http://blog.ccknbc.cc"><b>跳转</b></a>',
            duration: '15000',
        });
}

if((location.href==="https://ccknbc.now.sh/"))
{
    Snackbar.show({
            pos: 'bottom-center',
            text: '🔔 您当前访问的是 <a href="http://blog.ccknbc.cc"><font color="#4CAF50"> 博客 </font></a> - <font color="#8fbc8f">Vercel</font> 镜像站</a>',
            actionText: '🚀<a href="http://blog.ccknbc.cc"><b>跳转</b></a>',
            duration: '15000',  
        });
}