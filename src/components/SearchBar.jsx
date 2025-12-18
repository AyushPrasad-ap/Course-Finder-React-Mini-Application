import CustomSelect from './CustomSelect';

export default function SearchBar({ query, setQuery, category, setCategory, categories }) {
    return (
        <div className="search-bar">
            <input
                aria-label="Search courses"
                placeholder="Search courses by name or keyword..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />


            <CustomSelect
                value={category}
                onChange={setCategory}
                categories={categories}
                placeholder="All categories"
            />
        </div>
    );
}