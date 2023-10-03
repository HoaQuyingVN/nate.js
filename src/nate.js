class DataError extends Error {
  constructor(msg) {
        super(msg);
    }
}
class Client {
  constructor(api, object){
  this.api = "https://discord.com/api/v10" | api // Create bot send to API Endpoint and Automatically Send
  this.object = object
}
  login(token) {
    /** 
    Login the Bot
    **/
const a = fetch(this.api, { 
    method: 'post', 
    headers: new headers({
        'Authorization': 'basic '+token, 
        'content-type': 'application/x-www-form-urlencoded'
    }), 
});
}
}