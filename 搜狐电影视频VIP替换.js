// ==UserScript==
// @name		搜狐电影视频VIP替换
// @namespace	http://tampermonkey.net/
// @version		1.0
// @description	直接在视频页查看会员视频
// @author		申杰
// @match		*film.sohu.com/*
// @grant		none
// @run-at		document-start
// @require		https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    // 替换播放器
    function replace_original_player() {
        // 生成替换源
        var current_url = window.location.href;
        var request_url = '<iframe id="play_iframe" allowfullscreen="true" ' +
			'style="background-color: #000;" width="70%" height="100%" ' +
			'allowtransparency="true" frameborder="0" scrolling="no" ' +
			'src="http://player.jidiaose.com/supapi/iframe.php?v=' + current_url + '"></iframe>';
		$('.player-content').empty().html(request_url);
    };
    function clear_html(){
        $(".play-end-pop").remove();
    }
    setTimeout(function(){
		replace_original_player();
	}, 1000);
    setTimeout(function(){
		clear_html();
	}, 1000);
})();