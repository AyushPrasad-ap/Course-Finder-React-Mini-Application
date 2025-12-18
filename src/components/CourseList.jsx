import CourseCard from './CourseCard'


export default function CourseList({ courses }) {
    if (!courses.length) return <p className="no-results">No courses found.</p>


    return (
        <section className="course-grid">
            {courses.map((c) => (
                <CourseCard key={c.id} course={c} />
            ))}
        </section>
    );
}