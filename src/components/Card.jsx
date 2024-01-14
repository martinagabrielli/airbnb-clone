export default function Card () {
    return (
        <div className="card">
            <img src="src/assets/katie-zaferes.png" className="card--image" alt="Main image" />
            <div className="card--stats">
                <img src="src/assets/star.png" alt="Star icon"/>
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    );
}