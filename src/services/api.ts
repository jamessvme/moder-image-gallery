const ACCESS_KEY = "zZ6ecsetu0Afq33vW8VB8cMoGYid7WfQHAtTTUtaFYU";

const headerlist = {
    "Content-Type": 'application/json',
    Authorization: `Client-ID ${ACCESS_KEY}`,
}

export const getPhotos = async () => {
    try {
        const response = await fetch(`https://api.unslash.com/photos/`, {
            headers: headerlist
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return console.log(err);
    }
};