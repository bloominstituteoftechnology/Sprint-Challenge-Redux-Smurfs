export const localState = () => {
    try {
        const local = localStorage.getItem('smurfs');
        if (local === null) return;
        return JSON.parse(local);
    }
    catch (err) {
        return;
    }
};

export const saveState = (state) => {
    try {
        const local = JSON.stringify(state);
        localStorage.setItem('smurfs', local);
    }
    catch (err) {
        console.error(err);
    }
}