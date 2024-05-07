export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form className = "p-4">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" name="message" rows="4" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
