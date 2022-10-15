# Nested Comments Project
This project is trying to recreate a nested comment section, similar to Reddit.

### Check Database

Start the postgresql database server

```bash
sudo service postgresql start
```

Connect to psql database

```bash
sudo -u postgres psql
```

Connect to the database

```bash
\c comments
```

Use queries to check data in database

```bash
SELECT * FROM "Post";
```


## To start the project:

Open new terminal and cd into server folder

```bash
cd server
```

Run the command to connect server to front-end

```bash
npm run devStart
```

Open another terminal and cd into client side folder

```bash
cd client
```

Run client side

```bash
npm start
```

