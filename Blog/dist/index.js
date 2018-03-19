/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/lib/Carousel.js":
/*!****************************!*\
  !*** ./js/lib/Carousel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('loading carousel done')\n\nmodule.exports = (function () {\n\tfunction _Carousel(carouselContainer) {\n\t\tthis.ct = carouselContainer\n\t\tthis.init()\n\t\tthis.bind()\n\t\tthis.autoClick()\n\t}\n\n\t_Carousel.prototype.init = function () {\n\t\t// Dom\n\t\tthis.carousel = this.ct.querySelector('.carousel')\n\t\tthis.carouselLis = this.ct.querySelectorAll('.carousel > li')\n\t\tthis.btnLeft = this.ct.querySelectorAll('.btn')[0]\n\t\tthis.btnRight = this.ct.querySelectorAll('.btn')[1]\n\t\tthis.bottomBarBtns = this.ct.querySelectorAll('.bottom-bar > li')\n\t\t// 每页的宽度\n\t\tthis.perCarouselLiWidth = this.carouselLis[0].clientWidth\n\t\t// 当前页index\n\t\tthis.currentPageIndex = 0\n\t\t// 因为设置了异步判断currentPageIndex，所以再声明一个变量用来set底部bar\n\t\tthis.bottomBarCount = 0\n\t\t// 为了设置left\n\t\tthis.currentLeft = -this.perCarouselLiWidth * (this.currentPageIndex + 1)\n\t\t// 为了防止事件未完成就点击\n\t\tthis.stopEvent = false\n\t\t// clone node\n\t\tthis.carousel.insertBefore(this.carouselLis[this.carouselLis.length - 1].cloneNode(true), this.carouselLis[0])\n\t\tthis.carousel.appendChild(this.carouselLis[0].cloneNode(true))\n\t\t// 调整图片出现顺序和container的宽度\n\t\tthis.carousel.style.width = `${this.perCarouselLiWidth * this.carouselLis.length}px`\n\t\tthis.carousel.style.left = this.currentLeft + 'px'\n\t}\n\n\t_Carousel.prototype.bind = function () {\n\t\tthis.btnLeft.addEventListener('click', e => {\n\t\t\t// 防止事件未完成就点击\n\t\t\tif (this.stopEvent) return;\n\n\t\t\tthis.playPre()\n\t\t\tthis.bottomBarCount -= 1\n\t\t\tif (this.bottomBarCount < 0) {\n\t\t\t\tthis.bottomBarCount = this.carouselLis.length - 1\n\t\t\t}\n\t\t\tthis.setBottomBar()\n\t\t})\n\t\tthis.btnRight.addEventListener('click', e => {\n\t\t\tif (this.stopEvent) return;\n\n\t\t\tthis.playNext()\n\t\t\tthis.bottomBarCount += 1\n\t\t\tif (this.bottomBarCount > this.carouselLis.length - 1) {\n\t\t\t\tthis.bottomBarCount = 0\n\t\t\t}\n\t\t\tthis.setBottomBar()\n\t\t})\n\t}\n\n\t_Carousel.prototype.autoClick = function () {\n\t\tthis.intId = setInterval(() => {\n\t\t\tif (this.stopEvent) return;\n\t\t\tconsole.log('hh')\n\t\t\tthis.playNext()\n\t\t\tthis.bottomBarCount += 1\n\t\t\tif (this.bottomBarCount > this.carouselLis.length - 1) {\n\t\t\t\tthis.bottomBarCount = 0\n\t\t\t}\n\t\t\tthis.setBottomBar()\n\t\t}, 5000)\n\t}\n\n\t_Carousel.prototype.playPre = function () {\n\t\t// this.currentPageIndex -= 1\n\t\t// this.carousel.style.left = -this.perCarouselLiWidth * (this.currentPageIndex + 1) + 'px'\n\t\t// if (this.currentPageIndex < 0) {\n\t\t// \tthis.currentPageIndex = this.carouselLis.length - 1\n\t\t// \tconsole.log(this.currentPageIndex)\n\t\t// \tthis.carousel.style.left = -this.perCarouselLiWidth * (this.currentPageIndex + 1) + 'px'\n\t\t// }\n\n\t\t// 点击之后，清除自动轮播ID\n\t\tif (this.intId) {\n\t\t\tclearInterval(this.intId)\n\t\t}\n\n\t\tthis.stopEvent = true\n\t\tlet self = this\n\t\tlet n = -this.perCarouselLiWidth * (this.currentPageIndex + 1) // -1226\n\t\tconsole.log(n)\n\t\tthis.currentPageIndex -= 1\n\t\tconsole.log(n <= -self.perCarouselLiWidth * (self.currentPageIndex + 1))\n\t\t// 用settimeout模拟jQuery的animate\n\t\tsetTimeout(function run() {\n\t\t\tif (n <= -self.perCarouselLiWidth * (self.currentPageIndex + 1)) { // 0\n\t\t\t\tself.carousel.style.left = n + 1 + 'px'\n\t\t\t\tn += 1\n\t\t\t\tsetTimeout(run, 1)\n\t\t\t} else {\n\t\t\t\tif (self.currentPageIndex < 0) {\n\t\t\t\t\tself.currentPageIndex = self.carouselLis.length - 1\n\t\t\t\t\tconsole.log(self.currentPageIndex)\n\t\t\t\t\tself.carousel.style.left = -self.perCarouselLiWidth * (self.currentPageIndex + 1) + 'px'\n\t\t\t\t}\n\t\t\t\t// 防止事件未完成就点击\n\t\t\t\tself.stopEvent = false\n\t\t\t\t// 点击轮播结束后，开启自动轮播\n\t\t\t\tself.autoClick()\n\t\t\t}\n\t\t}, 1)\n\t}\n\n\t_Carousel.prototype.playNext = function () {\n\t\t// this.currentPageIndex += 1\n\t\t// this.carousel.style.left = -this.perCarouselLiWidth * (this.currentPageIndex + 1) + 'px'\n\t\t// if (this.currentPageIndex > this.carouselLis.length - 1) {\n\t\t// \tthis.currentPageIndex = 0\n\t\t// \tconsole.log(this.currentPageIndex)\n\t\t// \tthis.carousel.style.left = -this.perCarouselLiWidth * (this.currentPageIndex + 1) + 'px'\n\t\t// }\n\n\t\t// 点击之后，清除自动轮播ID\n\t\tif (this.intId) {\n\t\t\tclearInterval(this.intId)\n\t\t}\n\n\t\tthis.stopEvent = true\n\t\tlet self = this\n\t\tlet n = -this.perCarouselLiWidth * (this.currentPageIndex + 1) // -1226\n\t\tconsole.log(n)\n\t\tthis.currentPageIndex += 1\n\t\tconsole.log(n <= -self.perCarouselLiWidth * (self.currentPageIndex + 1))\n\t\t// 用settimeout模拟jQuery的animate\n\t\tsetTimeout(function run() {\n\t\t\tif (n >= -self.perCarouselLiWidth * (self.currentPageIndex + 1)) { // 0\n\t\t\t\tself.carousel.style.left = n - 1 + 'px'\n\t\t\t\tn -= 1\n\t\t\t\tsetTimeout(run, 1)\n\t\t\t} else {\n\t\t\t\tif (self.currentPageIndex > self.carouselLis.length - 1) {\n\t\t\t\t\tself.currentPageIndex = 0\n\t\t\t\t\tconsole.log(self.currentPageIndex)\n\t\t\t\t\tself.carousel.style.left = -self.perCarouselLiWidth * (self.currentPageIndex + 1) + 'px'\n\t\t\t\t}\n\t\t\t\t// 防止事件未完成就点击\n\t\t\t\tself.stopEvent = false\n\t\t\t\t// 点击轮播结束后，开启自动轮播\n\t\t\t\tself.autoClick()\n\t\t\t}\n\t\t}, 1)\n\t}\n\n\t_Carousel.prototype.setBottomBar = function () {\n\t\tthis.bottomBarBtns.forEach(element => {\n\t\t\telement.classList.remove('active')\n\t\t})\n\t\tthis.bottomBarBtns[this.bottomBarCount].classList.add('active')\n\t}\n\n\treturn {\n\t\tinit: function () {\n\t\t\tfor (let i = 0; i < arguments.length; i++) {\n\t\t\t\tnew _Carousel(arguments[i])\n\t\t\t}\n\t\t}\n\t}\n})()\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/lib/Carousel.js?");

/***/ }),

