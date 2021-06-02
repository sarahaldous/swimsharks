import Shark from './Shark.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={Shark} id="shark" alt="logo" />
        <h2>Swimming Levels
        </h2>
        <h3>All classes are $75 for 1 week (four 30-minute lessons)</h3>
        </header>

        <main>

        <div className="tiles">
        <div id="red" className="tile">
        <h3>Red Level:</h3>

        <ol>
          <li>•	Enter and Exit Water Safely</li>
          <li>•	Face Submersion</li>
          <li>•	Blow Bubbles</li>
          <li>•	Assisted Front and Back Float</li>
          <li>•	Monkey Crawl</li>
          <li>•	Assisted Kicks</li>
        </ol>

        <a href="https://getfitswimsharks.sites.zenplanner.com/calendar.cfm?date=2021-06-23&calendarType=APPOINTMENTGROUP%3A77337239%2DA0CF%2D4E3F%2DA360%2D5E96AD128719" alt="">Click here to sign up for this level</a>
        </div>


        <div id="orange" className="tile">
        <h3>Orange Level: </h3>
        <ol>
        <li>•	Bobbing 6 times</li>
<li>•	Open eyes underwater</li>
<li>•	Retrieve submerged object using hands</li>
<li>•	Unassisted front and back float</li>
<li>•	Assisted Monkey, Airplane, Soldier (tiy)</li>
<li>•	Assisted front and back glides</li>
<li>•	Unassisted front and back kicks</li>
<li>•	From sitting position - jump into pool</li>
<li>•	Roll from front to back and back to front</li>
</ol>
<a href="https://getfitswimsharks.sites.zenplanner.com/calendar.cfm?date=2021-06-23&calendarType=APPOINTMENTGROUP%3AE868330A%2DA579%2D473C%2D9CF1%2DE93D018CBF72" alt="">Click here to sign up for this level</a>
    
        </div>

        <div id="yellow" className="tile">
       <h3>Yellow Level:</h3> 
       <ol>
         <li>
       
•	Jump into water unassisted</li>
<li>•	Fully submerge body and hold breath</li>
<li>•	Unassisted front and back glide</li>
<li>•	Unassisted pencil jump and return to wall</li>
<li>•	Unassisted bubbles and turn action the width of pool</li>
<li>•	Unassisted Monkey, Airplane, Soldier</li>
<li>•	Begin freestyle arms</li>
<li>•	Tread water using arms and legs</li>
<li>•	Begin backstroke arms</li>
</ol>
<a href="https://getfitswimsharks.sites.zenplanner.com/calendar.cfm?date=2021-06-23&calendarType=APPOINTMENTGROUP%3A93AA84EA%2D574D%2D4049%2D9DA7%2D4CE96E93BFE6" alt="">Click here to sign up for this level</a>
</div>
</div>
<div className="tiles">

<div id="green" className="tile">
       <h3>Green Level:</h3> 
       <ol>
         
<li>•	Freestyle width of pool using back floats to breathe</li>
<li>•	Backstroke width of pool</li>
<li>•	Introduce breaststroke</li>
<li>•	Knee dives</li>
<li>•	Tread water 1 min</li>
<li>•	Somersault</li>
<li>•	Introduce side breathing</li>
<li>•	Introduce dolphin kicks</li>

</ol>
<a href="https://getfitswimsharks.sites.zenplanner.com/calendar.cfm?date=2021-06-23&calendarType=APPOINTMENTGROUP%3A60EF7DE9%2D1AD6%2D47F8%2DBE25%2DE103BBA580F5" alt="">Click here to sign up for this level</a>
</div>

<div id="blue" className="tile">
       <h3>Blue Level:</h3> 
       <ol>
      <li>•	2 lengths of freestyle using side breathing</li>
      <li>•	2 lengths of breaststroke</li>
      <li>•	2 lengths of backstroke</li>
      <li>•	2 lengths of butterfly</li>
      <li>•	Fast lap of freestyle</li>
      <li>•	Standing dives</li>
      <li>•	Begin flip turn</li>
      <li>•	Tread water 3 mins</li>
      <li>•	25 yard freestyle in lap pool</li>
       </ol>
       <a href="https://getfitswimsharks.sites.zenplanner.com/calendar.cfm?date=2021-06-23&calendarType=APPOINTMENTGROUP%3AEAF980CF%2D294C%2D459D%2D8906%2D3B284E8AB6E1" alt="">Click here to sign up for this level</a>
      </div>

      <div id="purple" className="tile">
       <h3>Purple Level:</h3> 
       <ol>
      <li>•	200 yard competitive freestyle</li>
      <li>•	200 yard backstroke</li>
      <li>•	200 yard butterfly</li>
      <li>•	Perfect flip turn and touch turn</li>
      <li>•	Racing dives</li>
      <li>•	Underwater dolphin kicks</li>
      <li>•	Individual medley</li>
      <li>•	Tread water 4 mins</li>

      </ol>
      <a href="https://getfitswimsharks.sites.zenplanner.com/calendar.cfm?date=2021-06-23&calendarType=APPOINTMENTGROUP%3ABBC4B634%2DBF49%2D40DF%2DB180%2D612EB2FC48F0" alt="">Click here to sign up for this level</a>
        </div>


        </div>
        <a href="https://getfitswimsharks.sites.zenplanner.com/calendar.cfm?date=2021-06-23&calendarType=APPOINTMENTGROUP%3A31B4B6C8%2D6433%2D4DE2%2DB531%2D841704812B79" alt="">Sign up here for Parent-and-Child classes (ages 0-36 months)</a>
       <p>For private lessons and any questions, please email Elena at <a href = "mailto: getfitswimschool@gmail.com">getfitswimschool@gmail.com</a></p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a> */}
      </main>
    </div>
  );
}

export default App;
