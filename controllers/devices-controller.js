

const deviceModule=require('../models/device-model')


// const getAlldevices = async (request,response)=>{
//     try{
//         const alldevices = await deviceModule.devicemodel.find();
//         response.status(200).json(alldevices) ; //200 ok
//     }
//     catch(err){
//         response.status(500).json({error:err.message}) ;
//         //500 internal server error
//     }
// }

const getAlldevices = async (request, response) => {
    try {
        const alldevices = await deviceModule.devicemodel.find();
        console.log(alldevices); // عرض البيانات في Console
        response.status(200).json(alldevices); // إرسال البيانات إلى Postman
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
};


module.exports.getAlldevices=getAlldevices;
