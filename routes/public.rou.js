const {signUp,verify,signIn,forgotPassword,resetPassword}=require('../controllers/public.con');

// Signup
const routes=(app)=>{
    app.post('/signup',signUp);
    app.put('/verify',verify);
    app.post('/login',signIn);
    app.post('/forgotpassword',forgotPassword);
    app.put('/resetpassword',resetPassword);
}

module.exports=routes;