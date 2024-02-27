$(function(){
	function func1(){
		if(!document.getElementById('riqi')) return;
		function showLeftTime() {
			var now = new Date(),
				year = now.getFullYear(),
				month = now.getMonth() + 1,
				day = now.getDate(),
				myday = now.getDay();
			var weekday = new Array(7);
			weekday[0] = "日";
			weekday[1] = "一";
			weekday[2] = "二";
			weekday[3] = "三";
			weekday[4] = "四";
			weekday[5] = "五";
			weekday[6] = "六";
			document.getElementById('riqi').innerHTML = "" + year + "年" + month + "月" + day + "日 " + "星期" + weekday[myday] + '';
		}
		showLeftTime();
		var timeID = setInterval(showLeftTime, 1000); //一秒刷新一次显示时间
	}
	func1();

	//非一级页面导航nav添加on
	function func6(arg,arg1){
		var lmcode = $.trim($(arg1).text());
		$(arg).each(function() {
			var lmmc = $.trim($(this).find("a").find("span").text());
			if(lmcode.indexOf(lmmc) != -1) {
				$(this).find("a").addClass('on').siblings().find("a").removeClass('on');
			}
		});
	}
	func6('.fl-main li','.crumbs');
	func6('.czzj_left .cr_main ul li','.crumbs');

	function func5(arg){
		var lmcode = $('meta[name="ColumnName"]').attr('content');
		$(arg).each(function() {
			var lmmc = $.trim($(this).text());
			if(lmcode == lmmc) {
				$(this).addClass('dis').siblings().removeClass('dis');
			}
		})
	}
	func5('.navbar li');

	//非一级页面导航nav添加on
	function func4(arg,arg1){
		var lmcode = $.trim($(arg1).text());
		$(arg).each(function() {
			var lmmc = $.trim($(this).text());
			if(lmcode.indexOf(lmmc) != -1) {
				$(this).addClass('dis').siblings().removeClass('dis');
			}
		});
	}
	func4('.navbar li','.crumbs');

	// 友情链接切换
        //$('.yqlj-lists').css('display','none');

	$(".yqlj-nav > ul li:not(:first-child)").mouseover(function() {
		if($(this).text().indexOf('12309') != -1){
			return;
		}
		$(this).addClass('dis').siblings().removeClass('dis');
		var i = $(this).index() - 1;
		$(".yqlj-lists").children().eq(i).addClass('dis').siblings().removeClass('dis');
	})
         $(".yqlj-nav > ul li:not(:first-child)").mouseover(function(){
           // $('.yqlj-lists').css('display','block');
         })
         $('.yqlj').mouseleave(function(){
             //$('.yqlj-lists').css('display','none');
        })
	// fixed
	$(".fixed li").mouseover(function() {
		$(this).css('marginLeft', '0');
	})
	$(".fixed li").mouseout(function() {
		$(this).css('marginLeft', '64px');
	})

	/*$('.sxts_tip').click(function(){
           alert('7个工作日内上线。');
        })*/

		//$('#weather').click(function (event) {  
		//	event.preventDefault();  
		//});
	  
		$('#weather').hover(function(event){
			    
			event.preventDefault(); 
			
		});
		
		
	for (var i = 0; i < document.links.length; i++) {
		var url = document.links[i].href.toLowerCase();
		if (url.indexOf("http://localhost") == -1 && url.indexOf("linzhi.gov.cn") == -1&& url.indexOf("ftp://58.16.65.217:90/") == -1&& url.indexOf("lz.xzzwfw.gov.cn") == -1&& url.indexOf("192.168.3.33") == -1&& url.indexOf("javascript:") == -1 && url != "#" && !document.links[i].onclick) {
			document.links[i].onclick = function () {
				return confirm("您将离开林芝市人民政府网，确定继续吗？")
			};
		}
	}
        

});
// 设置为主页   调用======>SetHome(this,window.location)
function SetHome(obj, vrl) {
	try {
		obj.style.behavior = 'url(#default#homepage)';
		obj.setHomePage(vrl);
	} catch(e) {
		if(window.netscape) {
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			} catch(e) {
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage', vrl);
		} else {
			alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + vrl + "点击确定。");
		}
	}
}
// 加入收藏 兼容360和IE6    调用=====>shoucang(document.title,window.location)
function shoucang(sTitle, sURL) {
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch(e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch(e) {
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}