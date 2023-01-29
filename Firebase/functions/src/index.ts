import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
// - https://stackoverflow.com/questions/44547676/send-push-notifications-using-cloud-functions-for-firebase

admin.initializeApp({
    credential: admin.credential.cert({
        //...
    })
});

const messaging = admin.messaging();

const registrationToken = "";
export const helloWorld = functions.https.onRequest((request, response) => {
    messaging.sendToDevice(registrationToken, {
        // notification: {
        //     title: "Duty Ready!",
        //     body: "You have ~" + request.body.timeleft + " seconds to confirm entry into " + request.body.name,
        //     sound: "default"
        // }
        data: request.body
    });

    response.send(request.body);
});