/***/ "./js/lib/GoTop.js":
/*!*************************!*\
  !*** ./js/lib/GoTop.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('loading gotop down')\n\nmodule.exports = (function () {\n\tlet _GoTop = function () {\n\t\tthis.createElement()\n\t\tthis.bind()\n\t}\n\n\t_GoTop.prototype.createElement = function () {\n\t\tthis.container = document.querySelector('body')\n\t\tlet newElement = document.createElement('div')\n\t\tlet newTextNode = document.createTextNode('回到顶部')\n\t\tnewElement.appendChild(newTextNode)\n\t\tnewElement.classList.add('goTop')\n\t\tthis.container.appendChild(newElement)\n\t\t// 元素创建完后，获取到这个dom节点\n\t\tthis.goTopNode = this.container.querySelector('.goTop')\n\t}\n\n\t_GoTop.prototype.bind = function () {\n\t\t// 窗口滚动事件\n\t\twindow.document.addEventListener('scroll', () => {\n\t\t\tif (document.documentElement.scrollTop > 200) {\n\t\t\t\tthis.goTopNode.classList.add('display')\n\t\t\t} else {\n\t\t\t\tthis.goTopNode.classList.remove('display')\n\t\t\t}\n\t\t})\n\t\t// 点击事件\n\t\tthis.goTopNode.addEventListener('click', () => {\n\t\t\tscrollTo(0, 0)\n\t\t\tthis.goTopNode.classList.remove('display')\n\t\t})\n\t}\n\n\treturn {\n\t\tinit: function () {\n\t\t\tnew _GoTop()\n\t\t}\n\t}\n})()\n\n\n\n//# sourceURL=webpack:///./js/lib/GoTop.js?");

/***/ }),

