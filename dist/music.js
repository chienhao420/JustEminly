const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "宝贝",
        artist: '啾啾的宝贝',
        url: 'https://github.com/chienhao420/Blog-Back-Up1/blob/master/music/baby.mp3?raw=true',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: 'Just The Way You Are',
        artist: '糖糖喜欢的',
        url: 'https://github.com/chienhao420/Blog-Back-Up1/blob/master/music/justtheway.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: 'How Can I',
        artist: '好听的',
        url: 'https://github.com/chienhao420/Blog-Back-Up1/blob/master/music/howcani.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});