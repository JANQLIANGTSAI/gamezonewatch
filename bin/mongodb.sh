#!/bin/sh 

# run manually
ulimit -n 1024 && mongod --config /usr/local/etc/mongod.conf

# To have launchd start mongodb now and restart at login:
# $  brew services start mongodb
