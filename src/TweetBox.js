import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Sparsh Prajapati",
      username: "Sparsh990",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent.fdel52-1.fna.fbcdn.net/v/t1.6435-1/p320x320/123550079_675818146403618_4041519420113894942_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=5UYX77oCWaAAX8TIL_h&_nc_ht=scontent.fdel52-1.fna&tp=6&oh=e45b13e4e13b9fec067f2e649b54925b&oe=60CBA462",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
        <Avatar src="https://images.static-collegedunia.com/public/college_data/images/logos/15577242161545129260LPUseal.jpg?tr=h-80,w-80,c-force" />
         <input 
         onChange={(e) => setTweetMessage(e.target.value)}
         value={tweetMessage}
         placeholder="What is happening" type="text" />
        </div>
        <input
        value={tweetImage}
        onChange={(e) => setTweetImage(e.target.value)}
        className="tweetBox__imageInput" placeholder=" Optional: Enter image URL" type="text" /> 
        <Button
        onClick={sendTweet}
        type="submit"
        className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;
