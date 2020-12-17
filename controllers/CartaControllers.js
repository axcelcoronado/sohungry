import models from '../models';


export default {
    add: async (req, res, next)=>{
        try {
            const reg = await models.cartaPlato.create(req.body);
            res.status(200).json(reg); 
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrion un erro'
            });
            next(error);
        };
    },
    list: async (req, res, next)=>{
        try {
            const reg = await models.cartaPlato.find();
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrion un erro'
            });
            next(error);
        };
    },
    query: async (req, res, next)=>{
        try {
            const reg = await models.cartaPlato.findOne({_id: req.body._id});
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrion un erro'
            });
            next(error);
        };
    },
    update: async (req, res, next)=>{
        try {
            const reg = await models.cartaPlato.findByIdAndUpdate({
                nombre: req.body.nombre,
                description: req.body.description,
                img: req.body.img,
                category: req.body.category,
                price: req.body.price,
            });
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrion un erro'
            });
            next(error);
        };
    },
    delete: async (req, res, next)=>{
        try {
            const reg = await models.cartaPlato.findByIdAndRemove({_id: req.body._id});
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrion un erro'
            });
            next(error);
        };
    }
};