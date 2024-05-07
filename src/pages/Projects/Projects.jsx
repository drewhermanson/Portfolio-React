import escape from '../../Images/escape.png';
import eventTracker from '../../Images/event.png';
import scheduler from '../../Images/scheduler.png';
import noteTaker from '../../Images/note.png';
import weather from '../../Images/weather.png'


export default function About() {
  return (
    <div>
      <h1>Projects</h1>

      <p>
        Here are some of the projects I have worked on.
      </p>

      <div className="card-group row justify-content-center d-flex flex-wrap">
          <div className="card p-4">
            <img src={escape} className="card-img-top" alt="Find Your Escape" />
            <div className="card-body">
              <h5 className="card-title">Find Your Escape</h5>
              <p className="card-text">Vacation recommender</p>
              <a href="https://drewhermanson.github.io/Phase-1-Project" className="btn btn-primary">Live</a>
              <a href="https://github.com/drewhermanson/Phase-1-Project" className="btn btn-secondary"> GitHub</a>
            </div>
          </div>

        <div className="card p-4">
          <img src={eventTracker} className="card-img-top" alt="Employee Event Tracker" />
          <div className="card-body">
            <h5 className="card-title">Employee Event Tracker</h5>
            <p className="card-text">Business application for tracking infractions</p>
            <a href="https://eventtracker.onrender.com/" className="btn btn-primary">Live</a>
            <a href="https://github.com/Magicaryn/EventTracker" className="btn btn-secondary"> GitHub</a>
          </div>
        </div>

        <div className="card p-4">
          <img src={scheduler} className="card-img-top" alt="Scheduler" />
          <div className="card-body">
            <h5 className="card-title">Scheduler</h5>
            <p className="card-text">Application for creating a daily schedule</p>
            <a href="https://drewhermanson.github.io/Daily-Work-Scheduler" className="btn btn-primary">Live</a>
            <a href="https://github.com/drewhermanson/Daily-Work-Scheduler" className="btn btn-secondary"> GitHub</a>
          </div>
        </div>

        <div className="card p-4">
          <img src={noteTaker} className="card-img-top" alt="Note Taker" />
          <div className="card-body">
            <h5 className="card-title">Note Taker</h5>
            <p className="card-text">Application to write personal notes</p>
            <a href="https://notetaker-l81g.onrender.com" className="btn btn-primary">Live</a>
            <a href="https://github.com/drewhermanson/NoteTaker" className="btn btn-secondary"> GitHub</a>
          </div>
        </div>

        <div className="card p-4">
          <img src={weather} className="card-img-top" alt="5 Day Weather Forecaster" />
          <div className="card-body">
            <h5 className="card-title">5 Day Weather Forecaster</h5>
            <p className="card-text">Allows The User to find 5 day weather forecasts</p>
            <a href="https://drewhermanson.github.io/5Day-Weather-Forecast" className="btn btn-primary">Live</a>
            <a href="https://github.com/drewhermanson/5Day-Weather-Forecast" className="btn btn-secondary"> GitHub</a>
          </div>
        </div>

      </div>

    </div>
  );
}
