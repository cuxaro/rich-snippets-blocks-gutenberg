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

var __ = wp.i18n.__; //Dependency is mandatory if want Internalialize the code

var registerBlockType = wp.blocks.registerBlockType; //Dependency is mandatory for build the Block

var withSelect = wp.data.withSelect;

//Code showed in the backend 

function RichSnippetReviewEdit(props) {}

//Code showed in the front 
function RichSnippetReviewSave(values) {

    schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": values.attributes.rich_snippet_name,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": values.attributes.rich_snippet_rating_value,
            "ratingCount": values.attributes.rich_snippet_rating_count,
            "bestRating": values.attributes.rich_snippet_rating_best,
            "worstRating": values.attributes.rich_snippet_rating_worst
        }
    };
    return wp.element.createElement(
        "div",
        null,
        wp.element.createElement(
            "script",
            { type: "application/ld+json" },
            JSON.stringify(schema, null, 2)
        )
    );
}

function RichSnippetReviewPreview(values) {

    preview = "<div></";
    return;
}

registerBlockType('ivanbarreda/rich-snippet-review', {
    title: __('Rich Snippet Review'),
    icon: 'lock',
    category: 'rich-snippets',
    attributes: {

        explain_text: {

            type: 'string'
        },
        rich_snippet_name: {

            type: 'string'
        },
        rich_snippet_rating_value: {

            type: 'string'
        },
        rich_snippet_rating_count: {

            type: 'string'
        },
        rich_snippet_rating_best: {

            type: 'string'
        },
        rich_snippet_rating_worst: {

            type: 'string'
        }

    },

    edit: function edit(_ref) {
        var attributes = _ref.attributes,
            setAttributes = _ref.setAttributes;


        function updateName(event) {
            setAttributes({ rich_snippet_name: event.target.value });
            console.log(event);
        }
        function updateValue(event) {
            setAttributes({ rich_snippet_rating_value: event.target.value });
            console.log(event);
        }
        function updateCount(event) {
            setAttributes({ rich_snippet_rating_count: event.target.value });
            console.log(event);
        }
        function updateBest(event) {
            setAttributes({ rich_snippet_rating_best: event.target.value });
            console.log(event);
        }
        function updateWorst(event) {
            setAttributes({ rich_snippet_rating_worst: event.target.value });
            console.log(event);
        }

        return wp.element.createElement(
            "div",
            { className: "backend rich-snippet-params" },
            wp.element.createElement(
                "div",
                { className: "title" },
                "Review Aggregate Rating"
            ),
            wp.element.createElement(
                "div",
                { className: "input-group" },
                wp.element.createElement(
                    "label",
                    { "for": "rich-snippet-name" },
                    "Rich Snippet Name"
                ),
                wp.element.createElement("input", { className: "prueba", value: attributes.rich_snippet_name, onChange: updateName, placeholder: "Spanish Paella ...", id: "rich-snippet-name" })
            ),
            wp.element.createElement(
                "div",
                { className: "input-group" },
                wp.element.createElement(
                    "label",
                    { "for": "rich-snippet-rating-value" },
                    "Rating Value"
                ),
                wp.element.createElement("input", { className: "prueba", value: attributes.rich_snippet_rating_value, onChange: updateValue, type: "number", placeholder: "87..", id: "rich-snippet-rating-value" })
            ),
            wp.element.createElement(
                "div",
                { className: "input-group" },
                wp.element.createElement(
                    "label",
                    { "for": "rich-snippet-rating-count" },
                    "Total number Votes"
                ),
                wp.element.createElement("input", { className: "prueba", value: attributes.rich_snippet_rating_count, onChange: updateCount, type: "number", placeholder: "46", id: "rich-snippet-rating-count" })
            ),
            wp.element.createElement(
                "div",
                { className: "input-group" },
                wp.element.createElement(
                    "label",
                    { "for": "rich-snippet-rating-best" },
                    "Range Best Rating (max number)"
                ),
                wp.element.createElement("input", { className: "prueba", value: attributes.rich_snippet_rating_best, onChange: updateBest, type: "number", placeholder: "100", id: "rich-snippet-rating-best" })
            ),
            wp.element.createElement(
                "div",
                { className: "input-group" },
                wp.element.createElement(
                    "label",
                    { "for": "rich-snippet-rating-worst" },
                    "Range Worst Rating (min number)"
                ),
                wp.element.createElement("input", { className: "prueba", value: attributes.rich_snippet_rating_worst, onChange: updateWorst, type: "number", placeholder: "0", id: "rich-snippet-rating-worst" })
            ),
            wp.element.createElement(
                "div",
                { className: "preview-rich-snippet" },
                wp.element.createElement(
                    "div",
                    { className: "title" },
                    "TITLE PLACE HOLDER"
                ),
                wp.element.createElement(
                    "div",
                    { className: "review" },
                    wp.element.createElement(
                        "div",
                        { className: "stars" },
                        "\u272D\u272D\u272D\u272D"
                    ),
                    wp.element.createElement(
                        "div",
                        { className: "review-text" },
                        "Valoraci\xF3n: "
                    ),
                    wp.element.createElement(
                        "div",
                        { className: "review-points" },
                        " ",
                        attributes.rich_snippet_rating_value,
                        " - ",
                        attributes.rich_snippet_rating_count,
                        " votos"
                    )
                ),
                wp.element.createElement(
                    "div",
                    { className: "description" },
                    "This is only a placeholder of description. "
                )
            ),
            wp.element.createElement(
                "aside",
                { className: "explain" },
                wp.element.createElement(
                    "p",
                    null,
                    "This rich snippet only appear in the code of FrontEnd. It is not displayed for humans, only for machines like Google Bot"
                )
            )
        );
    },
    save: function save(_ref2) {
        var attributes = _ref2.attributes;


        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement(RichSnippetReviewSave, { attributes: attributes })
        );
    }
});

/***/ })
/******/ ]);