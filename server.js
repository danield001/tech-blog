const express = require('express');
const session = require('express-session');
const routes = require('./Controllers');
const path = require('path');

const sequelizeInstance = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({
    helpers: {
        eq: function (v1, v2) {
            return v1 === v2;
        },
        json: function (context) {
            return JSON.stringify(context);
        },
    }
});

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 30 * 60 * 1000, // 30 minutes
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelizeInstance
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.use(routes);

//server side routes
app.get('/', (req, res) => {
    res.render('home', { loggedIn: req.session.loggedIn });
});

app.get('/login', (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn });
});

app.get('/newPost', (req, res) => {
    res.render('post', { loggedIn: req.session.loggedIn });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { loggedIn: req.session.loggedIn });
});

sequelizeInstance.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
