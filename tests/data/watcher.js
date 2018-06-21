/**
  Juju AllWatcher version 1.
  This API facade is available on model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Wed 2042/01/01 16:42:47 UTC. Do not manually edit this file.
*/

'use strict';


/**
  Watch all!
*/
class AllWatcherV1 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 1;
  }

  /**
    There is no documentation for this method.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          deltas: []{
            removed: bool,
            entity: anything
          }
        }
  */
  next(callback) {
    const params = {};
    // Prepare the request to the Juju API.
    const req = {
      type: 'AllWatcher',
      request: 'Next',
      version: 1,
      params: params
    };
    // Send the request to the server.
    this._transport.write(req, (err, resp) => {
      if (!callback) {
        return;
      }
      if (err) {
        callback(err, {});
        return;
      }
      // Handle the response.
      let result;
      // github.com/juju/juju/apiserver/params#AllWatcherNextResults
      result = {};
      resp = resp || {};
      result.deltas = [];
      resp['deltas'] = resp['deltas'] || [];
      for (let _s1 = 0; _s1 < resp['deltas'].length; _s1++) {
        // github.com/juju/juju/state/multiwatcher#Delta
        result.deltas[_s1] = {};
        resp['deltas'][_s1] = resp['deltas'][_s1] || {};
        result.deltas[_s1].removed = resp['deltas'][_s1]['removed'];
        // github.com/juju/juju/state/multiwatcher#EntityInfo
        result.deltas[_s1].entity = resp['deltas'][_s1]['entity'];
      }
      callback(null, result);
    });
  }

  /**
    Stop stops the watcher.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error or null if the operation succeeded.
  */
  stop(callback) {
    const params = {};
    // Prepare the request to the Juju API.
    const req = {
      type: 'AllWatcher',
      request: 'Stop',
      version: 1,
      params: params
    };
    // Send the request to the server.
    this._transport.write(req, (err, resp) => {
      if (!callback) {
        return;
      }
      if (err) {
        callback(err, {});
        return;
      }
      callback(null, {});
    });
  }
}


const wrappers = require('../wrappers.js');
if (wrappers.wrapAllWatcher) {
  // Decorate the facade class in order to improve user experience.
  AllWatcherV1 = wrappers.wrapAllWatcher(AllWatcherV1);
}

module.exports = AllWatcherV1;