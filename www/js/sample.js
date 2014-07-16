var eventsListSample = JSON.parse('\
{ \
  "events": [ \
    { \
      "id": 1000, \
      "name": "Codemotion", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "hashtag": "#event1000", \
      "logo": "http:\/\/app.com\/1000.png", \
      "tags": "groovy, python", \
      "lastUpdate": "2014-07-15T12:02:06+0000" \
    }, \
    { \
      "id": 1001, \
      "name": "Greach", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "hashtag": "#event1001", \
      "logo": "http:\/\/app.com\/1001.png", \
      "tags": "groovy, cordova, html5", \
      "lastUpdate": "2014-07-15T12:02:06+0000" \
    }, \
    { \
      "id": 1002, \
      "name": "GGX", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "hashtag": "#event1002", \
      "logo": "http:\/\/app.com\/1002.png", \
      "tags": "groovy, cordova, html5", \
      "lastUpdate": "2014-07-15T12:02:06+0000" \
    }, \
    { \
      "id": 1003, \
      "name": "PyConEs", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "hashtag": "#event1003", \
      "logo": "http:\/\/app.com\/1003.png", \
      "tags": "python", \
      "lastUpdate": "2014-07-15T12:02:06+0000" \
    }, \
    { \
      "id": 1004, \
      "name": "GR8", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "hashtag": "#event1004", \
      "logo": "http:\/\/app.com\/1004.png", \
      "tags": "groovy, cordova, html5", \
      "lastUpdate": "2014-07-15T12:02:06+0000" \
    } \
  ] \
}');


var eventContentSample = JSON.parse('\
{ \
  "tracks": [ \
    { \
      "id": 2000, \
      "event_id": 1000, \
      "name": "Track 2000" \
    }, \
    { \
      "id": 2001, \
      "event_id": 1000, \
      "name": "Track 2001" \
    }, \
    { \
      "id": 2002, \
      "event_id": 1000, \
      "name": "Track 2002" \
    } \
  ], \
  "speakers": [ \
    { \
      "id": 3000, \
      "event_id": 1000, \
      "name": "John 3000", \
      "twitter": "john3000", \
      "bio": "asdf asdf asdf", \
      "photo": "http:\/\/app.com\/3000.png" \
    }, \
    { \
      "id": 3001, \
      "event_id": 1000, \
      "name": "John 3001", \
      "twitter": "john3001", \
      "bio": "asdf asdf asdf", \
      "photo": "http:\/\/app.com\/3001.png" \
    }, \
    { \
      "id": 3002, \
      "event_id": 1000, \
      "name": "John 3002", \
      "twitter": "john3002", \
      "bio": "asdf asdf asdf", \
      "photo": "http:\/\/app.com\/3002.png" \
    }, \
    { \
      "id": 3003, \
      "event_id": 1000, \
      "name": "John 3003", \
      "twitter": "john3003", \
      "bio": "asdf asdf asdf", \
      "photo": "http:\/\/app.com\/3003.png" \
    }, \
    { \
      "id": 3004, \
      "event_id": 1000, \
      "name": "John 3004", \
      "twitter": "john3004", \
      "bio": "asdf asdf asdf", \
      "photo": "http:\/\/app.com\/3004.png" \
    } \
  ], \
  "talks": [ \
    { \
      "id": 4000, \
      "event_id": 1000, \
      "name": "Talk 4000", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "track_id": 2000, \
      "description": "asdf asdf asdf", \
      "hashtag": "#talk4000", \
      "speakers": "3000", \
      "tags": "groovy, cordova, html5", \
      "roomName": "room01", \
      "maxAtendees": 100 \
    }, \
    { \
      "id": 4001, \
      "event_id": 1000, \
      "name": "Talk 4001", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "track_id": 2000, \
      "description": "asdf asdf asdf", \
      "hashtag": "#talk4001", \
      "speakers": "3001", \
      "tags": "groovy, cordova, html5", \
      "roomName": "room01", \
      "maxAtendees": 100 \
    }, \
    { \
      "id": 4002, \
      "event_id": 1000, \
      "name": "Talk 4002", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "track_id": 2000, \
      "description": "asdf asdf asdf", \
      "hashtag": "#talk4002", \
      "speakers": "3002", \
      "tags": "groovy, cordova, html5", \
      "roomName": "room01", \
      "maxAtendees": 100 \
    }, \
    { \
      "id": 4003, \
      "event_id": 1000, \
      "name": "Talk 4003", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "track_id": 2000, \
      "description": "asdf asdf asdf", \
      "hashtag": "#talk4003", \
      "speakers": "3003", \
      "tags": "groovy, cordova, html5", \
      "roomName": "room01", \
      "maxAtendees": 100 \
    }, \
    { \
      "id": 4004, \
      "event_id": 1000, \
      "name": "Talk 4004", \
      "startDate": "2014-07-15T12:02:06+0000", \
      "endDate": "2014-07-15T12:02:06+0000", \
      "track_id": 2000, \
      "description": "asdf asdf asdf", \
      "hashtag": "#talk4004", \
      "speakers": "3004", \
      "tags": "groovy, cordova, html5", \
      "roomName": "room01", \
      "maxAtendees": 100 \
    } \
  ] \
}');
