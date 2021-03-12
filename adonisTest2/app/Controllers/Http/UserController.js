'use strict'

const User = use('App/Models/User');


class UserController {

    // store(){
    //     return{
    //         mensaje:'asdf'
    //     }
    // };
    async login({request, auth}){
        const {email, password} = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    async store({request}){
       const { email, password } = request.all();
       //console.log(email, password);
       //await
       const user =  await User.create({
        email,
        password,
        username: email,
       });
       return user;
    };
}

module.exports = UserController
