// 倒计时
window.onload = function() {
	// 绿 banner 关闭
	$(".toptop .icon_top-close").click(function() {
		$(this).parents(".toptop").slideUp();
	});
	// 查找元素
	var oTime = document.querySelector(".content .box-left .timing");

	function CountDown() {
		// 设置未来的时间  2019.9.10
		var MaxTime = new Date(2019, 8, 10, 0, 0, 0);
		var now = new Date();
		// date对象减法运算,结果是毫秒数
		var rest = MaxTime - now;
		var msec = parseInt(rest % 1000);
		var sec = parseInt(rest / 1000 % 60);
		var min = parseInt(rest / (1000 * 60) % 60);
		var hour = parseInt(rest / (1000 * 60 * 60) % 24);
		var day = parseInt(rest / (1000 * 60 * 60 * 24) % 365);
		oTime.innerText = "还剩 " + day + " 天 " + hour + " 小时 " + min + " 分 " + sec + " 秒付完订单全款 ";
	}
	CountDown();
	var timer;
	timer = setInterval(function() {
		CountDown();
	}, 1)
	
	// 更多
	$('.more-ways').click(function () {
		$('.cover').show();
		$(this).hide();
	})
	// 遮罩
	$('.intro').click(function () {
		// $('.covers').slideDown(1000);
		$('.black').show(500);
		$('.covers').delay(500).animate({
			top: 100
		},1000)
	})
	$('.close').click(function () {
		$('.covers').hide();
		$('.black').hide();
	})
	// 支付成功
	$('.content .bank-list li').click(function () {
		setTimeout(function () {
			$('.success').show();
		},1000)
		setTimeout(function () {
			$('.success').hide();
		},3000)
	})
	
	
}
