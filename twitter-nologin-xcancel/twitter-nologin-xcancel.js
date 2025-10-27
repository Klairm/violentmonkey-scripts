// ==UserScript==
// @name        redirect X to Xcancel
// @namespace   Violentmonkey Scripts
// @match       https://x.com/*
// @grant       none
// @version     1.0
// @author      klairm
// @description 6/1/2025, 10:45:38 PM
// ==/UserScript==


const currentUrl = window.location.href;
const newUrl = currentUrl.replace('x.com', 'xcancel.com');
window.location.href = newUrl;




