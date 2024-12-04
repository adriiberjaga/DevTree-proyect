import { Router } from "express";
import { body } from "express-validator";
import { createAcount, login } from "./handlers";
import { handleInputErrors } from "./middleware/validation";

const router = Router()

// Autenticación y registro
router.post('/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacio'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede ir vacio'),
    body('password')
        .isLength({min: 8, max: 60})
        .withMessage('El password debe tener 8 caracteres minimo'),
    body('email')
        .isEmail()
        .withMessage('El email no es valido'),
        handleInputErrors,
    createAcount
)

router.post('/auth/login',
    body('password')
        .notEmpty()
        .withMessage('El password es obligatorio'),
    body('email')
        .isEmail()
        .withMessage('El email no es valido'),

    login
)

export default router