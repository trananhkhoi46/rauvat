import { BaseMiddleware } from './base'
import { errorService, tokenService, ICrudOption } from '@/services'
import * as express from 'express'
import { Request, Response } from '@/routers/base'
import * as jwt from 'jsonwebtoken'
const SECRET_KEY='caco3+hno3'
const HEADERS='authorization'
export class AdminAuthInfoMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction, providers: string[] = []) {
   
    
    if (req.headers[HEADERS]!=='undefined') {
      const bearerHeader = req.headers[HEADERS].toString()
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
      

        jwt.verify(bearerToken,SECRET_KEY,(err:any,authData:any)=>{
          console.log(err)
          if(err){
            throw errorService.auth.unauthorized();
          }else{
            next()
          }
      });
    } else {
        throw errorService.auth.unauthorized();
    }
  }
}