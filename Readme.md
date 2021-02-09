### NodeJs Api Project/Template

I wanted to build a quick template on an approach to building web apis in the future

NOTE: This is not production ready code

### Prerequisites

- Docker / Docker Compose [get-started](https://www.docker.com/get-started)
- (optional) Node Js (See [./.tool-versions](./.tool-versions)) for the current version
### Getting started

#### 1 Exploring
1. Start docker -> `docker-compose up`
2. Download Postman
3. Import collection from local postman folder
4. Set environment to development
5. Use the collection to view implemented apis

#### 2. Developing

1. Start DB Container (detached)

```sh
docker-compose up db -d
```

2. Copy .env.sample to .env

```
cp ./.env.sample ./.env
```

3. Install NPM Dependencies

```
npm i
```

3. Set up DB (only on first run) or if you want to do a dry run

```
npm run db:reset
```

4. Run in dev mode

```
npm run dev
```

5. Start developing & Testing (will have to turn off `npm run dev` process)

```
npm test
```

#### Current stack
- Express as the web server
- Newman with postman for documentation/acceptance tests
- Sequelize with sequelize-cli for database management
- Supertest with mocha and chai for tdd

### Resources
#### Inspiration (supertest + express + sequelize):
https://levelup.gitconnected.com/build-an-express-api-with-sequelize-cli-and-express-router-963b6e274561