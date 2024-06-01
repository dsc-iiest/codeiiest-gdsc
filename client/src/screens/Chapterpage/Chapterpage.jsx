import React from "react";
import ChapterContent from "../../components/ChapterContent/ChapterContent";
import "./Chapterpage.css";
import { useParams } from "react-router-dom";
import { NamecardHorizontal } from "../../components/namecard/namecard";

const Chapterdata = {
  development: {
    iconset: [
      { icon: "Voice", byline: "Talks in HTML" },
      { icon: "Bug", byline: "Dark mode mandatory" },
      { icon: "Gun", byline: "Kills bugs without spray" },
      { icon: "Sunglasses", byline: "Love for designers" },
    ],
    title: "DEV DYNAMITES",
    highlight: {
      heading: "AIM",
      byline: "Building the future, one component at a time",
      icon: "Poison",
      iconheading: "CAUTION",
      iconbyline: "Unresolved bugs hidden in comments",
    },
    description:
      "Hey there, fellow digital daredevils! We're the developer team, a quirky bunch of code aficionados on a mission to make the internet a more fun and functional place, one line at a time. Our developers are not mere architects of software; they are creators, sculpting virtual worlds with keystrokes and ingenuity. Join our tribe of tech magicians, where innovation is our wand and creativity knows no bounds!",

    byline: "Ignore the downfalls of your life just like how you ignored the inverted skull.",
  },

  cybersecurity: {
    iconset: [
      { icon: "Fish", byline: "Loves phishing" },
      { icon: "Injection", byline: "SQL injection vaccinated" },
      { icon: "Chair", byline: "Works in office chair" },
      { icon: "Linux", byline: "Worship the kali-linux dragon" },
    ],
    title: "CYBER SQUAD",
    highlight: {
      heading: "PRINCIPLES",
      byline: "Keep it complex. Never let them know your next move",
      bylineProps: {},
      icon: "Percent",
      iconheading: "",
      iconbyline: "Hack efficiency",
      imageProps: {
        width: "5rem",
      },
    },
    description:
      "The Cybersecurity chapter of CodeIIEST provides insights into safeguarding digital systems, covering encryption methods, network security protocols, and threat mitigation strategies. It emphasizes proactive measures to defend against cyber threats and ensure the integrity of data and systems. So what are you waiting for? Join the team and let the hack begin!",

    byline: "Pro tip: You can't fall for scams if you never check your emails.",
  },
  aiml: {
    iconset: [
      { icon: "Baby", byline: "Needs good training" },
      { icon: "Bigdata", byline: "Worships big data" },
      { icon: "Python", byline: "Seasoned pythoner" },
      { icon: "Heart", byline: "Heart beats in binary" },
    ],
    title: "ML MARVELS",
    highlight: {
      heading: "PRINCIPLE",
      byline: "Forget about data quality; garbage in, noble prize out.",
      icon: "Users",
      iconheading: "",
      iconbyline: "Treating people as ML models",
    },
    description:
      "Welcome to the AI Wizards of CodeIIEST, where lines of code dance with data to conjure solutions from the digital ether. Our Machine Learning Maestros specialize in weaving algorithms that learn, adapt, and automate with the precision of a well-tuned symphony. From training models to predicting future trends, we're the architects of tomorrow's digital landscape. Step into our realm, where bytes meet brilliance and innovation knows no bounds!",

    byline: `When the computer asks “Are you a robot ?” 
    Maybe he just wants to find his family ?`,
  },
  uiux: {
    iconset: [
      { icon: "Pen", byline: "Pen is mightier than sword" },
      { icon: "Coffee", byline: "Runs on caffeine" },
      { icon: "Chatroom", byline: "Sensitive to comments" },
      { icon: "Eye", byline: "Great eyes" },
    ],
    title: "PIXEL PIONEERS",
    highlight: {
      heading: "PRINCIPLES",
      byline: "We judge a book by its cover",
      icon: "Spinner",
      iconheading: "",
      iconbyline: "Loading new ideas",
    },
    description:
      "Calling all design divas! We're the UI/UX Dream Team, where pixels meet personality and wireframes weave wonders. If you've got a passion for crafting captivating user experiences, a knack for turning pixels into perfection, and a sense of humor sharper than our vector graphics, then join our squad! Let's create magic together in the digital realm!",

    byline:
      "The best design comes from permutations and combinations over a new design's permutations and combinations along with previous.....",
  },
  cpdsa: {
    iconset: [
      { icon: "Anxiety", byline: "Thinks in O(n)" },
      { icon: "Cliff", byline: "Fears edge cases" },
      { icon: "Checkbox", byline: "Green tick seeker" },
      { icon: "Keyboard", byline: "Speed typers" },
    ],
    title: "ALGO WIZARDS",
    highlight: {
      heading: "WORKING RULE",
      byline: `while (code.result != AC){\nKeepGrinding(code);\n}`,
      bylineProps: { fontFamily: "monospace" },
      icon: "Running",
      iconheading: "",
      iconbyline: "Runs in 1ms",
    },
    description:
      "Dive into the thrilling world of algorithms and problem-solving, sharpening your skills alongside passionate teammates. Unleash your creativity in solving complex puzzles and challenges. Whether you're a seasoned pro or a budding enthusiast, there's a place for you in our vibrant community. Embark on this exciting journey with us and watch as your coding prowess reaches new heights. Join the adventure today. Wishing everyone high ratings !",

    byline:
      "Live life to the fullest. Afterall, who knows when you fail on a hidden testcase or get hacked after a contest?",
  },
  media: {
    iconset: [
      { icon: "Shouting", byline: "Energetic speaker" },
      { icon: "Diamond", byline: "Draws attention" },
      { icon: "Ink", byline: "Great writing skills" },
      { icon: "Doge", byline: "Underrated meme maestro" },
    ],
    title: "MEDIA MOGULS",
    highlight: {
      heading: "OUR PRINCIPLE",
      byline: `from lorem ipsum to essential stories`,
      icon: "Send",
      iconheading: "",
      iconbyline: "Sleep less, send more",
    },
    description:
      "The Media Team at CodeIIEST is the creative powerhouse behind the scenes, weaving digital enchantment through pixels and prose. From crafting captivating social media campaigns to capturing the essence of our events in stunning visuals, they breathe life into our digital presence. Whether it's spreading the word about our latest innovations or immortalizing moments of camaraderie, the Media Team ensures that our story shines brightly across screens, inspiring, engaging, and connecting with our audience in ways that transcend the ordinary.",

    byline: "Social media is not our leisure, its our work!",
  },
  diversity: {
    iconset: [
      { icon: "Fox", byline: "Works in groups" },
      { icon: "Statue", byline: "Champions of change" },
      { icon: "Happy", byline: "Friendly vibes" },
      { icon: "Listen", byline: "Patient listeners" },
    ],
    title: "FUSION FORCE",
    highlight: {
      heading: "KEY TRAIT",
      byline: `Expert eye roller and 
      professional nodder at meetings`,
      icon: "Pokemon",
      iconheading: "",
      iconbyline: "Everyone is welcome",
      imageProps: {
        width: "10rem",
      },
    },
    description:
      "The Diversity Team at CodeIIEST excels in the delicate art of navigating through meetings with expert eye-rolls and perfected nods. Their tireless efforts include ensuring that every pineapple pizza enthusiast and office ghost feels equally included, albeit with a hint of sarcasm. With a blend of humor and ingenuity, they strive to dismantle monotony, foster unity and champion diversity in all its quirky glory within the CodeIIEST community.",

    byline: "Behold, the luminary of our team, gracefully presiding at the forefront of our background image!",
  },
};

