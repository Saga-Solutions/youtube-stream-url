const Youtube = require('../src');

(async () => {
    console.log(await Youtube.getInfo({ video_id: 'LUU58iwi7NQ' }))
})();