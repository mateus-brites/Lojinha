import { body } from 'express-validator';

const schema = [
  body('email')
    .isEmail()
    .withMessage('email invalid'),
  body('telefone')
    .isLength({ min: 11, max: 11 })
    .withMessage('number invalid'),
];

export { schema as registerSchema };