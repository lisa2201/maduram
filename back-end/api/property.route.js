const express = require('express')
require('dotenv').config()

const propertyModel = require('../models/property.model')
const AppsConst = require('../share/AppsConst')
const Response = require('../share/Response')
const Router = express.Router()

Router.post('/create-property', async (req, res) => {
    
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    const brand = req.body.brand;
    const model = req.body.model;
    const desc = req.body.desc;
    const price = req.body.price;
    const seat = req.body.seat;
    const laggage = req.body.laggage;
    const fuel = req.body.fuel;
    const codePostal = req.body.location;
    const gear = req.body.desc;
    const img = req.body.img;


    try {
        const Property = new propertyModel({
            name: model,
            desc: desc,
            brand:brand,
            price:price,
            seat: seat,
            gear_type: gear,
            laggage:laggage,
            price_per_day: price,
            img_path:img,
            code_postal:codePostal,
            fuel:fuel
            
        })

        const property = await Property.save()

        console.log('====================================');
        console.log(property);
        console.log('====================================');
        const get_all_property = await propertyModel.find({}).populate('brand')

        
        return res.status(AppsConst.AppsConst.RequestType.CODE_200).json({
            message: Response.success_create,
            data: get_all_property
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
        const property = await propertyModel.find({}).populate('brand')

        if (!property) {

            return res.status(AppsConst.AppsConst.RequestType.CODE_200).json({
                message: 'No data',
                data: []

            })
        }
        
        return res.status(AppsConst.AppsConst.RequestType.CODE_200).json({
            message: Response.success_request,
            data: property

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



Router.get('/delete', async (req, res) => {

    try {

        const id = req.query.index;
       
        const deletebrand = await propertyModel.findByIdAndDelete(id);

        const property = await propertyModel.find({}).populate('brand')

        if (!property) {

            return res.status(AppsConst.AppsConst.RequestType.CODE_200).json({
                message: 'No data',
                data: []

            })
        }

        const propertyArr = [];
        
        return res.status(AppsConst.AppsConst.RequestType.CODE_200).json({
            message: Response.success_request,
            data: property

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