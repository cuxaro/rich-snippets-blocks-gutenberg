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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


function LogConsola() {

    scriptjson = {
        "@context": "https://schema.org/",
        "@type": "Review",
        "itemReviewed": {
            "@type": "Restaurant",
            "image": "http://www.example.com/seafood-restaurant.jpg",
            "name": "Legal Seafood",
            "servesCuisine": "Seafood",
            "priceRange": "$$$",
            "telephone": "1234567",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 William St",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10038",
                "addressCountry": "US"
            }
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4"
        },
        "name": "A good seafood place.",
        "author": {
            "@type": "Person",
            "name": "Bob Smith"
        },
        "reviewBody": "The seafood is great.",
        "publisher": {
            "@type": "Organization",
            "name": "Washington Times"
        }
    };

    return wp.element.createElement(
        "div",
        null,
        wp.element.createElement(
            "script",
            { type: "application/ld+json" },
            JSON.stringify(scriptjson, null, 2)
        )
    );
}

registerBlockType('ivanbarreda/rich-snippet-review', {
    title: __('Rich Snippet Review'),
    icon: 'lock',
    category: 'common',

    edit: function edit() {
        function imprimir() {
            console.log('prueba');
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement(
                "p",
                null,
                "v 005"
            ),
            wp.element.createElement("input", { onChange: imprimir }),
            wp.element.createElement(
                "button",
                { onClick: imprimir },
                "Boton que muestra cosas"
            )
        );
    },
    save: function save() {

        function imprimir() {
            console.log('prueba');
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement(LogConsola, null),
            wp.element.createElement(
                "button",
                { onClick: imprimir },
                "Boton que muestra cosas"
            )
        );
    }
});

/***/ })
/******/ ]);