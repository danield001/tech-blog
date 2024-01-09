const newComment = async (event) => {
    event.preventDefault();

    const comment_content = document.querySelector('#comment-content');
    const post_id = document.

        if(comment_content && post_id)
    try {
        const response = await fetch('/api/comment/submit', {
            method: 'POST',
            body: JSON.stringify({ comment_content, post_id }),
            headers: { 'Content-Type': 'applications/json' },
        });
        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert('Failed to submit comment');
        }
    } catch (error) {
        console.error('Error during comment submission', error)
    }
};

const commentPage = async (event) => {
    event.preventDefault();

    document.location.replace('/comment')
};

document.querySelector('#add-comment').addEventListener('click', commentPage);
document.querySelector('#comment-form').addEventListener('click', newComment);