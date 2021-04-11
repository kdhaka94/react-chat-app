import http from 'http';
import express from 'express';
import ejwt from 'express-jwt';
import '@babel/polyfill';
import cors from 'cors';
require('dotenv').config();

export const path = '/';

const auth = ejwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
});

const skipError = (err, req, res, next) => {
  if (err) {
    next();
  }
};

export const app = express();

export const httpServer = http.createServer(app);

app.use(cors({ origin: '*' }));
// app.use(helmet());
app.use(path, auth);
app.use(skipError);
// app.use(cor);
