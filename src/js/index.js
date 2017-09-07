


var Music = function(){
	this.init()
	this.bind()
}
var proto =  Music.prototype
proto.init = function(){
	this.container = document.querySelector('.container')
	this.loginbtn = document.querySelector('#loginbtn')
	this.avatar = document.querySelector('#avatar')
	this.volumes = document.querySelector('#volume>i')
	this.loginCt = document.querySelector('.loginCt')
	this.panelItem = document.querySelector('.panel-ct li')

	this.thumb = document.querySelector('#thumb-btn')
	this.collect = document.querySelector('#collect-btn')
	this.load = document.querySelector('#load-btn')
	this.review = document.querySelector('#review-btn')
	this.loop = document.querySelector('#loop')

	this.imgCt = document.querySelector('.img-ct')
	this.lrcCt = document.querySelector('.lrcCt')

	this.preplay = document.querySelector('#preplay')
	this.nextplay = document.querySelector('#nextplay')
	this.pause = document.querySelector('#pause')
	this.listShowBtn = document.querySelector('#listshow')
	this.musicList = document.querySelector	('#musicList')

	this.perc = document.querySelector('#perc')

}

proto.bind = function(){
	var _loginBtn = this.loginbtn,
		_listShowBtn = this.listShowBtn,
		_loginCt = this.loginCt,
		_musicList = this.musicList,
		_container = this.container;
		_panelItem = this.panelItem
		_imgCt = this.imgCt
		_lrcCt = this.lrcCt
	var that = this

	this.addEvent(_loginBtn, 'click', function(e){
		e.stopPropagation();
		_musicList.style.bottom = '-42%';
		_loginCt.style.left = '0';
	})
	this.addEvent(_listShowBtn, 'click', function(e){
		e.stopPropagation();
		_loginCt.style.left = '-62%';
		_musicList.style.bottom = '0';
	})

	this.addEvent(_loginCt, 'click', function(e){
		e.stopPropagation();
		return ;
	})
	this.addEvent(_musicList, 'click', function(e){
		e.stopPropagation();
		return;
	})
	this.addEvent(_container, 'click', function(e){
		e.stopPropagation();
		_loginCt.style.left = '-62%';
		_musicList.style.bottom = '-42%';
	})

	// 改变icon
	this.addEvent(this.thumbs, 'click', function(){

		that.thumbs.classList.add('vol-hide')
	})

	this.addEvent('_imgCt', 'click', function(e){
		e.stopPropagation()
		// console.log('clicked _imgCt')
		_imgCt.classList.add('img-hide')
		_lrcCt.classList.remove('lrc-hide')
	})
	this.addEvent('_lrcCt', 'click', function(e){
		// e.stopPropagation()
		// console.log('clicked _lrcCt')
		_imgCt.classList.remove('img-hide')
		_lrcCt.classList.add('lrc-hide')
	})

}

proto.addEvent = function (node, type, handler) {
	if (!node) return false;
	if (node.addEventListener) {
		node.addEventListener(type, handler, false);
		return true;
	} else if (node.attachEvent) {
		node['e' + type + handler] = handler;
		node[type + handler] = function() {
			node['e' + type + handler](window.event);
		};
		node.attachEvent('on' + type, node[type + handler]);
		return true;
	}
	return false;

}
new Music(document.querySelector('.container'))