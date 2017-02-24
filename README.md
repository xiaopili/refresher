`
var ref = new refresher({
	id:"wrapper",               //需要注册插件的元素（内部需直接包含ul li）
	pullDownAction:Refresh,     //下拉刷新的回调(可不传，则不显示效果)                                                       
	pullUpAction:Load,          //上拉加载的回调
	topDistance:1.173333,       //顶部插入元素的高度和
	info: {
		"pullDownLable": "下拉刷新...", 
		"pullingDownLable": "放开刷新...",
		"pullUpLable": "上拉加载更多...",
		"pullingUpLable": "放开加载更多...",
		"loadingLable": "正在加载..."
	} 																			
})																																					
function Refresh() {																
	setTimeout(function () {
		alert('23333');																					 
		ref.wrapper.refresh(); //对象名称为id   //清除动作（主意wrapper为注册的元素）
	}, 800);
}

function Load() {
	setTimeout(function () {
		alert('23333')
		ref.wrapper.refresh(); //对象名称为id   //清除动作
		ref.noMore('没有更多了...');
	}, 800);	
}

`