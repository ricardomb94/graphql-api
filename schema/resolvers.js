
const {UserList} = require('../FakeData');
const _ = require('lodash')

//All the functions that make calls to API must be defined in this single object
const resolvers = {
    Query :{
        users: () => {
            return UserList;
        },
        user:(parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        }
    }
}

module.exports = {resolvers}