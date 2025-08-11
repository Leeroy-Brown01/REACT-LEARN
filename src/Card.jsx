
import ProfilePic from "./assets/IMG-20250803-WA0012-POP_OUT.jpg";

function Card() {
    return (
        <Card>
            <div className="card">
                <img
                    src={ProfilePic}
                    alt="Profile photo showing a person with a neutral expression on a plain background, no visible text, calm and simple atmosphere"
                />
            <h1>Common brick</h1>
            <p>This is our new tiger common brick</p>
        </div>
        </Card>
    );
}

export default Card();