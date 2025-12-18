import { useEffect, useMemo, useState } from 'react';

import coursesData from './data/courses';
import { fetchRandomQuote } from './api/quoteApi';

import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [quote, setQuote] = useState(null);
  const [courses] = useState(coursesData);

  useEffect(() => {
    let mounted = true;
    fetchRandomQuote().then((q) => {
      if (mounted) setQuote(q);
    });
    return () => { mounted = false };
  }, []);

  const categories = useMemo(() => {
    const s = new Set(courses.map((c) => c.category));
    return Array.from(s);
  }, [courses]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const inCategory = category ? c.category === category : true;
      const inQuery = q
        ? c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
        : true;
      return inCategory && inQuery;
    });
  }, [courses, query, category]);

  return (
    <div className="app-root">
      <header className="site-header">
        <h1>Course Finder</h1>
        <p className="tagline">
          Quickly search and filter a small catalog of learning paths.
        </p>

        {quote && (
          <div className="quote">
            “{quote.content}” — <strong>{quote.author}</strong>
          </div>
        )}

        <SearchBar
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
      </header>

      <main className="content">
        <CourseList courses={filtered} />
      </main>

      <footer className="site-footer">
        <small>Web Developer Internship at Marketing Mojito.</small>
      </footer>
    </div>
  );
}
