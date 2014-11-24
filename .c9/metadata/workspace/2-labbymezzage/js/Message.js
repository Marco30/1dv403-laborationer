{"filter":false,"title":"Message.js","tooltip":"/2-labbymezzage/js/Message.js","undoManager":{"mark":1,"position":1,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":31,"column":2},"action":"insert","lines":["\"use strict\";","","function Message(message, date) {","    ","    this.getText = function() {","        return message;","    };","    ","    this.setText = function(_text) {","        message = _text;","    };","    ","    this.getDate = function() {","        return date;","    };","        ","    this.setDate = function(_date) {","        date = _date;","    };","}","","Message.prototype.toString = function() {","    return this.getText()+\" (\"+this.getDate()+\")\";","};","","Message.prototype.getHTMLText = function() {","    return this.getText().replace(/[\\n\\r]/g, \"<br />\");","};","","Message.prototype.getDatetext = function() {","    return this.getDate();","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":0},"end":{"row":31,"column":2},"action":"remove","lines":["Message.prototype.getHTMLText = function() {","    return this.getText().replace(/[\\n\\r]/g, \"<br />\");","};","","Message.prototype.getDatetext = function() {","    return this.getDate();","};"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":24,"column":0},"end":{"row":24,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1416870836994,"hash":"10c5958f340aeb62dc37023c453cf7f78dac1bdf"}