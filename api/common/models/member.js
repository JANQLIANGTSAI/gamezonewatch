'use strict';

module.exports = function(Member) {

Member.disableRemoteMethodByName("count", true);

};
