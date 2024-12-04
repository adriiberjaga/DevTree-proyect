import type { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"

export const handleInputErrors = (req: Request, res: Response, next: NextFunction) => {
//manejar errores
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors : errors.array()})
        return
    }
    next() // esto hace que despues de handleInputErrors se ejecute la funcion siguiente,
            // en este caso esta en el router.ts, en la linea donde se llama a handleInputErrors, (siguiente funcion)
}