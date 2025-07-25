const Contact = require('../models/Contact');

//crud - create,read,update,delete

//post - /contacts
exports.create = async(req,res) => {
    //create a new contact from the request body
    const contact = new Contact(req.body);
    //To save contact details in db
    await contact.save();
    //returns saved contact in the response
    res.json(contact);
};

//get - /contacts
exports.getAll = async(req, res) => {
    //Contact.find() to fetch all contacts from mongodb
    const contacts = await Contact.find();
    //sends the list as a json response
    res.json(contacts);
}

//put - /contacts/:id
exports.update = async(req,res) => {
    //find contact by id (req.params.id)
    //And updates it with req.body
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body,{new: true});
    //sends the updated contact back in the response
    res.json(updated);
}
 //delete - /contacts/:id
exports.remove = async(req,res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({success: true});
}

//get,post,put,delete - http verb