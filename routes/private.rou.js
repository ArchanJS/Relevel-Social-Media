const {getDetails,updateProfile,deleteProfile}=require('../controllers/private.con');
const {auth}=require('../middlewares/protect');


const routes=(app)=>{
    app.get('/auth/getdetails',auth,getDetails);
    app.put('/auth/update',auth,updateProfile);
    app.delete('/auth/delete',auth,deleteProfile);
}

module.exports=routes;