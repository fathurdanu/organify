const bcrypt = require('bcrypt')
const saltRound = 7;

const encryptPwd = data => {
    return bcrypt.hashSync(String(data), saltRound)
}

const decryptPwd = (data, hashPwd) => {
    return bcrypt.compareSync(String(data), hashPwd)
}

module.exports = {
    encryptPwd, decryptPwd
}