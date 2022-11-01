const followers = document.getElementById('followers');

async function getFollowers(profileId) {
    const url      = `https://instagram.com/${profileId}/?__a=1`;
    const response = await fetch(url);
    // console.log(response);
    const data     = await response.json();

    return data.graphql.user.edge_followed_by.count;
}

async function setFollowers(profileId) {
    followers.textContent = await getFollowers(profileId);
}
setFollowers('jynxzz')
// setInterval(() => setFollowers('jynxzz'), 1000);


// No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
//         Failed to load resource: net::ERR_FAILED
