// // 配置require.js
// requirejs.config({
// 	baseUrl: "js/lib",
// 	waitSeconds: 200,
// 	shim: {
// 		// shim 的英文含义是做兼容性处理
// 		// 如果，需要require shim-0 模块，会先加载shim-1
// 		// 因为下面的代码规定了shim-0的依赖是shim-1
// 		'jQuery': {
// 			// 手动告诉require如何找依赖，管理非AMD规范代码
// 			// depths dependencies
// 			deps: ['jquery-3.3.1.min.js']
// 		}
// 	}
// })
//
// // requirejs 可以直接使用的原因是 它挂在了window下面
// // 加载入口模块
//
// require(['jquery-3.3.1.min', 'Carousel', 'GoTop', 'Waterfall_Ajax'], function (jQuery, Carousel, GoTop, Waterfall_Ajax) {
// 	console.log(Carousel)
// 	Carousel.init(document.querySelector('.carousel-wrapper'))
// 	console.log(GoTop)
// 	GoTop.init()
// 	console.log(Waterfall_Ajax)
// 	Waterfall_Ajax.init(document.querySelector('.ct-waterfull'))
// })

let Carousel = require('./lib/Carousel')
console.log(Carousel)
Carousel.init(document.querySelector('.carousel-wrapper'))

let GoTop = require('./lib/GoTop')
console.log(GoTop)
GoTop.init()

let Waterfall_Ajax = require('./lib/Waterfall_Ajax')
console.log(Waterfall_Ajax)
Waterfall_Ajax.init(document.querySelector('.ct-waterfull'))

