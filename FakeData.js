 const UserList = [
    {
        id: 1,
        name: 'Doe',
        username:'John',
        age: 10,
        nationality:'AMERICA'
    },
    {
        id: 2,
        name: 'Ricardo',
        username:'Amparo',
        age: 35,
        nationality:'CONGO'
    },
    {
        id: 3,
        name: 'Pédro',
        username:'Gonzalez',
        age: 45,
        nationality:'BRAZIL',
        friends:[
            {
                id: 4,
                name: 'Michael',
                username:'Jade',
                age: 30,
                nationality:'IRISH'
            },
            {
                id: 5,
                name: 'Jules',
                username:'Médard',
                age: 50,
                nationality:'FRENCH'
            },
        ]
    },
    {
        id: 4,
        name: 'Michael',
        username:'Jade',
        age: 30,
        nationality:'IRISH'
    },
    {
        id: 5,
        name: 'Jules',
        username:'Médard',
        age: 50,
        nationality:'FRENCH'
    },
]

module.exports = {UserList}