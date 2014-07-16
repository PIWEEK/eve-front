var gui = {
    currentContent: 0,

    init: function(){

    },

    drawEvents: function(list){
        var grid = document.getElementsByClassName("home-grid")[0];
        grid.innerHTML = '<h1 class="full">Next events</h1>';

        for (i = 0; i < list.length; i++){
            var sizeClass = "quarter";
            if (i==0) {
                sizeClass = "half";
            }
            var div = document.createElement('div');
            div.dataset.eventId = list[i].id;
            div.addEventListener("click", function(){
                data.showEventInfo(this.dataset.eventId);
            });
            div.className = 'event-home inline-block ' + sizeClass;


            div.innerHTML = '<div class="event-home-info"><a href="###">'+list[i].name+'</a><span class="event-home-date">'+list[i].startDate+'</span></div><a href="#"><img src="images/2x1.png" border="0"/></a>';


            grid.appendChild (div);
        }

    },

    drawEventInfo: function(event){
        document.getElementById("event-list").className = "content hide";
        document.getElementById("event-info").className = "content";
        //document.getElementById("event-info-title").innerHTML = "INFO "+event.name;
    },

    drawTest: function(list){
        var html = "<ul>";
        for (i = 0; i < list.length; i++){
            html += "<li>"+list[i].id+" - "+list[i].currentUpdate+"</li>"
        }
        html +="</ul>";
        document.getElementById("event-list").innerHTML = html;
    },

    drawTalks: function(list){
        var html = "TALKS<br /><ul>";
        for (i = 0; i < list.length; i++){
            html += "<li>"+list[i].name+"</li>"
        }
        html +="</ul>";
        document.getElementById("event-talk-list").innerHTML = html;
    },
    initSwipe: function(){
        var body = document.getElementById("body");
        var mc = Hammer(body);
        mc.on("swipeleft", function(){
            gui.swipe (1)
        });
        mc.on("swiperight", function(){
            gui.swipe (-1)
        });
    },
    swipe: function(dir){
            var nextContent = gui.currentContent + dir;
            var nextElement = document.getElementById("content"+nextContent);
            if (nextElement) {
                document.getElementById("content"+gui.currentContent).className = "content hide";
                nextElement.className = "content";
                gui.currentContent = nextContent;
            }
    }

};
