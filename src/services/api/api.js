import axios from 'axios';

export const listPost = async () => {
    try {
        const data = await axios.get('https://dummyapi.io/data/v1/post', {
            headers: {
                'app-id': '6598bafac09f5e12a6d79d39'
            }
        });

        return { error: false, data: data.data };
    } catch (error) {
        console.log(error.stack);
        return { error: true, message: error.message }
    }
}

export const userData = async (id) => {
    try {
        const data = await axios.get(`https://dummyapi.io/data/v1/user/${id}`, {
            headers: {
                'app-id': '6598bafac09f5e12a6d79d39'
            }
        });

        return { error: false, data: data.data };
    } catch (error) {
        console.log(error.stack);
        return { error: true, message: error.message }
    }
}

export const commentsByPost = async (id) => {
    try {

        const listComments = await axios.get(`https://dummyapi.io/data/v1/post/${id}/comment`, {
            headers: {
                'app-id': '6598bafac09f5e12a6d79d39'
            }
        });

        return { error: false, data: listComments.data };
    } catch (error) {
        console.log(error.stack);
        return { error: true, message: error.message }
    }
}

export const listTags = async () => {
    try {

        const listTags = await axios.get('https://dummyapi.io/data/v1/tag', {
            headers: {
                'app-id': '6598bafac09f5e12a6d79d39'
            }
        })

        return { error: false, data: listTags.data }; 
    } catch (error) {
        console.log(error.stack);
        return { error: true, message: error.message }
    }
}

export const listPostByTag = async (tag) => {
    try {
        const listPostByTag = await axios.get(`https://dummyapi.io/data/v1/tag/${tag}/post`, {
            headers: {
                'app-id': '6598bafac09f5e12a6d79d39'
            }
        });
        return { error: false, data: listPostByTag.data };
    } catch (error) {
        console.log(error.stack);
        return { error: true, message: error.message }
    }
}

export const addComment = async (id, comment) => {
    try {
        const body = {
            message: comment,
            post: id,
            owner: "60d0fe4f5311236168a10a0b"
        };
        const insertComment = await axios.post("https://dummyapi.io/data/v1/comment/create", body, {
            headers: {
                'app-id': '6598bafac09f5e12a6d79d39'
            }
        });
        return { error: false, data: insertComment.data };
    } catch (error) {
        console.log(error.stack);
        return { error: true, message: error.message };
    }
};
