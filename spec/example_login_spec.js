import {StateChart, attrValue} from 'base/build/svengali';

describe('StateChart', ()=>{
  describe('Login', ()=>{
    var stateChart;

    beforeEach(()=>{
      // new Router([
      //   path('/', redirectTo('loggedIn/streams')),
      //   path('streams', 'loggedIn/streams/index', [
      //     path(':streamId', 'loggedIn/streams/show')
      //   ]),
      //   path('login', 'loggedOut')
      // ]);

      // Offline logged in before
      // Offline logged out
      // Online logged in
      // Online logged out

      stateChart = new StateChart({
        enter(){
          this.fb = new Firebase('https://ticker-test.firebaseio.com');
        },
        attrs:{
          user:()=>new Promise(resolve=>
            this.fb.authWithOAuthRedirect('github', (error, authData)=>resolve(
              User.get(fbUser.id).$promise.
                catch(error=>
                  // Create user with no streams
                  new User({
                    id:fbUser.id,
                    eventStreams:[]
                  }).$save().$promise
                ).
                then(user=>this.user = user)
            ))
          )
        },
        // states: {
        //   'loggedIn':{
        //     states:concurrent({
        //       'mainView':{
        //         states:{
        //           'streams':{
        //             states:{
        //               'index':{
        //                 attrs:{'streams':()=>this.user}
        //               },
        //               'show':{
        //                 params: ['streamId'],
        //                 attrs:{'stream':({streamId})=>Streams.get(streamId)}
        //               }
        //             }
        //           },
        //
        //           'search':{
        //             attrs:{'isSearching':true}
        //             events:{
        //               'selectStream':goto('../streams/show', streamId=>{streamId})
        //             }
        //           }
        //         }
        //       },
        //       'drawerView':{
        //         states:{
        //           'expanded':{
        //             attrs:{'isDrawerExpanded':true},
        //             events:{
        //               'selectStream':goto('../../mainView/streams/show', streamId=>{streamId}),
        //               'selectSearch':'../../mainView/search'
        //             }
        //           },
        //           'collapsed':{}
        //         }
        //       }
        //     })
        //   },
        //   'loggedOut':{
        //     states:{
        //       'attemptingLogin':{
        //         enter({user,pass}){}
        //       },
        //       'waitingForLogin':{}
        //     }
        //   }
        // },
        // events:{
        //   'wentOnline':'',
        //   'wentOffline':''
        // }
      });
    });
  });
});
