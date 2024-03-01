import express from 'express';
import { User, Initiative } from '../../../db/models';
import checkAuth from '../../middlewares/checkAuth';


const apihomePageRouter = express.Router();


apihomePageRouter.post('/:id/votes', async (req, res) => {
    try {

        if (res.locals.user) {
            const init = await Initiative.findByPk(req.params.id)
            init.voites += 1
            await init.save()
            res.status(200).json(init);
        } else res.status(401).json({ error: 'Произошла ошибка при обработке вашего голоса' })



    } catch (error) {
        console.error('Ошибка при обработке голоса', error);
        res.status(500).json({ error: 'Произошла ошибка при обработке вашего голоса' })

    }
}
)

export default apihomePageRouter