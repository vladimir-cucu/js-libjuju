/**
  Juju LeadershipService version 2.
  This API facade is available on model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Tue 2018/11/27 16:23:14 UTC. Do not manually edit this file.
*/

'use strict';

const {autoBind, createAsyncHandler} = require('../transform.js');

/**
  LeadershipService implements a variant of leadership.Claimer for consumption
  over the API.
*/
class LeadershipServiceV2 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 2;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    BlockUntilLeadershipReleased blocks the caller until leadership is released
    for the given service.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          name: string
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
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
  blockUntilLeadershipReleased(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // gopkg.in/juju/names.v2#ApplicationTag
      if (args) {
        params = {};
        params['Name'] = args.name;
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'LeadershipService',
        request: 'BlockUntilLeadershipReleased',
        version: 2,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#ErrorResult
        if (resp) {
          result = {};
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
    ClaimLeadership makes a leadership claim with the given parameters.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          params: []{
            applicationTag: string,
            unitTag: string,
            duration: float
          }
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          results: []{
            error: {
              message: string,
              code: string,
              info: {
                macaroon: anything,
                macaroonPath: string
              }
            }
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  claimLeadership(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#ClaimLeadershipBulkParams
      if (args) {
        params = {};
        params['params'] = [];
        args.params = args.params || [];
        for (let i = 0; i < args.params.length; i++) {
          // github.com/juju/juju/apiserver/params#ClaimLeadershipParams
          if (args.params[i]) {
            params['params'][i] = {};
            params['params'][i]['application-tag'] = args.params[i].applicationTag;
            params['params'][i]['unit-tag'] = args.params[i].unitTag;
            params['params'][i]['duration'] = args.params[i].duration;
          }
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'LeadershipService',
        request: 'ClaimLeadership',
        version: 2,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#ClaimLeadershipBulkResults
        if (resp) {
          result = {};
          result.results = [];
          resp['results'] = resp['results'] || [];
          for (let i = 0; i < resp['results'].length; i++) {
            // github.com/juju/juju/apiserver/params#ErrorResult
            if (resp['results'][i]) {
              result.results[i] = {};
              // github.com/juju/juju/apiserver/params#Error
              if (resp['results'][i]['error']) {
                result.results[i].error = {};
                result.results[i].error.message = resp['results'][i]['error']['message'];
                result.results[i].error.code = resp['results'][i]['error']['code'];
                // github.com/juju/juju/apiserver/params#ErrorInfo
                if (resp['results'][i]['error']['info']) {
                  result.results[i].error.info = {};
                  // gopkg.in/macaroon.v2-unstable#Macaroon
                  result.results[i].error.info.macaroon = resp['results'][i]['error']['info']['macaroon'];
                  result.results[i].error.info.macaroonPath = resp['results'][i]['error']['info']['macaroon-path'];
                }
              }
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
}


const wrappers = require('../wrappers.js');
if (wrappers.wrapLeadershipService) {
  // Decorate the facade class in order to improve user experience.
  LeadershipServiceV2 = wrappers.wrapLeadershipService(LeadershipServiceV2);
}

module.exports = LeadershipServiceV2;