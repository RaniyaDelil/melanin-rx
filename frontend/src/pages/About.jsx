import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import "../index.css";

export function About() {
  return (
    <div>
      <NavBar />
      <h1>About Spark! BookPals</h1>
      <p>Spark! BookPals was conceived with a simple idea in mind - to make
        it easy for Boston University community members to find new books to read.
        We recognized the potential of connecting those who have read a lot with those
        who are just dipping their feet into reading.</p>
      
      {/* Author Info */}
      <h2>About the Author</h2>
      <div className="author-info">
        <img src="..\public\author.jpg" alt="Author Image" className="author-img" />
        <ul>
          <li><strong>Bio:</strong> Raniya Delil is a sophomore at BU studying CS. She is the Hackathon PM at BU Spark! and VP of NSBE.</li>
          <li><strong>Education:</strong> Boston University, B.A. Computer Science, 2026</li>
          <li><strong>Profession:</strong> Incoming Explore Intern at Microsoft</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
