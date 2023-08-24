
// const cars=[
//           {
//             id:1 ,
//             name:"Maruti",
//             property:"Manufactured date 2000"
            
//           },
//           {
//             id:2 ,
//             name:"Wagnar",
//             property:"Manufactured date 2000"
            
//           },
//           {
//             id:3 ,
//             name:"BMW",
//             property:"Manufactured date 2000"
            
//           },
//           {
//             id:4 ,
//             name:"pept",
//             property:"Manufactured date 2000"       
            
//           },
//           {
//             id:5 ,
//             name:"alto",
//             property:"Manufactured date 2000"
            
//           },
//           
//             id:6 ,
//             name:"activa",
//             property:"Manufactured date 2012"
            
//           }
          
// ]
// console.log(cars)

// const councling=(callback)=>{
//   setTimeout(()=>{
//     console.log("Councling Started")
//     callback();

//   },2000)
// }

// const coursechoosing=(callback)=>{
//   setTimeout(()=>{
//     console.log("Course has been choosed")
//     callback();
//   },2000)
  
// }

// const startCourse=(callback)=>{
//   setTimeout(()=>{
//     console.log("Course has Been Started")
//    callback();
//   },2000)
// }

// const Github=(callback)=>{
//   setTimeout(()=>{
//     console.log("Github has Been Started")
//     callback();
//   },3000)
// }
// const HTML=(callback)=>{
//   setTimeout(()=>{
//     console.log("HTML has Been Started")
//     callback();
//   },3000)
// }
// const Cstarted=(callback)=>{
//   setTimeout(()=>{
//     console.log("CSS has Been Started")
//     callback();
//   },3000)
// }

 




// console.log("Counclimg has going to done")
// councling(()=>{
//        console.log("Councelling has been done")
//        console.log("Process of chooseing the course ")
//        coursechoosing(()=>{
//                         console.log("Course= Mearn Stack Development ")
//                         console.log("Linux is Started" )
//                        startCourse(()=>{
//                                  console.log("Linux is Ended")
//                                  console.log("Github is Satrted")
//                                  Github(()=>{
//                                  console.log("Github is ended")
//                                  console.log("HTML is started")
//                                  HTML(()=>{ 
//                                         console.log("HTML is Ended")
//                                         console.log("CSS is Started")
//                                         Cstarted(()=>{
//                                                     console.log("Css is completed")
//                                       });
//                               });
//                        });
//                });
//          });
//     });





// function get_Vegetables(callback){
//   setTimeout(()=>{
//         vegetable="🥗"
//     console.log(" Vegetable is Get")
//         callback();
//   },2000) 
// }
// function get_allo(callback){
//   setTimeout(()=>{
//         console.log("allo is Get")
//         callback();
//   },2000) 
// }
// function make_dough(callback){
//   setTimeout(()=>{
     
//         console.log("dough is Ready")
//         callback();
//       },2000 ) 
// }
// function make_Kulcha(callback){
//   setTimeout(()=>{
     
//         console.log("Kulcha  is Ready")
//         callback();
//    },2000) 
// }
// function make_Chole(callback){
//   setTimeout(()=>{
//     console.log("Chole is Ready")
//     callback();
//   },1000)
// }
//   function serve_chole_kulche(callback){
//     setTimeout(()=>{
//       console.log("Chole kulche is Served")
//       callback();
//     },3000)
//   }
//   function Pay_bill(callback){
//     setTimeout(()=>{
//       console.log("Bill Payment is Done with Tip")
//       callback();
//     },2000)
//   }
// console.log("How to Make The Burger")
// console.log("Go to Market and get the Vegeables")
// get_Vegetables(()=>{
//     get_allo(()=>{
//       console.log("Make dough")
//         make_dough(()=>{
//           console.log("Make Kulcha")
//             make_Kulcha(()=>{  
//              console.log("Make Chole")
//               make_Chole(()=>{
//                 console.log("Chole Kulche is rady to serve")
//                 serve_chole_kulche(()=>{  
//                   console.log("Pay the Bill")
//                   Pay_bill(()=>{
//                     console.log("Process Ended")
//                   })
//                 })
//               })
//             })
//         })      
//     })
// })




// function placeorder(orderDetails) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const orderNumber = 31566540;
//       resolve(
//         `Order ${orderNumber} placed successfully with order details ${orderDetails}`
//       );
//     }, 2000);
//   });
// }
// function startProduction(orderNumber) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Order ${orderNumber} is now in production}`);
//     }, 2000);
//   });
// }
// placeorder("2x t-shirt, 1x Jeans ")
//   .then((orderConfirm) => {
//     console.log(orderConfirm);
//     const orderNumber = 31566540;

//     return startProduction(orderNumber);
//   })
//   .then((productionStatus) => {
//     console.log(productionStatus);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   })
//   .finally(() => {
//     console.log("Finally done");
//   });

// const placeorder = (callback) => {
//   setTimeout(() => {
//     console.log("Order placed");
//     callback();
//   }, 2000);
// };

// const startProduction = (callback) => {
//   setTimeout(() => {
//     console.log("Production started");
//     callback();
//   }, 5000);
// };

// const printID = (callback) => {
//   setTimeout(() => {
//     console.log("Id printed");
//     callback();
//   }, 5000);
// };

// const productName = (callback) => {
//   setTimeout(() => {
//     console.log("productName printed");
//     callback();
//   }, 5000);
// };

// const productDesc = (callback) => {
//   setTimeout(() => {
//     console.log("productDesc printed");
//     callback();
//   }, 5000);
// };

// console.log("Order is now going to take");
// placeorder(()=>{
//   console.log('pass to production');
//   startProduction(()=>{
//     console.log('passing to id');
//     printID(()=>{
//       console.log('pass to product name');
//       productName(()=>{
//         console.log('pass to product desc');
//         productDesc(()=>{
//           console.log('All task done');
//         })
//       })
//     })
//   })
// })