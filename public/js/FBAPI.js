window.fbAsyncInit = function() {
  FB.init({
    appId      : '652765441556324',
    xfbml      : true,
    version    : 'v2.7'
  });

FB.api(
'/me',
'GET',
{"fields":"birthday,email,gender,name"},
function(response) {
  console.log(response);
}
);
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 // window.location = "localhost:9393/users/1";
