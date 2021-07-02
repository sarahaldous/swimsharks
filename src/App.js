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

          </div>


        </div>
       <br></br>
        <br></br>
        <div id="signup">
        <a href="https://app.jackrabbitclass.com/regv2.asp?id=543759" alt="" target="_blank" rel="noopener noreferrer">Sign up for all classes here</a>
        </div>
<p>For a video on how to use the new sign-up system, please click  
        <a href="https://youtu.be/cVR8Ilp3v04" src="https://youtu.be/cVR8Ilp3v04" alt="" target="_blank" rel="noopener noreferrer"> here</a>. </p>
        <p>For private lessons and any questions, please email Elena at <a href="mailto: getfitswimschool@gmail.com">getfitswimschool@gmail.com</a></p>
   
        <p id="bold">All classes are held at 1809 Picasso Avenue, Davis, CA 95618</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
