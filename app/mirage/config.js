import Mirage from 'ember-cli-mirage';

export default function() {
    this.namespace = 'http://localhost:4200';
    //this.namespace = 'http://localhost:4200';

    this.pretender.get('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions', this.pretender.passthrough);
    this.pretender.get('http://localhost:8080/testRest/users/addUser', this.pretender.passthrough);
    //this.pretender.post('http://ec2-54-88-29-105.compute-1.amazonaws.com/addNewUser', this.pretender.passthrough);

    this.post('/users/log-in', function(db, request){
      var userData = JSON.parse(request.requestBody);

      //Stub only one user:
      if(userData.userId == "testUser"){
        return {
          isSuccessful: true,
          userId: userData.userId,
          token: "123456abcde"
        };
      }else{
        return new Mirage.Response(401, {title: 'Failure!'}, {message: 'login failed'});
      }
    });

    this.post('/addNewUser', function(db, request){
      return {
        isSuccessful: true,
        token: "123456abcde"
      };
    });
}
