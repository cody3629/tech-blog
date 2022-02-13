const { User } = require('../models');

const userData = [
    {
        username: "chuck_f",
        twitter: "chuckf",
        github: "chuckf",
        email: "chuck_f@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "joe_s",
        twitter: "joes",
        github: "joes",
        email: "joe_s@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "bob_a",
        twitter: "bob123",
        github: "bob",
        email: "bob_a@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "matt_w",
        twitter: "mattw123",
        github: "matt",
        email: "matt_w@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "cody_w",
        twitter: "codyw123",
        github: "cody3629",
        email: "webbcody36@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "gaia",
        twitter: "gaia_g",
        github: "gaia",
        email: "gaia@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;