const validNumber = num => {
    return typeof num === 'number' && num >= 0;
}

module.exports = validNumber;