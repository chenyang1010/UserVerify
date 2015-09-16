/*
 * 需要通过Javascript代码来做两件事情
 * 1.button被按下的时候，需要将文本框中的数据获取到，然后发送给服务器端，最后接受服务器返回的数据，填充到我们预留的div中，这样用户就可以看到结果
 * 2.文本框上，用户按键之后，需要判断文本框中的内容是否为空，如果不为空，红色的边框和背景图就应该取消，否则保留
 * */

/*
 * 需要在页面装载完成是注册上这些工作
 * */


$(document).ready(function(){
	    var userNameNode = $("#userName");
		$("#verifyButton").click(function() {
			   var userName = userNameNode.val();
                if(userName=="" || userName==null){
				    alert("userName cannot be null");
				} else {
					$.get("httP://12.12.45.44/path/log.action?userName=" + encodeURI(userNameVal),null,function(response) {
						$("#result").html(response);}
					);
				}
		    }
		);
		userNameNode.keyup(function(){
			if(userNameNode.val() == "") {
			    userNameNode.addClass("userText");
		    } else {
				userNameNode.removeClass("userText");
			}
		}
		);
   }
);

