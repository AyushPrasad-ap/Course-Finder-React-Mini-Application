export default function CourseCard({ course }) {
    return (
        <article className="course-card">
            <div className="card-header">
                <div className="course-thumb" aria-hidden="true">{course.title.slice(0, 2).toUpperCase()}</div>
                <div>
                    <h3 className="course-title">{course.title}</h3>
                    <div className="meta">{course.category} • {course.level} • {course.duration}</div>
                </div>
            </div>
            <p className="course-desc">{course.description}</p>
            <div className="card-actions">
                <button onClick={() => alert("Outside Assignment scope!")} className="btn">View</button>
                <button onClick={() => alert("Outside Assignment scope!")} className="btn btn-outline">Enroll</button>
            </div>
        </article>
    );
}