/**
  Juju ResourcesHookContext version 1.
  This API facade is available on model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Tue 2018/11/27 16:23:14 UTC. Do not manually edit this file.
*/

'use strict';

const {autoBind, createAsyncHandler} = require('../transform.js');

/**
  UnitFacade is the resources portion of the uniter's API facade.
*/
class ResourcesHookContextV1 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 1;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    GetResourceInfo returns the resource info for each of the given resource
    names (for the implicit application). If any one is missing then the
    corresponding result is set with errors.NotFound.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          resourceNames: []string
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          errorresult: {
            error: {
              message: string,
              code: string,
              info: {
                macaroon: anything,
                macaroonPath: string
              }
            }
          },
          resources: []{
            errorresult: {
              error: {
                message: string,
                code: string,
                info: {
                  macaroon: anything,
                  macaroonPath: string
                }
              }
            },
            resource: {
              charmresource: {
                name: string,
                type: string,
                path: string,
                description: string,
                origin: string,
                revision: int,
                fingerprint: []int,
                size: int
              },
              id: string,
              pendingId: string,
              application: string,
              username: string,
              timestamp: time
            }
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  getResourceInfo(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#ListUnitResourcesArgs
      if (args) {
        params = {};
        params['resource-names'] = [];
        args.resourceNames = args.resourceNames || [];
        for (let i = 0; i < args.resourceNames.length; i++) {
          params['resource-names'][i] = args.resourceNames[i];
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'ResourcesHookContext',
        request: 'GetResourceInfo',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#UnitResourcesResult
        if (resp) {
          result = {};
          // github.com/juju/juju/apiserver/params#ErrorResult
          if (resp['ErrorResult']) {
            result.errorresult = {};
            // github.com/juju/juju/apiserver/params#Error
            if (resp['ErrorResult']['error']) {
              result.errorresult.error = {};
              result.errorresult.error.message = resp['ErrorResult']['error']['message'];
              result.errorresult.error.code = resp['ErrorResult']['error']['code'];
              // github.com/juju/juju/apiserver/params#ErrorInfo
              if (resp['ErrorResult']['error']['info']) {
                result.errorresult.error.info = {};
                // gopkg.in/macaroon.v2-unstable#Macaroon
                result.errorresult.error.info.macaroon = resp['ErrorResult']['error']['info']['macaroon'];
                result.errorresult.error.info.macaroonPath = resp['ErrorResult']['error']['info']['macaroon-path'];
              }
            }
          }
          result.resources = [];
          resp['resources'] = resp['resources'] || [];
          for (let i = 0; i < resp['resources'].length; i++) {
            // github.com/juju/juju/apiserver/params#UnitResourceResult
            if (resp['resources'][i]) {
              result.resources[i] = {};
              // github.com/juju/juju/apiserver/params#ErrorResult
              if (resp['resources'][i]['ErrorResult']) {
                result.resources[i].errorresult = {};
                // github.com/juju/juju/apiserver/params#Error
                if (resp['resources'][i]['ErrorResult']['error']) {
                  result.resources[i].errorresult.error = {};
                  result.resources[i].errorresult.error.message = resp['resources'][i]['ErrorResult']['error']['message'];
                  result.resources[i].errorresult.error.code = resp['resources'][i]['ErrorResult']['error']['code'];
                  // github.com/juju/juju/apiserver/params#ErrorInfo
                  if (resp['resources'][i]['ErrorResult']['error']['info']) {
                    result.resources[i].errorresult.error.info = {};
                    // gopkg.in/macaroon.v2-unstable#Macaroon
                    result.resources[i].errorresult.error.info.macaroon = resp['resources'][i]['ErrorResult']['error']['info']['macaroon'];
                    result.resources[i].errorresult.error.info.macaroonPath = resp['resources'][i]['ErrorResult']['error']['info']['macaroon-path'];
                  }
                }
              }
              // github.com/juju/juju/apiserver/params#Resource
              if (resp['resources'][i]['resource']) {
                result.resources[i].resource = {};
                // github.com/juju/juju/apiserver/params#CharmResource
                if (resp['resources'][i]['resource']['CharmResource']) {
                  result.resources[i].resource.charmresource = {};
                  result.resources[i].resource.charmresource.name = resp['resources'][i]['resource']['CharmResource']['name'];
                  result.resources[i].resource.charmresource.type = resp['resources'][i]['resource']['CharmResource']['type'];
                  result.resources[i].resource.charmresource.path = resp['resources'][i]['resource']['CharmResource']['path'];
                  result.resources[i].resource.charmresource.description = resp['resources'][i]['resource']['CharmResource']['description'];
                  result.resources[i].resource.charmresource.origin = resp['resources'][i]['resource']['CharmResource']['origin'];
                  result.resources[i].resource.charmresource.revision = resp['resources'][i]['resource']['CharmResource']['revision'];
                  result.resources[i].resource.charmresource.fingerprint = [];
                  resp['resources'][i]['resource']['CharmResource']['fingerprint'] = resp['resources'][i]['resource']['CharmResource']['fingerprint'] || [];
                  for (let i2 = 0; i2 < resp['resources'][i]['resource']['CharmResource']['fingerprint'].length; i2++) {
                    result.resources[i].resource.charmresource.fingerprint[i2] = resp['resources'][i]['resource']['CharmResource']['fingerprint'][i2];
                  }
                  result.resources[i].resource.charmresource.size = resp['resources'][i]['resource']['CharmResource']['size'];
                }
                result.resources[i].resource.id = resp['resources'][i]['resource']['id'];
                result.resources[i].resource.pendingId = resp['resources'][i]['resource']['pending-id'];
                result.resources[i].resource.application = resp['resources'][i]['resource']['application'];
                result.resources[i].resource.username = resp['resources'][i]['resource']['username'];
                // time#Time
                result.resources[i].resource.timestamp = resp['resources'][i]['resource']['timestamp'];
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
if (wrappers.wrapResourcesHookContext) {
  // Decorate the facade class in order to improve user experience.
  ResourcesHookContextV1 = wrappers.wrapResourcesHookContext(ResourcesHookContextV1);
}

module.exports = ResourcesHookContextV1;