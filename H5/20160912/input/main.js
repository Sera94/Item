

(function(){
	
    //对象选择器
    function $sel(id,tabname){
      if(id!="" && tabname!=""){
        var tem_obj=document.getElementById(id);
        return tem_obj.getElementsByTagName(tabname);
      }else if(id!=""){
        return document.getElementById(id);
      }else{
        return document.getElementsByTagName(tabname);
      }
    }
       
    //电话号码验证
    function isnum(obj){
      var reg=/^1[0-9]{10}/;
      if(!reg.test(obj.value)){
        alert("请正确填写手机号！");
        obj.value="";
      }
    }
       
    //验证邮件格式
    function ismail(obj){
      var reg=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
      if(!reg.test(obj.value)){
        alert("请正确填写邮箱！");
        obj.value="";
      }
    }
       
    //验证用户名格式
    function isname(obj){
      var reg=/^[\u4e00-\u9fa5]{2,4}$/;
      if(!reg.test(obj.value)){
        alert("请正确填写姓名！姓名为两到四个汉字。");
        obj.value="";
      }
    }
 
    //初始化验证
    function init(){
        //注册一个失去焦点的事件
        $sel("phone","").onblur=function(){
          isnum(this);
        }
           
        $sel("mail","").onblur=function(){
          ismail(this);
        }
           
        $sel("username","").onblur=function(){
          isname(this);
        }
    }  
	
})();
