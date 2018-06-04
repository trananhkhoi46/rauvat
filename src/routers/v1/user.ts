import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { userController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, adminAuthInfoMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class UserRouter extends CrudRouter<typeof userController> {
    constructor() {
        super(userController)

    }
    customRouting() {
        this.router.post('/check_username', this.route(this.checkUsername))
    }
    async checkUsername(req: Request, res: Response) {
        const result = await this.controller.checkUsername(req.body)
        if (result['duplicate'] == true) {
            res.status(201).json({
                code: 201,
                results: { object: { message: result['resultOfCheckUser'] } }
            })
        } else {
            this.onSuccess(res, result)
        }
    }
    async update(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.update(req.body, {
            filter: { id }
        })
        this.onSuccess(res, result)
    }
    async create(req: Request, res: Response) {
        if (req.body.fullname == undefined) {
            req.body.fullname = "";
        }
        if (req.body.sex == undefined) {
            req.body.sex = "Other"
        }
        if (req.body.birthday == undefined) {
            req.body.birthday = new Date();
        }
        if (req.body.address == undefined) {
            req.body.address = ""
        }
        if (req.body.email == undefined) {
            req.body.email = ""
        }
        const result = await userController.create(req.body)
        this.onSuccess(res, result)
    }
    async getList(req: Request, res: Response) {
        var objects = await this.controller.getList(req.queryInfo)
        if (objects.toJSON) {
            objects = objects.toJSON()
        }
        var resultNotPass = Object.assign({
            objects
        }, undefined)
        var rowJson = resultNotPass.objects.rows;
        for (var i = 0; i < rowJson.length; i++) {
            var jsonObject = rowJson[i].dataValues;
            delete jsonObject["password"]
            resultNotPass.objects.rows[i].dataValues = jsonObject;
        }
        const page = _.floor(req.queryInfo.offset / req.queryInfo.limit) + 1
        res.json({
            code: 200,
            results: resultNotPass,
            pagination: {
                'current_page': page,
                'next_page': page + 1,
                'prev_page': page - 1,
                'limit': req.queryInfo.limit
            }
        })
    }
    async getItem(req: Request, res: Response) {
        const { id } = req.params
        req.queryInfo.filter.id = id
        var object = await this.controller.getItem(req.queryInfo)
        object = object || {}
        var resultNotPass = Object.assign({
            object
        }, undefined)
        var rowJson = resultNotPass.object;

        var jsonObject = rowJson.dataValues;
        delete jsonObject["password"]
        resultNotPass.object.dataValues = jsonObject;

        if (Object.keys(object).length === 0) {
            res.json({
                code: 200
            })
        } else {
            res.json({
                code: 200,
                results: resultNotPass
            })
        }
    }

    getListMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    getItemMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    updateMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    deleteMiddlewares(): any[] {
        return [adminAuthInfoMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [adminAuthInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [adminAuthInfoMiddleware.run()]
    }
}