const { celebrate, Joi } = require('celebrate');
const routerCards = require('express').Router(); // создали роутер
const { createCard, getCards, deleteCard, likeCard, dislikeCard } = require('../controllers/cards');

routerCards.get('/cards', getCards);
routerCards.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().min(10).max(300),
  }).unknown(true),
}), createCard);

routerCards.delete('/cards/:id', deleteCard);
routerCards.put('/cards/:cardId/likes', likeCard);
routerCards.delete('/cards/:cardId/likes', dislikeCard);

module.exports = routerCards; // экспортировали роутер
