
const ActiveDirectory = require('activedirectory');
const dotenv = require('dotenv');

dotenv.config();

const config = {
    url: process.env.AD_URL,
    baseDN: 'dc='+process.env.DOMAIN_CONTROLLER+', dc='+process.env.DOMAIN_SULFIX,
    username:process.env.AD_USERNAME,
    password:process.env.AD_PASSWORD,
    referrals: {
        enabled: true,
        excluded: [ ]
    }
}

const configGrupo = {
    url: process.env.AD_URL,
    baseDN: 'dc=example,dc=com',
    username:process.env.AD_USERNAME,
    password:process.env.AD_PASSWORD
}

const ad = new ActiveDirectory(config);
const adGrupo = new ActiveDirectory(configGrupo);


module.exports = {
    ad,
    adGrupo,
};  