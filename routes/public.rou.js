const {signUp,verify,signIn,forgotPassword,resetPassword,getAllUsers}=require('../controllers/public.con');


const routes=(app)=>{
    app.post('/signup',signUp);
    app.put('/verify',verify);
    app.post('/login',signIn);
    app.post('/forgotpassword',forgotPassword);
    app.put('/resetpassword',resetPassword);
    app.get('/getusers',getAllUsers);
}

module.exports=routes;