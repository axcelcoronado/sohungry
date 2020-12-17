import CartaControllers from '../controllers/CartaControllers';
import routex from 'express-promise-router';

const router = routex();

router.post('/add', CartaControllers.add);
router.get('/list', CartaControllers.list);
router.get('/query', CartaControllers.query);
router.put('/update', CartaControllers.update);
router.delete('/delete', CartaControllers.delete);