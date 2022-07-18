const { getUser, getProfile } = require('./api');

(async () => {
    try {
        const asyncUser = await getUser(true);
        console.log("async user:", asyncUser);
    } catch (error) {
        console.log(error.message);
    }
})();

(async () => {
    try {
        const asyncProfile = await getProfile(true);
        console.log("async profile:", asyncProfile);

    } catch (error) {
        console.log(error.message);
    }
})();

(async (pass) => {
    try {
        const asyncUser = await getUser(pass);
        console.log("async user:", asyncUser);

        const asyncProfile = await getProfile();
        console.log("async profile:", asyncProfile);
    } catch (error) {
        console.log(error.message);
    }
})(true);