const axios = require('axios');

const getInfo = async ({ video_id }) => {

    if (!video_id) return false;

    let ytApi = 'https://api.y2mate.guru/api/convert';

    const options = {
        headers: {
            'Content-Type': 'application/json',
            'authority': 'api.y2mate.guru',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
            'origin': 'https://en.y2mate.guru',
            'authority': 'api.y2mate.guru',
            'referer': 'https://en.y2mate.guru',
        }
    }
    let data = JSON.stringify({
        url: `https://www.youtube.com/watch?v=${video_id}`
    })

    let response = await axios.post(ytApi, data, options).catch(err => ({ data: false }));

    if (!response.data) return false;

    let video_info = response.data;
    
    return video_info
};

module.exports = {
    getInfo
};
