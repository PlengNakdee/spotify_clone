// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "f52d84452c814bb297d059b52d0bab24";
//const redirectUri = "http://localhost:3000/";
const redirectUri = "http://spotify-clone-cdcb9.web.app/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  // #access_token=BQAX_ys_21qf6&name
  // go to #
  return window.location.hash
    .substring(1) // create substring
    .split("&") // split at '&'
    .reduce((initial, item) => {
      let parts = item.split("="); // split at '='
      initial[parts[0]] = decodeURIComponent(parts[1]); //parts[0] == #access_token, parts[1] == BQAX_ys_21qf6
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
