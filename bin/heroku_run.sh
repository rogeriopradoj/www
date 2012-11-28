#!/usr/bin/env bash
#
# This is a script that starts the server for Heroku. This should be
# pointed to by the Procfile. This is a separate script so that we can flock
# and only do the Middleman build once.

# We use a lockfile and flock to make sure that middleman only builds
# one site at a time.
LOCKFILE="/tmp/heroku_run_lock"

(
  flock -e 200

  if [ ! -d "build" ]; then
    echo Building static site...
    bundle exec middleman build -c
  fi

  echo Starting web server...
  bundle exec thin start -p $PORT
) 200>${LOCKFILE}
