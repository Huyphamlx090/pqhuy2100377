import express from "express"
const getContact = (req, res) => {
    return res.render("home", { data: { title: 'Page Contact',
        page:'contact', 
        name: 'Phạm Quốc Huy ', 
        email: 'huyphamlx090@gmail.com',
        phonenumber: '1234567890' } })
}
export default getContact