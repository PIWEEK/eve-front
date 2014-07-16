var data = {
    test: function() {
        dao.listEventsUpdate(function(list){
            gui.drawTest(list);
        });
    },

    updateEvents: function(){
        if (comms.online) {
            //alert("Starting on online mode");
            //TODO: Ask JSON to server
            comms.getEventList(function(text){
                var eventList = JSON.parse(text);
                dao.updateDatabaseEventsWithJSON(eventList,
                    function(){
                        dao.listEvents(gui.drawEvents);
                    }
                );


            });
        } else {
            dao.listEvents(function(list){
                if (list.length == 0) {
                    alert("Sorry, you need an internet connection to continue");
                } else {
                    alert("Starting on offline mode");
                    gui.drawEvents(list);
                }
            })
        }
    },

    updateEventData: function(eventId){
        if (comms.online) {
            //Check if we need to update the event data
            dao.getEvent(
                eventId,
                function(list){
                    var event = list[0];
                    alert(event.lastUpdate +"-"+ event.currentUpdate);
                    if (event.lastUpdate != event.currentUpdate) {
                        //TODO: Ask JSON to server
                        dao.updateDatabaseEventDataWithJSON(event, eventContentSample, function(){dao.listTalks(eventId, gui.drawTalks)});
                    } else {
                        dao.listTalks(eventId, gui.drawTalks);
                    }
                }
            )

        } else {
            dao.listTalks(eventId, gui.drawTalks);
        }
    },

    showEventInfo: function(eventId){
        //Check if we need to update the event data
        dao.getEvent(
            eventId,
            function(list){
                gui.drawEventInfo(list[0]);
            }
        );



    }


};
