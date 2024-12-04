import type { Request, Response } from "express"
import { validationResult } from "express-validator"
import User from "../models/User"
import { checkPassword, hashPassword } from "../utils/auth"
import slugify from 'slugify'

export const createAcount = async (req: Request, res: Response) => {

    
    // hasta aqui //manejar errores
    const { email, password} = req.body

    const userExists = await User.findOne({email})
    if(userExists) {
        const error = new Error('Un usuario con ese email ya esta registrado')
        res.status(409).json({error : error.message })
    }

    const handle = slugify(req.body.handle, '')
    const handleExists = await User.findOne({handle})
    if(handleExists) {
        const error = new Error('Nombre de usuario no disponible')
        res.status(409).json({error : error.message })
    }

    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle

    await user.save()
    res.send('Registro creado correctamente')
}

export const login = async (req: Request, res: Response) => {
    //manejar errores(igual q arriba)
    let errors = validationResult(req)
    if(!errors.isEmpty()){
         res.status(400).json({errors : errors.array()})
         return
    }


    //revisar si esta registrado
    const { email, password} = req.body

    const user = await User.findOne({email})
    if(!user) {
        const error = new Error('el usuario no existe')
        res.status(404).json({error : error.message })
    }
    //comprobar password
    const isPasswordCorrect = await checkPassword(password, user.password)
    if(!isPasswordCorrect) {
        const error = new Error('Password incorrecto')
        res.status(401).json({error : error.message })
    }
    res.send('Autenticado..')
}