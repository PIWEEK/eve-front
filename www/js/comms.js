var comms = {
    checkConnection: function() {
        var networkState = navigator.connection.type;
        comms.online = (networkState != Connection.NONE);
        return comms.online;
    },

    ajaxGet: function(url, success){
        //comms.ajaxGet("http://localhost:8080/event", function(text){alert(text)});
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 ) {
               if(xmlhttp.status == 200){
                   success(xmlhttp.responseText);
               }
               else if(xmlhttp.status == 400) {
                  alert('There was an error '+xmlhttp.status);
               }
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    },

    syncGet: function(url){
         var xhReq = new XMLHttpRequest();
         xhReq.open("GET", url, false);
         xhReq.send();
         var serverResponse = xhReq.responseText;
         return serverResponse;
    },

    getEventList: function(success) {
        return comms.ajaxGet("http://10.8.1.11:8080/event", success);
    }
};
