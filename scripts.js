// Sample articles data (you can replace this with your articles)
const articlesData = [
    {
        title: 'Introduction to Platform Technologies',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        link: 'https://example.com/article1'
    },
    {
        title: 'Understanding Cloud Computing',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        link: 'https://example.com/article2'
    },
    // Add more articles as needed
];

// Function to display articles on the page
function displayArticles() {
    const articlesContainer = document.getElementById('articles');

    articlesData.forEach(article => {
        const articleElement = document.createElement('article');

        const heading = document.createElement('h2');
        heading.textContent = article.title;

        const para = document.createElement('p');
        para.textContent = article.content;

        const anchor = document.createElement('a');
        anchor.href = article.link;
        anchor.textContent = 'Read more';

        articleElement.appendChild(heading);
        articleElement.appendChild(para);
        articleElement.appendChild(anchor);

        articlesContainer.appendChild(articleElement);
    });
}

// Call the function to display articles when the page loads
window.onload = displayArticles;