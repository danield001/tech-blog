console.log('script loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');

    const newPost = async (event) => {
        event.preventDefault();

        console.log("new-post button clicked");

        document.location.replace('/newPost');
    };

    const submitBlogPost = async (event) => {
        event.preventDefault();

        const title = document.querySelector('#title').value;
        const content = document.querySelector('#content').value;

        console.log('submit button clicked');

        if (title && content) {
            try {
                const response = await fetch('/api/post/submit', {
                    method: 'POST',
                    body: JSON.stringify({ title, content }),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    document.location.replace('/home');
                } else {
                    alert('Failed to Post Blog');
                }
            } catch (error) {
                console.error('Error During Post Submission:', error);
            }
        } else {
            alert('Title and content are required');
        }
    };

    const submitButton = document.querySelector('#submit');
    const newPostButton = document.querySelector('#new-post');

    console.log('submit button:', submitButton);
    console.log('new-post button:', newPostButton);

    if (submitButton) {
        submitButton.addEventListener('click', submitBlogPost);
    }

    if (newPostButton) {
        newPostButton.addEventListener('click', newPost);
    }
});
