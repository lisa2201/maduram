const express = require('express')
require('dotenv').config()

const brandModel = require('../models/brand.model')
const AppsConst = require('../share/AppsConst')
const Response = require('../share/Response')

const Router = express.Router()

Router.post('/create-brand', async (req, res) => {
    console.log("working");
    console.log(req);
    const name = req.body.name;
    const desc = req.body.desc;

    try {
        const Brand = new brandModel({
            name: name,
            desc: desc,
        })

        const brand = await Brand.save()


        const get_all_brand = await brandModel.find({})

        return res.status(AppsConst.AppsConst.RequestType.CODE_200).json({
            message: Response.success_create,
            data: get_all_brand
        })

    } catch (error) {

        return res.status(AppsConst.AppsConst.RequestType.CODE_500)
            .json({
                message: error.message,
                code: AppsConst.AppsConst.RequestType.CODE_500
            })
    }

})


Router.get('/get-all-brand', async (req, res) => {

    try {
        console.log('get all brand');

        const brand = await brandModel.find({})

        if (!brand) {

            return res.status(AppsConst.AppsConst.RequestType.CODE_200).json({
                message: 'No data',
                data: []

            })
        }
        
        return res.status(AppsConst.AppsConst.RequestType.CODE_200).json({
            message: Response.success_request,
            data: brand

        })
    }
    catch (err) {
        console.log(err);
        return res.status(AppsConst.AppsConst.RequestType.CODE_500).json({
            message: err.message,
            data: []

        })

    }

})



Router.get('/delete-brand', async (req, res) => {

    try {

        const id = req.query.index;
       
        const deletebrand = await brandModel.findByIdAndDelete(id);

        const brand = await brandModel.find({})

        if (!brand) {

            return res.status(AppsConst.AppsConst.RequestType.CODE_200).json({
                message: 'No data',
                data: []

            })
        }

        const brandArray = [];
        
        return res.status(AppsConst.AppsConst.RequestType.CODE_200).json({
            message: Response.success_request,
            data: brand

        })

    }
    catch (err) {

        console.log(err);
        return res.status(AppsConst.AppsConst.RequestType.CODE_500).json({
            message: err.message,
            data: []

        })

    }

})

module.exports = Router