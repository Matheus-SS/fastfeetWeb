import * as Yup from 'yup';
import File from '../models/File';
import Deliveryman from '../models/Deliveryman';

class SessionDeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.body;

    const deliveryman = await Deliveryman.findByPk(id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'url', 'path'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    const { name, email, avatar } = deliveryman;

    return res.json({
      user: {
        id,
        name,
        email,
        avatar,
      },
    });
  }
}

export default new SessionDeliverymanController();
