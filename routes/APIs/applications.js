
const { default: axios } = require("axios");
const { firestore } = require("../../firebase/firebase");




function ProcessApplication(req, res, next) {

    firestore.collection("applications").get().then(async (result) => {
        const applications= result.docs.map(doc => doc.data());

        applications.map(async (application)=>{
            const value= await verifyPayment(application.reference) 
            if(value.status && value.status==1){
                firestore.collection("participants").doc(application.participant.email).set(application.participant)
                firestore.collection("applications").doc(application.participant.email).delete()
            }else{
                const timestamp= application.participant.registeredOn||0
                const diff = (Date.now- timestamp)/1000/60/60
                if(diff>=1){
                    firestore.collection("applications").doc(application.participant.email).delete()
                }
            }
            await new Promise((resolve,reject)=>{
                setTimeout(async () => {
                    resolve("")
                }, 500);
            })

        })
       res.send({message:"successfull"});
    })
   .catch((err)=>{
    res.send({ status: err.message +" error"});
   })
}

async function verifyPayment(reference=""){
    if(!reference){
       return new Promise((res, reject)=>(reject({message:"no reference"})))
    }
    else{
        return axios.get( `https://zitopay.africa/api_v1?action=get_transaction&receiver=${'sird655@gmail.com'}&ref=${reference}`).then(res=>res.data).catch(err=>err)
        
    }


}
module.exports = { ProcessApplication }