/***/ "./js/lib/Waterfall_Ajax.js":
/*!**********************************!*\
  !*** ./js/lib/Waterfall_Ajax.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 思路\n// 1.获取数据\n// 2.将数据改装为DOM结构，通过瀑布流的方式放到网页上\n// 3.当页面滚到底部时 -> 第1步\n// 3.1实现方式：在页面底部埋一个元素，每当这个元素暴露在窗口，就代表窗口滚到底部了\n\n// 难点\n// 由于图片高度不定，所以每个item的的高度是不定的\n// 所以要等到图片加载完成后，再将item放入瀑布流中\n\nconsole.log('loading waterfull down')\n\nmodule.exports = (function () {\n\tlet _Waterfall = function (container) {\n\t\tthis.ct = container\n\t\tthis.init()\n\t\tthis.bind()\n\t\tthis.buttonClick()\n\t}\n\n\t_Waterfall.prototype.init = function () {\n\t\tthis.bottomLoadNode = this.ct.querySelector('#bottom-load')\n\t\t// 获取数组的具体信息\n\t\tthis.perPageCount = 9\n\t\tthis.currentPage = 1\n\t\t// 加载锁，防止数据为到来前重复点击\n\t\tthis.isLoading = false\n\t\t// 计算出页面中共有几列\n\t\tthis.perLiWidth = window.getComputedStyle(this.ct.querySelectorAll('.item')[0], null).getPropertyValue('width').slice(0, -2)\n\t\tthis.columnLength = parseInt(this.ct.offsetWidth / this.perLiWidth)\n\t\t// 初始化列高度数组\n\t\tthis.columnHeightArr = []\n\t\tfor (let i = 0; i < this.columnLength; i++) {\n\t\t\tthis.columnHeightArr[i] = 0\n\t\t}\n\t}\n\n\t_Waterfall.prototype.bind = function () {\n\t\tthis.bottomLoadNode.addEventListener('click', () => {\n\t\t\tthis.buttonClick()\n\t\t})\n\t}\n\n\t_Waterfall.prototype.buttonClick = function () {\n\t\t// 如果数据正在被请求，isloading为true，那么这次点击什么也不做\n\t\tif (this.isLoading) return\n\t\t// 发请求前，上锁\n\t\tthis.isLoading = true\n\t\t// 1.获取数据\n\t\tthis.getData((newsListArray) => {\n\t\t\t// 2.将数据改装为DOM结构，通过瀑布流的方式放到网页上\n\t\t\tconsole.log(newsListArray)\n\t\t\tfor (let i = 0; i < newsListArray.length; i++) {\n\t\t\t\t// 2.1 将数据改装为DOM结构\n\t\t\t\tlet node = this.getNode(newsListArray[i])\n\t\t\t\t// 2.2 只有当节点内的img加载完毕后，才能放到网页上\n\t\t\t\tnode.querySelector('img').addEventListener('load', () => {\n\t\t\t\t\tthis.ct.querySelector('#ct-picture').appendChild(node)\n\t\t\t\t\tconsole.log(node)\n\t\t\t\t\tthis.waterFallPlace(node)\n\t\t\t\t})\n\t\t\t}\n\t\t})\n\t}\n\n\t_Waterfall.prototype.getData = function (callback) {\n\t\t$.ajax({\n\t\t\t// 接口：http://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4\n\t\t\turl: 'http://platform.sina.com.cn/slide/album_tech',\n\t\t\tdataType: 'jsonp',\n\t\t\tjsonp: 'jsoncallback', // 在一个JSONP请求中重写回调函数的名字。这个值用来替代在\"callback=?\"这种GET或POST请求中URL参数里的\"callback\"部分\n\t\t\tdata: {\n\t\t\t\tapp_key: '1271687855',// 这个是固定的\n\t\t\t\tnum: this.perPageCount,\n\t\t\t\tpage: this.currentPage\n\t\t\t}\n\t\t}).done((ret) => {\n\t\t\tif (ret && ret.status && ret.status.code === \"0\") {\n\t\t\t\tcallback(ret.data) //如果数据没问题，就生成好节点并且摆放好位置\n\t\t\t\tthis.currentPage += 1\n\t\t\t\t// 请求成功，解开isloading的锁\n\t\t\t\tthis.isLoading = false\n\t\t\t} else {\n\t\t\t\tconsole.log(\"get error data\")\n\t\t\t}\n\t\t})\n\t}\n\n\t_Waterfall.prototype.getNode = function (item) {\n\t\tlet liNode = document.createElement('li')\n\t\tliNode.classList.add('item')\n\t\tlet aNode = document.createElement('a')\n\t\taNode.classList.add('link')\n\t\taNode.setAttribute('href', `${item.url}`)\n\t\tlet imgNode = document.createElement('img')\n\t\timgNode.setAttribute('src', `${item.img_url}`)\n\t\tlet h4Node = document.createElement('h4')\n\t\th4Node.appendChild(document.createTextNode(`${item.short_name}`))\n\t\tlet pNode = document.createElement('p')\n\t\tpNode.appendChild(document.createTextNode(`${item.short_intro}`))\n\n\t\taNode.appendChild(imgNode)\n\t\tliNode.appendChild(aNode)\n\t\tliNode.appendChild(h4Node)\n\t\tliNode.appendChild(pNode)\n\n\t\treturn liNode\n\t}\n\n\t_Waterfall.prototype.waterFallPlace = function (node) {\n\t\t// 选出数组里的最小值，将新的元素放入最小值所属的那一列\n\t\tlet minValue = Math.min.apply(null, this.columnHeightArr)\n\t\tlet minIndex = this.columnHeightArr.indexOf(minValue)\n\t\t// 节点margin大小,slice方法去掉px\n\t\tlet nodeMargin = window.getComputedStyle(node, null).getPropertyValue(\"margin\").slice(0, -2)\n\n\t\t// 节点样式设置\n\t\tnode.setAttribute('style', `top:${minValue}px;left:${minIndex * (node.offsetWidth + nodeMargin * 2)}px;opacity:1;`)\n\n\t\tthis.columnHeightArr[minIndex] += node.offsetHeight + nodeMargin * 2\n\t\t// 给ul赋值最大高度是因为li是绝对定位，所以ul的高度是撑不开的\n\t\tthis.ct.querySelector('#ct-picture').setAttribute('style', `height:${Math.max.apply(null, this.columnHeightArr)}px;`)\n\t\tconsole.log(this.columnHeightArr)\n\t}\n\n\treturn {\n\t\tinit: function () {\n\t\t\tfor (let i = 0; i < arguments.length; i++) {\n\t\t\t\tnew _Waterfall(arguments[i])\n\t\t\t}\n\t\t}\n\t}\n})()\n\n\n\n\n\n//# sourceURL=webpack:///./js/lib/Waterfall_Ajax.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// // 配置require.js\n// requirejs.config({\n// \tbaseUrl: \"js/lib\",\n// \twaitSeconds: 200,\n// \tshim: {\n// \t\t// shim 的英文含义是做兼容性处理\n// \t\t// 如果，需要require shim-0 模块，会先加载shim-1\n// \t\t// 因为下面的代码规定了shim-0的依赖是shim-1\n// \t\t'jQuery': {\n// \t\t\t// 手动告诉require如何找依赖，管理非AMD规范代码\n// \t\t\t// depths dependencies\n// \t\t\tdeps: ['jquery-3.3.1.min.js']\n// \t\t}\n// \t}\n// })\n//\n// // requirejs 可以直接使用的原因是 它挂在了window下面\n// // 加载入口模块\n//\n// require(['jquery-3.3.1.min', 'Carousel', 'GoTop', 'Waterfall_Ajax'], function (jQuery, Carousel, GoTop, Waterfall_Ajax) {\n// \tconsole.log(Carousel)\n// \tCarousel.init(document.querySelector('.carousel-wrapper'))\n// \tconsole.log(GoTop)\n// \tGoTop.init()\n// \tconsole.log(Waterfall_Ajax)\n// \tWaterfall_Ajax.init(document.querySelector('.ct-waterfull'))\n// })\n\nlet Carousel = __webpack_require__(/*! ./lib/Carousel */ \"./js/lib/Carousel.js\")\nconsole.log(Carousel)\nCarousel.init(document.querySelector('.carousel-wrapper'))\n\nlet GoTop = __webpack_require__(/*! ./lib/GoTop */ \"./js/lib/GoTop.js\")\nconsole.log(GoTop)\nGoTop.init()\n\nlet Waterfall_Ajax = __webpack_require__(/*! ./lib/Waterfall_Ajax */ \"./js/lib/Waterfall_Ajax.js\")\nconsole.log(Waterfall_Ajax)\nWaterfall_Ajax.init(document.querySelector('.ct-waterfull'))\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });