var dao = {

    execute: function(tx, sql) {
        tx.executeSql(sql, [], dao.successCB, dao.errorCB);
    },

    createTables: function(tx) {
         dao.execute(tx, 'DROP TABLE IF EXISTS EVENT');
         //dao.execute(tx, 'DROP TABLE IF EXISTS TRACK');
         //dao.execute(tx, 'DROP TABLE IF EXISTS SPEAKER');
         //dao.execute(tx, 'DROP TABLE IF EXISTS TALK');

         //TODO: Remove, only for test
         dao.execute(tx, 'DROP TABLE IF EXISTS EVENT_UPDATE');


         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS EVENT (id unique, name, startDate, endDate, hashtag, logo, tags, lastUpdate)');
         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS TRACK (id unique, name, event_id)');
         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS SPEAKER (id unique, event_id, name, twitter, bio, photo)');
         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS TALK (id unique, name, startDate, endDate, event_id, track_id, description, hashtag, speakers, tags, roomName, maxAtendees)');

         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS TALK_FAVORITE (id unique, name, startDate, endDate, event_id, track_id, description, hashtag, speakers, tags, roomName)');
         dao.execute(tx, 'CREATE TABLE IF NOT EXISTS EVENT_UPDATE (id unique, currentUpdate)');
    },

    updateDatabaseEventsWithJSON: function(json, success){
        dao.db.transaction(
            dao.createTables,
            dao.errorCB,
            function(){
                dao.db.transaction(
                    function(tx) {
                        //Events
                        for (i=0; i<json.events.length;i++) {
                            dao.createEvent(tx, json.events[i]);
                        }
                    },
                    dao.errorCB,
                    success
                );
            }
        );
    },

    updateDatabaseEventDataWithJSON: function(event, json, success){
        alert("updateDatabaseEventDataWithJSON");
        dao.db.transaction(
            function(tx) {
                var sql = 'INSERT OR REPLACE INTO EVENT_UPDATE(id, currentUpdate) VALUES("'+event.id+'", "' + event.lastUpdate +'")';
                alert(sql);
                dao.execute(tx, sql);
                dao.updateEventData(tx, json, success);
            },
            dao.errorCB,
            success
        );
    },

    createEvent: function(tx, eventJson) {
        dao.insertJSON(tx, 'EVENT', eventJson);
    },

    updateEventData: function(tx, eventJson) {
        alert("updateEventData");
        for (var i=0; i<eventJson.tracks.length;i++) {
            dao.insertJSON(tx, 'TRACK', eventJson.tracks[i]);
        }


        for (var i=0; i<eventJson.speakers.length;i++) {
            dao.insertJSON(tx, 'SPEAKER', eventJson.speakers[i]);
        }


        for (var i=0; i<eventJson.talks.length;i++) {
            dao.insertJSON(tx, 'TALK', eventJson.talks[i]);
        }

    },

    insertJSON: function(tx, table, json){
        var keys = [];
        var values = [];

        for (key in json) {
            if ((key != 'tracks') &&
                (key != 'speakers') &&
                (key != 'talks')) {
                    keys.push(key);
                    values.push('"' + json[key] + '"');
                }
        }


        var sql = 'INSERT OR REPLACE INTO ' + table;
        sql += '(' + keys.join() +')';
        sql += ' VALUES (' + values.join() + ')';

        //alert(sql);

        dao.execute(tx, sql);
    },

    errorCB: function(err) {
        alert("Error processing SQL: "+err.message);
    },

    successCB: function(t, err) {
        //alert("Success");
    },

    test2: function(id) {
        dao.listTalks(id, gui.drawTalks)
    },

    getEvent: function(eventId, querySuccess){
        dao.db.readTransaction(function (t) {
            //t.executeSql('SELECT * FROM EVENT LEFT JOIN EVENT_UPDATE ON EVENT.id = EVENT_UPDATE.id AND EVENT_UPDATE.id=?',
            t.executeSql('SELECT EVENT.*,  EVENT_UPDATE.currentUpdate FROM EVENT LEFT JOIN EVENT_UPDATE ON EVENT.id = EVENT_UPDATE.id WHERE EVENT.id="'+eventId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listEventsUpdate: function(querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM EVENT_UPDATE',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listEvents: function(querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM EVENT',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listTalks: function(eventId, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM TALK WHERE EVENT_ID="'+eventId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listTracks: function(eventId, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM TRACK WHERE EVENT_ID="'+eventId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },

    listSpeakers: function(eventId, querySuccess){
        dao.db.readTransaction(function (t) {
            t.executeSql('SELECT * FROM SPEAKER WHERE EVENT_ID="'+eventId+'"',
                [],
                function(tx, results){
                    dao.querySuccess(results, querySuccess);
                },
                dao.errorCB
            );
        });
    },




    queryDB: function(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], dao.querySuccess, dao.errorCB);
    },

    querySuccess:function(results, querySuccess) {

        var len = results.rows.length;
        var list = []

        for (i = 0; i < len; i++){
            var item = results.rows.item(i);
            list.push(item);
        }

        querySuccess(list);


    },

    databaseStart: function(){
        dao.db = window.openDatabase("evedb", "1.0", "Eve DB", 1000000);
    }
};
