"use strict";var working=!1;$(".login").on("submit",function(t){if(t.preventDefault(),!working){working=!0;var n=$(this),i=n.find("button > .state");n.addClass("loading"),i.html("Authenticating..."),setTimeout(function(){n.addClass("ok"),i.html("You are not a member!"),setTimeout(function(){i.html("Log in"),n.removeClass("ok loading"),working=!1},4e3)},3e3)}});