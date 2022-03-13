'use strict';
function acl(action) {
    return (req, res, next) => {
        try {
            if (req.userc.actions.includes(action)) {
                next();
            } else {
                next('access denied')
            }
        } catch (e) {

        }
    }
}

module.exports = acl;