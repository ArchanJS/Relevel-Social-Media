const {signUp,verify,signIn}=require('../controllers/public.con');

// Signup
const routes=(app)=>{
    app.post('/signup',signUp);
    app.put('/verify',verify);
    app.post('/login',signIn);
}

module.exports=routes;