const mongoose = require('mongoose');
const Contact = require('../models/Contact');
const { StatusCodes } = require('http-status-codes');
const catchAsync = require('../helpers/catchAsync');

const create = catchAsync(async (req, res) => {
    const contact = await Contact.create(req.body);
    res.send(contact);
});

const getAll = catchAsync(async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
});

const getById = catchAsync(async (req, res) => {
    const idContact = req.params.id;
    try {
        new mongoose.Types.ObjectId(id);
    } catch (e) {
        return res.status(StatusCodes.BAD_REQUEST).send("Format de l'id invalide");
    }

    const contact = await Contact.findById(idContact);
    if (contact) {
        res.send(contact);
    } else {
        res.status(StatusCodes.NOT_FOUND).send("Contact introuvable");
    }
});

const updateById = catchAsync(async (req, res) => {
    const idContact = req.params.id;
    const contact = await Contact.findByIdAndUpdate(idContact, req.body, { new: true });
    if (contact) {
        res.send(contact);
    } else {
        res.status(StatusCodes.NOT_FOUND).send("Contact introuvable");
    }
});

const deleteById = catchAsync(async (req, res) => {
    const idContact = req.params.id;
    const contact = await Contact.findByIdandDelete(idContact);
    if (contact) {
        res.send(contact);
    } else {
        res.status(StatusCodes.NOT_FOUND).send("Contact introuvable");
    }
});

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
};