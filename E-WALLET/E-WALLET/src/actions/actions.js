

function addName(value) {

    return {
        type: 'ADD',
        payload:
            value
    }
};

function replaceActive(value) {

    return {
        type: 'ACTIVE',
        payload:
            value
    }
};
function deleteSelect(value) {

    return {
        type: 'DELETE',
        payload:
            value
    }
};

export { addName, replaceActive, deleteSelect };