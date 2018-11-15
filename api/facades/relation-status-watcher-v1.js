/**
  Juju RelationStatusWatcher version 1.
  This API facade is available on model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Fri 2018/11/09 14:32:38 UTC. Do not manually edit this file.
*/

'use strict';

const {createAsyncHandler} = require('../transform.js');

/**
  srvRelationStatusWatcher defines the API wrapping a
  state.RelationStatusWatcher.
*/
class RelationStatusWatcherV1 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 1;
  }

  /**
    Next returns when a change has occurred to an entity of the collection
    being watched since the most recent call to Next or the Watch call that
    created the srvRelationStatusWatcher.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          watcherId: string,
          changes: []{
            key: string,
            life: string,
            suspended: bool,
            suspendedReason: string
          },
          error: {
            message: string,
            code: string,
            info: {
              macaroon: anything,
              macaroonPath: string
            }
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  next(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'RelationStatusWatcher',
        request: 'Next',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#RelationLifeSuspendedStatusWatchResult
        if (resp) {
          result = {};
          result.watcherId = resp['watcher-id'];
          result.changes = [];
          resp['changes'] = resp['changes'] || [];
          for (let i = 0; i < resp['changes'].length; i++) {
            // github.com/juju/juju/apiserver/params#RelationLifeSuspendedStatusChange
            if (resp['changes'][i]) {
              result.changes[i] = {};
              result.changes[i].key = resp['changes'][i]['key'];
              // github.com/juju/juju/apiserver/params#Life
              result.changes[i].life = resp['changes'][i]['life'];
              result.changes[i].suspended = resp['changes'][i]['suspended'];
              result.changes[i].suspendedReason = resp['changes'][i]['suspended-reason'];
            }
          }
          // github.com/juju/juju/apiserver/params#Error
          if (resp['error']) {
            result.error = {};
            result.error.message = resp['error']['message'];
            result.error.code = resp['error']['code'];
            // github.com/juju/juju/apiserver/params#ErrorInfo
            if (resp['error']['info']) {
              result.error.info = {};
              // gopkg.in/macaroon.v2-unstable#Macaroon
              result.error.info.macaroon = resp['error']['info']['macaroon'];
              result.error.info.macaroonPath = resp['error']['info']['macaroon-path'];
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    Stop stops the watcher.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error or null if the operation succeeded.
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  stop(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'RelationStatusWatcher',
        request: 'Stop',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }
}


const wrappers = require('../wrappers.js');
if (wrappers.wrapRelationStatusWatcher) {
  // Decorate the facade class in order to improve user experience.
  RelationStatusWatcherV1 = wrappers.wrapRelationStatusWatcher(RelationStatusWatcherV1);
}

module.exports = RelationStatusWatcherV1;