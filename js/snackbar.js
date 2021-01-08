// 临时公告
// Snackbar.show({
//     text: '取消了浏览器订阅通知哦',
//     textColor: '#8FBC8F',
//     duration: 7000,
//     pos: 'top-right',
//     actionText: '知道了',
//     actionTextColor: '#4CAF50',
// });

// function aidaori(){
//     var aidaoriarr=new Array("0405","0512","0918","1213");
//     var mydate = new Date();
//     var str = "";// + mydate.getFullYear();
//     var mm = mydate.getMonth()+1;
//     if(mydate.getMonth()>9){
//       str += mm;
//     }else{
//       str += "0" + mm;
//     }
//     if(mydate.getDate()>9){
//       str += mydate.getDate();
//     }else{
//       str += "0" + mydate.getDate();
//     }
//     if(aidaoriarr.indexOf(str)>-1){
//         return 1;
//     }else{
//         return 0;
//     }
// }

// if(aidaori()){
//     $("html").css({
//         "filter":"gray !important",
//         "filter":"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",
//         "filter":"grayscale(100%)",
//         "-webkit-filter":"grayscale(100%)",
//         "-moz-filter":"grayscale(100%)",
//         "-ms-filter":"grayscale(100%)",
//         "-o-filter":"grayscale(100%)" 
//     });
//     Snackbar.show({
//         text: '如果大家有时间，希望大家去公祭网敲敲钟,献上花圈，点上一支蜡烛。今天，三十万南京人要回家',
//         textColor: '#D3D3D3',
//         backgroundColor: '#696969',
//         duration: 15000,
//         pos: 'bottom-center',
//         actionText: '前往悼念',
//         actionTextColor: '#4CAF50',
//         onActionClick: function (element) {
//             //Set opacity of element to 0 to close Snackbar
//             $(element).css('opacity', 0);
//             window.open('http://www.cngongji.cn/', 'newwindow', 'height=480, width=720, left='+ (screen.availWidth-720)/2 +',top=' + (screen.availHeight-480)/2 + ';toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no')
//         }
//     });
// }