import computer from "../../images/Computer.gif";
import starRating1 from "./Blog-Images/star-rating-1.png";
import starRating2 from "./Blog-Images/star-rating-2.png";
import starRating3 from "./Blog-Images/star-rating-3.png";
import starRating4 from "./Blog-Images/star-rating-4.png";
import starRating5 from "./Blog-Images/star-rating-5.png";

const posts = [
  {
    id: "How To Make a Star Rating With React",
    title: "How To Make a Star Rating With React",
    image: computer,
    excerpt: "Learn how to make a star rating...",
    content: `
    <style>
    body {
    margin: 0 auto;
    }
    /* Flexbox styles */
    .flex-container {
    display: flex;
    display: flex;
    align-items: center;
    }
    .flex-item {
    padding: 0;
    margin: 0; 
    width: 50%;
    }
    p {
      margin-top: 1;
      margin-bottom: 1;
    }
    
 </style>
<body>
 <div style="flex: 1;">
    <p>
       Hello reader! Today I will be showing you how to create a star rating
       system using ReactJS. By the end of this tutorial, you will have a state
       with a value of a number for which star you clicked.
    </p>
 </div>
 <hr style="border: 1px solid #ccc" />
 <div class="flex-container">
    <div style="flex: 1;">
       <p>
          First, make a StarRating component, import, and render it in App. Then,
          we are going to do an install of <code>react-icons</code> so we can get
          the star. We can do that by opening the terminal in the correct
          directory and typing:
       </p>
       <code>npm install react-icons</code>
       <p>OR</p>
       <code>yarn add react-icons</code>
    </div>
 </div>
 <div class="flex-container">
    <div style="flex: 1;">
       <p>Then we will import the star by typing</p>
       <code>import { FaStar } from "react-icons/fa"</code>
       <p>in StarRating.</p>
    </div>
 </div>
 <hr style="border: 1px solid #ccc" />
 <div class="flex-container">
    <div style="flex: 1;">
       <p>
          After this, we are going to write this nifty little array map that will
          give us our 5 stars plus an index so we can give each star a value.
          Inside the map, we are going to return our label, a radio type input,
          and the FaStar component.
       </p>
    </div>
    <div class="flex-item">
       <img
          src="${starRating1}"
          alt="code photo 1"
          style="width: 100%;"
          />
    </div>
 </div>
 <hr style="border: 1px solid #ccc" />
 <div class="flex-container">
    <div style="flex: 1;">
       <p>
          Before we do anything else, let’s hide the radio buttons. In our CSS
          file, we can write this to do just that.
       </p>
    </div>
    <div class="flex-item">
       <img
          src="${starRating2}"
          alt="code photo 2"
          style="width: 100%;"
          />
    </div>
 </div>
 <hr style="border: 1px solid #ccc" />
 <div class="flex-container">
    <div style="margin: 1px; flex: 1;">
       <p>Now we are going to add an index value for each star. We are also going to add one to each index so that they don’t start with zero. Then we will add this ratingValue to the value of the input.</p>
    </div>
    <div class="flex-item">
       <img
          src="${starRating3}"
          alt="code photo 3"
          style="width: 100%;"
          />
    </div>
 </div>
 <hr style="border: 1px solid #ccc" />
 <div class="flex-container">
    <div style="margin: 1px; flex: 1;">
       <p>Now we want to save the value of the input in state, so that we can persist it.
          So we need to import useState, make a new state and set it to null, then make an onClick in the input that will save the ratingValue to state every time you click on a star.
       </p>
    </div>
    <div class="flex-item">
       <img
          src="${starRating4}"
          alt="code photo 4"
          style="width: 100%;"
          />
    </div>
 </div>
 <hr style="border: 1px solid #ccc" />
 <div class="flex-container">
    <div style="flex: 1;">
       <p>
          Congrats! You have a functioning star rating! Now let’s make it a little
          bit prettier. With just a small ternary, we can make it so when we click
          on a star, it will light up and all the stars before it. React-icons can
          take in a color prop. So we can add that under <code>FaStar</code>. Then
          we will start our ternary. This code will take in the star we clicked’s
          index, and anything less than or equal to it will be gold, all other
          indices will be grey.
       </p>
    </div>
    <div class="flex-item">
       <img
          src="${starRating5}"
          alt="code photo 5"
          style="width: 100%;"
          />
    </div>
 </div>
 <hr style="border: 1px solid #ccc" />
 <div style="padding-bottom: 60px">
    <p>
       There you have it! A star rating component that will give you the value
       of the star clicked and save it to state to do with as you please. In a
       recent project, I used this to get an average rating and display it
       under videos. I hope this is helpful to someone!
    </p>
 </div>
</body>
    
    `,
  },
  {
    id: "How To Make a Star Rating With React",
    title: "How To Make a Star Rating With React",
    image: computer,
    excerpt: "I wish I was capping about this...",
    content: `
    
    `
  }
];

export default posts;
