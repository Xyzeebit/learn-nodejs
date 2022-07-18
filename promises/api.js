module.exports = {
    getUser(loginInfo){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(loginInfo) {
                    resolve({ id: 1 });
                } else {
                    reject(new Error('User does not exist'));
                }
            }, 500);
        });
    },
    getProfile(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user) {
                    resolve({
                        name: 'Vic Lover',
                        age: 35
                    });
                } else {
                    reject(new Error('No user that matches profile'));
                }
            }, 500);
        });
    }

}