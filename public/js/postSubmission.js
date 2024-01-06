const newPost = async (event) => {
    event.preventDefault();

    document.location.replace('/newPost')
}

const submitBlogPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title');
    const content = document.querySelector('#content');

    if(title && content) {
        try{
            const response = await fetch('/api/post/submit', {
                method: 'POST',
                body: JSON.stringify({ title, content }),
                headers: { 'Content-Type': 'applications/json' },
            });

            if (response.ok) {
                document.location.replace('/home');
            } else {
                alert('Failed to Post Blog');
            }
        } catch(error) {
            console.error('Error During Post Submission:', error)
        }
    }
};

document.querySelector('#submit').addEventListener('click', submitBlogPost);
document.querySelector('#new-post').addEventListener('click', newPost);