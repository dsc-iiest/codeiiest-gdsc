import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Leaderboard from './components/leaderboard/leaderboard.jsx'
import Namecard from './components/namecard/namecard.jsx'

import ChapterContent from './components/ChapterContent/ChapterContent'

const Development = {
  iconset:[
    {icon: "Voice", byline: "Some text here"},
    {icon: "Bug", byline: "Some text here"},
    {icon: "Gun", byline: "Some text here"},
    {icon: "Sunglasses", byline: "Some text here"},
  ],
  title: "DEV DYNAMITES",
  highlight: {
    heading: "AIM",
    byline: "Building the future, one component at a time",
    icon: "Poison",
    iconheading: "CAUTION",
    iconbyline: "Unresolved bugs hidden in comments"
  },
  description:"Hey there, fellow digital daredevils! We're the developer team, a quirky bunch of code aficionados on a mission to make the internet a more fun and functional place, one line at a time. Our developers are not mere architects of software; they are creators, sculpting virtual worlds with keystrokes and ingenuity. Join our tribe of tech magicians, where innovation is our wand and creativity knows no bounds!",
  
  byline:"Ignore the downfalls of your life just like how you ignored the inverted skull."
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChapterContent Content = {Development} />
  </React.StrictMode>,
)
