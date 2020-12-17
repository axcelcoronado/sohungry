import cartaRouter from './cartaPlatosRuta';
import cartaRouter from 'express-promise-router';
import routex from 'express';

const router = routex();

router.use('carta', cartaRouter);

export default router;