import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

import { Op } from 'sequelize';
import * as Yup from 'yup';

class DeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number()
        .integer()
        .positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    //checks if exists a deliveryman with the email that is on req.body
    if (deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists.' });
    }

    // const avatar = await File.findByPk(req.body.avatar_id, {
    //   attributes: ['id', 'path', 'url'],
    // });

    //create deliveryman
    const { name, avatar_id, email } = await Deliveryman.create(req.body);

    return res.json({
      deliveryman: {
        name,
        avatar_id,
        email,
        created_at,
      },
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.number()
        .integer()
        .positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { email } = req.body;
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    //checks if exists a deliveryman
    if (!deliveryman) {
      return res.status(400).json({ error: 'deliveryman does not exists.' });
    }

    //checks if exist the field email, if exists
    //checks if exists a deliveryman with the email that is on req.body
    if (email && email !== deliveryman.email) {
      const deliverymanExists = await Deliveryman.findOne({
        where: { email },
      });

      if (deliverymanExists) {
        return res.status(400).json({ error: 'deliveryman already exists.' });
      }
    }
    //the deliveryman is NOT the model Deliveryman,
    //instead, it is the variable deliveryman
    await deliveryman.update(req.body);

    const { id, name, avatar } = await Deliveryman.findByPk(req.params.id, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }

  async index(req, res) {
    const { page = 1, search } = req.query;
    const deliveryman = await Deliveryman.findAll({
      order: ['created_at'],
      where: {
        name: {
          [Op.iLike]: search ? `%${search}%` : '%%',
        },
      },
      attributes: ['id', 'name', 'avatar_id', 'email'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['url', 'name', 'path'],
        },
      ],
    });

    return res.json(deliveryman);
  }

  async show(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['url', 'path', 'id'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }
    return res.json(deliveryman);
  }

  async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    await deliveryman.destroy();

    return res.json(deliveryman);
  }
}

export default new DeliverymanController();