const idMap = {
  development: "DEVELOPMENT",
  cybersecurity: "CYBER SECURITY",
  aiml: "ML and AI",
  uiux: "UI/UX",
  cpdsa: "CP/DSA",
  media: "MEDIA",
  diversity: "DIVERSITY",
};

const Chapterpage = () => {
  const { id } = useParams();
  const data = Chapterdata[id];

  return (
    <>
      <div className={id + "-bg " + "bg-image"}></div>
      <div className="chapterpage-content">
        <div className="parent-section">
          <div className="section-left">
            <div className="heading">
              <span>{"< "}</span>
              {idMap[id]}
              <span>{" />"}</span>
            </div>
            <div className="section-body">
              <NamecardHorizontal
                name={"Rishab Dugar"}
                codeiiest={"Development Lead & Treasurer"}
                gdsc={"Development Lead & Treasurer"}
                profilepic={"profilepic"}
                descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
                customCSS={{
                  transform: "scale(1)",
                }}
              />
              <div className="card">
                <div className="body-label">CORE MEMBERS</div>
                <div className="body-value">Nafis Adnan Mondal</div>
                <div className="body-value">Nafis Adnan Mondal</div>
                <div className="body-value">Nafis Adnan Mondal</div>
                <div className="body-value">Nafis Adnan Mondal</div>
              </div>
            </div>
          </div>
          <ChapterContent Content={data} />
        </div>
      </div>
    </>
  );
};

export default Chapterpage;
