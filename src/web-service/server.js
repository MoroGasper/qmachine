//- JavaScript source code

//- server.js ~~
//                                                      ~~ (c) SRW, 06 Oct 2012
//                                                  ~~ last updated 12 Nov 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, node: true */

 // Declarations

    var options, qm;

 // Definitions

    options = {
        max_workers:    require('os').cpus().length
    };

    qm = require('qm');

 // Invocations

    if (process.env.IP !== undefined) {
     // This is for debugging on Cloud9, if memory serves ...
        options.hostname = process.env.IP;
    }

    if (process.env.PORT !== undefined) {
     // This is for use with Heroku.
        options.port = process.env.PORT;
    }

    if (process.env.QM_API_STRING !== undefined) {
     // This is a custom environment variable I use with Heroku and AppFog.
        options.api = JSON.parse(process.env.QM_API_STRING);
    }

    if (process.env.QM_WWW_STRING !== undefined) {
     // This is a custom environment variable I use with Heroku and AppFog.
        options.www = JSON.parse(process.env.QM_WWW_STRING);
    }

    if (process.env.VMC_APP_PORT !== undefined) {
     // This is for use with AppFog.
        options.hostname = null;
        options.port = process.env.VMC_APP_PORT;
    }

    qm.launch_service(options);

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
