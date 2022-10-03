import admin from "firebase-admin";
import fcm from "../../config/firebase";

export const sendPushNotification = async (
    orgName: string,
    Payout: number,
    orgImage: string,
    data: any
) => {
    const androidConfig: admin.messaging.AndroidConfig = {
        priority: "high",
    };
    const pushNotificationMessage = {
        android: androidConfig,
        topic: "something",
        notification: {
            title: "New something",
            body: `${orgName} created a new something of KSH ${Payout}. participate and earn.`,
            imageUrl: orgImage,
        },
        data: {
            name: `${data.name}`,
            description: `${data.description}`,
            created: `${data.created}`,
            icon: `${data.icon}`,
            _id: `${data._id}`,
            account: `${data.account}`,
        },
    };
    try {
        const notification = await fcm.send(pushNotificationMessage);
        console.log(notification);
    } catch (e) {

        console.log(e)
    }
};
export const sendTransactionPushNotification = async (
    token:string,
    amount:number,
    from:string,
    date:string,
    receiverID:string,
    receiverNewBalance:number,
) => {
    const androidConfig: admin.messaging.AndroidConfig = {
        priority: "high",
    };
    const pushNotificationMessage = {
        android: androidConfig,
        token: token,
        notification: {
            title: "New Transaction",
            body: `You have successfully received KSH ${amount} from ${from} at ${date} your new balance is KSH ${receiverNewBalance}`,
        },
        data: {
            id: `${receiverID}`,
            amount: `${amount}`,
            from: `${from}`,
            date: `${date}`,
        },
    };
    try {
        const notification = await fcm.send(pushNotificationMessage);
        console.log(notification);
    } catch (e) {
        console.log(e);
    }
};