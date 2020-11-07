import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@thestore.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@thestore.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Smythe',
        email: 'jane@thestore.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users