# Portfolio in the form of a web application

**Frontend** (this repo):  Using Vue3 + Vite.

**Backend** ([Github repo](https://github.com/vr33ni/web-portfolio-backend)): Using NodeJs + Firebase as a database.

Notes:
Project uses vuex store, axios and vue router.
Basic unit testing is being set up.
Plan to include e2e testing using nightwatch in the future.
The application is (currently manually) deployed to herokuapp.com.
Currently this is done via a connection to github, but the plan here is to write a Dockerfile and deploy it using Docker.

## Install & Run server on localhost

run `git clone`

run `npm run build`

run `npm run dev`

## Todo

1. Tests (Jest+E2E Nightwatch)
2. Cleanup
3. Rework authenticaation (as for now, only authenticated users have access, but this should only be for a minor part of the app, the rest should stay public)
