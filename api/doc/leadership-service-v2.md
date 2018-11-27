<!---
NOTE: this file has been generated by the doc command in js-libjuju
on Tue 2018/11/27 16:23:14 UTC. Do not manually edit this file.
--->
# LeadershipService v2

LeadershipService implements a variant of leadership.Claimer for consumption
  over the API.
This API facade is available on model connections.

To include LeadershipServiceV2 capabilities in your client, load it as
part of your facades, for instance:
```javascript
const {conn, logout} = await jujulib.connectAndLogin(url, credentials, {
  facades: [require('jujulib/api/facades/leadership-service-v2')]
});
```
Facade methods at then accessible at `conn.facades.leadershipService`.

Go back to [index](index.md).

## Methods
- [blockUntilLeadershipReleased](#blockUntilLeadershipReleasedargs-callback)
- [claimLeadership](#claimLeadershipargs-callback)

## blockUntilLeadershipReleased(args, callback)
BlockUntilLeadershipReleased blocks the caller until leadership is released
    for the given service.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  name: string
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
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
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## claimLeadership(args, callback)
ClaimLeadership makes a leadership claim with the given parameters.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  params: []{
    applicationTag: string,
    unitTag: string,
    duration: float
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
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
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.