export async function fetchRandomQuote() {
    try {
        const res = await fetch('https://api.quotable.io/random');
        if (!res.ok) throw new Error('Quote API error');
        const data = await res.json();
        return { content: data.content, author: data.author };
    } 
    catch (err) {
        return { content: 'Keep learning and shipping — small steps every day.', author: 'CourseFinder' };
    }
}