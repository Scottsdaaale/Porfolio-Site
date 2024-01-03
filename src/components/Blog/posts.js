import computer from '../../images/Computer.gif';
import starRating1 from './Blog-Images/Star-Rating/star-rating-1.png';
import starRating2 from './Blog-Images/Star-Rating/star-rating-2.png';
import starRating3 from './Blog-Images/Star-Rating/star-rating-3.png';
import starRating4 from './Blog-Images/Star-Rating/star-rating-4.png';
import starRating5 from './Blog-Images/Star-Rating/star-rating-5.png';
import star from './Blog-Images/Star-Rating/Star.gif';
import extention from './Blog-Images/VScode-Extentions/Extention.gif';
import brain from './Blog-Images/ADHD/Brain.gif';
import woolie from '../../images/Woolie.gif';

const posts = [
  {
    id: 'Supercharge Your Coding in VSCode with These Handy Extensions',
    title: `Supercharge Your Coding in VSCode with These Handy Extensions!`,
    descrition: "Hey folks, diving into Visual Studio Code? I've rounded up a bunch of cool extensions that have seriously improved my coding experience",
    image: extention,
    imageUrl: 'http://',
    content: `
    <style>
      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin-bottom: 20px;
      }

      a {
        color: #007bff;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>

  <body>

    <p>
      Hey folks, diving into Visual Studio Code? I've rounded up a bunch of cool
      extensions that have seriously improved my coding experience. Check these
      out:
    </p>

    <ul>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight"
            >Color Highlight</a
          ></strong
        > <br />
        Displays the actual color for hex codes or other color formats.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja"
            >Console Ninja</a
          ></strong
        > <br />
        Shows errors, logs, etc., right in VSCode. Helpful for identifying
        errors in code.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
            >ES7+ React/Redux/React-Native snippets</a
          ></strong
        > <br />
        Helpful shortcuts for React snippets. I use "rfce" a lot, which just
        builds a functional component skeleton.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
            >ESLint</a
          ></strong
        > <br />
        Helps find and fix problems in JavaScript code.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow"
            >Indent-Rainbow</a
          ></strong
        > <br />
        Looks cool but also good for visual separation.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server"
            >Live Preview</a
          ></strong
        > <br />
        Nice little extension if you are working in HTML. Hosts a local server
        to view your HTML right inside of VSCode. Also updates in real time, so
        no refreshing.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare"
            >Live Share</a
          ></strong
        > <br />
        Brilliant plugin that allows you and your team to make live changes in
        the same VSCode project.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum"
            >Lorem Ipsum</a
          ></strong
        > <br />
        Simple lorem ipsum generator. Press F1, type "lorem ipsum" and select to
        insert either a line or paragraph.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
            >Material Icon Theme</a
          ></strong
        > <br />
        Hundreds of icons for files/folders.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=dcasella.monokai-plusplus"
            >Monokai++</a
          ></strong
        > <br />
        Probably my favorite theme that I've used. I just personally like it,
        maybe give it a shot?
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense"
            >npm Intellisense</a
          ></strong
        > <br />
        Autocompletes npm modules in import statements.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode"
            >Postman</a
          ></strong
        > <br />
        Same ol postman, but now in VSCode. Pretty nice to not need to switch
        between VSCode and Postman windows.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
            >Prettier - Code formatter</a
          ></strong
        > <br />
        Everybody knows this one right? A little tip though, you can configure
        some settings like only use single quotes, and semicolons by going to
        VSCode preferences &gt; settings &gt; extensions &gt; prettier.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=jakob101.RelativePath"
            >Relative Path</a
          ></strong
        > <br />
        THIS IS ONE OF MY FAVORITE PLUGINS. I'm ALWAYS MESSING UP MY PATHS. This
        will get you the relative path to any file in your workspace. THANK YOU
        DEVS
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview"
            >SVG Preview</a
          ></strong
        > <br />
        Allows you to preview an SVG file.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode"
            >Tabnine</a
          ></strong
        > <br />
        Tabnine is a nifty tool that uses AI to autocomplete your code.
        Sometimes it's right, sometimes it's wrong. But it can be pretty
        helpful. Every developer should probably have this.
      </li>
      <li>
        <strong
          ><a
            href="https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf"
            >VSCode-pdf</a
          ></strong
        > <br />
        Shows preview of PDF.
      </li>
    </ul>

    <p>
      Feel free to explore these extensions to enhance your VSCode experience!
      These have been incredibly useful in my development workflow.
    </p>

    <p>Happy Coding! 🚀✨</p>
  </body>
    `,
  },
  {
    id: 'How To Make a Star Rating With React',
    title: 'How To Make a Star Rating With React',
    descrition: "Hello reader! Today I will be showing you how to create a star rating system using ReactJS",
    image: star,
    imageUrl: '',
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
      margin-top: 5px;
      margin-bottom: 5px;
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
    id: 'My Experience Programming with ADHD',
    title: 'My Experience Programming with ADHD',
    descrition: "At the time of writing this, I've been studying web development for almost 3 years. There is a lot to learn when it comes to this...",
    image: brain,
    imageUrl: 'https://i.imgur.com/ZT3AuRV.png',
    content: `
    <p>
      At the time of writing this, I've been studying web development for almost 3 years. 
      There is a lot to learn when it comes to this career path, and it's been quite the battle just to keep 
      myself learning as much as possible.
    </p>
    <p>
      I struggled for a long time with what I wanted 
      to do as a career, and I tried many different things. I think a big reason for that is because when I don't
      like something it's very hard for me to keep focused on it, or really, to even want to do it at all. But
      I think I found something in programming that I didn't expect when I began studying. 
    </p>
    <p>
      I actually really enjoy it. 
      <br> 
      <br> 
      And if I'm honest, I don't really think I thought I would when I started.
    </p>
    <p>
      If you told me 5 years ago that I would be doing this right now, I wouldn't have believed it. I 
      wouldn't have thought I was that type of guy because programming is for smart people, and I am dumb.
    </p>
    <p>
      Well I've been learning a lot about myself through this coding journey, and it turns out I'm actually 
      NOT dumb! I just need to be ENGAGED.
    </p>
    <p>
      This journey has reshaped my understanding of my capabilities and strengths. It's not about innate intelligence but 
      rather about finding genuine interest and engagement in what I do.
    </p>
    <p>
      I still struggle with losing focus constantly. Especially when I'm faced with an issue that I'm having trouble getting around. 
      But I am able to hyper focus more often and end up grinding on projects for hours.
    </p>
    <p>
      I've been lucky enough to land some freelance gigs doing this work. It's been very rewarding! I don't struggle
      with hating work like I have at other jobs. Because of that I am able to focus and have tons of motivation.   
    </p>
    <p>
      To wrap this up, here a few things I would recommend to people with ADHD who want to get into programming:
    </p>

    <ul>
      <li>
        Get good sleep 
        <ul>
          <li>
            There are tons of sleep tracking apps too that can track sleeping habits and help you correct them
          </li>
        </ul>
      </li>

      <br>

      <li>
        Follow a routine
        <br>
        <ul>
          <li>
            I recommend using a to-do list app. There are many out there, but I've been using <a href="https://www.microsoft.com/store/productId/9NBLGGH5R558?ocid=pdpshare">Microsoft To Do</a>
            because it works on Apple devices and Windows. Everyday I write out what I need to do. Doing something as simple as that really helps me hone in on what 
            I need to get done that day.
          </li>  
        </ul>
      </li>

      <br>

      <li>
        Use timers
        <br>
        <ul>
          <li>
            Timers are great for time management! I can figure out how much time I want to deticate to that particular task
            and set a timer for it. I've got a Stream Deck, which allows you to setup timers with the touch of a button.
          </li>
        </ul>
      </li>

      <br>

      <li>
        Take breaks when you feel overwhelmed
        <br>
        <ul>
          <li>
            It's easy to get frustrated by a problem. Taking a short break is a good way to help yourself relax for a second
            and get a clear head. A lot of the time I'll come back and find a fix pretty soon after.
          </li>
        </ul>
      </li>
      
      <br>
    </ul>
      <p>Thanks for reading!</p>
    `,
  },
  {
    id: 'Woolie.tv',
    title: 'Building Woolie.tv',
    descrition: "Supercharge Your Coding in VSCode with These Handy",
    image: woolie,
    imageUrl: 'http://',
    content: `<h3>Coming soon...</h3>`,
  },
];

export default posts;
