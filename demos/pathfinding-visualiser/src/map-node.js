!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.MapNode=b()}(this,function(){"use strict";function a(a,b,c,d){this.x=a,this.y=b,this.g=0,this.f=0,this.parent=c,c&&(this.g=c.g+d)}return a.prototype.equals=function(a){return this.x===a.x&&this.y===a.y},a});