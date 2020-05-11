function getUniqueIdGenerator() {
    let index = 0;
    return () => `uid-${index++}`;
}

module.exports = {
    generateUniqueId: getUniqueIdGenerator(),
};
