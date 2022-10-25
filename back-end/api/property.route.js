const express = require('express')
require('dotenv').config()

const brandModel = require('../models/brand.model')
const AppsConst = require('../share/AppsConst')
const Response = require('../share/Response')
const Router = express.Router()

Router.post('/create-property', async (req, res) => {
    
    const brand = req.body.brand;
    const model = req.body.model;
    const desc = req.body.desc;
    const price = req.body.price;
    const seat = req.body.seat;
    const laggage = req.body.laggage;
    const fuel = req.body.fuel;
    const gear = req.body.desc;


    try {
        const Brand = new brandModel({
            name: model,
            desc: desc,
            brand:brand,
            price:price,
            seat: seat,
            gear_type: gear,
            laggage:laggage,
            price_per_day: price,
            
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


Router.get('/get-all-property', async (req, res) => {

    try {

        // loading comment with created_by (user_id)
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



Router.get('/delete-property', async (req, res) => {

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