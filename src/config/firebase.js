import app from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCBwFamUB9H6vjgCh0bI7qT_xVmN3HhZTA",
    authDomain: "retro-news-7331e.firebaseapp.com",
    projectId: "retro-news-7331e",
    storageBucket: "retro-news-7331e.appspot.com",
    messagingSenderId: "787561753647",
    appId: "1:787561753647:web:db366faec01d56ebfe2ada",
    measurementId: "G-XY0RVR0WZK"
};

app.initializeApp(config);
const store = app.firestore();

const o =  {
    getComments: (articleId) => store.doc("comments").where("articleId", "==", articleId).get(),
    createComment: (body) => store.doc("comments").add(body)
}

export default o;