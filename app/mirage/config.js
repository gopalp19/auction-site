export default function() {
    this.namespace = 'http://localhost:4200';

    this.pretender.get('http://ec2-54-88-29-105.compute-1.amazonaws.com/auctions', this.pretender.passthrough);

    this.post('/users/log-in', function(db, request){
      return {
        userId: "testUser1",
        token: "123456abcde"
      };
    });
}
