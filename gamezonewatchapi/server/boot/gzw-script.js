module.exports = function(app) {

  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  var password = 'gzwadmin';

  User.findOrCreate(
    {where: {username: 'admin'}},
    {username: 'admin', email: 'gzwadmin@gamezonewatch.com', password: 'gzwadmin'},
    function(err, user){
      console.log(`created or exist user ${user.id}`);
      if (err) throw err;

      Role.findOrCreate(
        {where: {name: 'admin'}},
        {name: 'admin'},
        function(err, role){
          if (err) throw err;
          console.log(`created or exist role ${role.id}`);

          /** Official: using ROLE class **/
          // role.principals.create({
          //  principalType: RoleMapping.USER,
          //  principalId: user.id},
          /** Not sure below works?? **/
          RoleMapping.findOrCreate(

            {where: {principalType: RoleMapping.USER, principalId: user.id, roleId: role.id}},
            {principalType: RoleMapping.USER, principalId: user.id, roleId: role.id},
            function(err, principal) {
              if (err) throw err;

            // generate access token
            var TWO_WEEKS = 60 * 60 * 24 * 7 * 52;
            User.login({
              email: user.email,           // must provide email or "username"
              password: 'gzwadmin',               // required by default
              ttl: TWO_WEEKS                    // keep the AccessToken alive for at least two weeks
            }, function (err, accessToken) {
              console.log(`Token ID: ${accessToken.id}`);      // => GOkZRwg... the access token
              console.log(accessToken.ttl);     // => 1209600 time to live
              console.log(accessToken.created); // => 2013-12-20T21:10:20.377Z
              console.log(accessToken.userId);  // => 1
            });

        }
      );
    }
  );
});



};
