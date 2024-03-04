import axios from "axios";
import Cookies from 'universal-cookie';

export const validateCurrentUser = async () => {
    const cookies = new Cookies(null, { path: '/' });
    let validatorBl = {
        validatorBl: false,
        user: null
    };

    const id = cookies.get('wr_token');

    if (id) {
        await axios
            .get(`${import.meta.env.VITE_SERVER_API}/validate?id=${id}`)
            .then((response) => {
                if (response.data.exists) {
                    console.log("Session OK", response.data);

                    const expirationTimeInSeconds = 7 * 24 * 60 * 60;
                    cookies.set('wr_token', id, { maxAge: expirationTimeInSeconds });

                    validatorBl.validatorBl = true;
                    validatorBl.user = response.data.data;
                } else {
                    validatorBl.validatorBl = false;
                }
            })
            .catch((error) => {
                validatorBl.validatorBl = false;
                console.log(error);
            });
    }

    return validatorBl;
};
