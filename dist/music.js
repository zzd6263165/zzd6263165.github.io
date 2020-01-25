const ap = new APlayer({
    container: document.getElementById('aplayer'),
    theme: '#b7daff',
    fixed: true,
    autoplay: false,
    lrcType: 3,
    audio: [
      {
        name: "走马",
        artist: '陈粒',
        url: '/music/陈粒 - 走马.mp3',
        cover: '/img/走马.jpg',
        lrc: '/lrc/zouma.lrc',
      },
      {
        name: "小半",
        artist: '陈粒',
        url: '/music/陈粒 - 小半.mp3',
        cover: '/img/小半.jpg',
        lrc: '/lrc/小半.lrc',
      },
      {
        name: "Sound of Silence",
        artist: 'Simon & Garfunkel',
        url: '/music/The Sound Of Silence.mp3',
        cover: '/img/soundofsilence.jpg',
        lrc: '/lrc/Sound Of Silence.lrc',
      },
      {
        name: "Hotel California",
        artist: 'Eagles',
        url: '/music/Eagles - Hotel California.mp3',
        cover: '/img/eagle.jpg',
        lrc: '/lrc/Hotel California.lrc',
      },
      {
        name: "Gone With The Sin",
        artist: 'HiM',
        url: '/music/HiM - Gone With The Sin.mp3',
        cover: '/img/him.jpg',
        lrc: '/lrc/Gone With The Sin.lrc',
      },
      {
        name: "ブルーバード",
        artist: 'いきものがかり',
        url: '/music/いきものがかり - ブルーバード.mp3',
        cover: '/img/bluebird.jpg',
        lrc: '/lrc/ブルーバード.lrc',
      },
      {
        name: "Again",
        artist: 'YUI',
        url: '/music/YUI-Again.mp3',
        cover: '/img/again.jpg',
        lrc: '/lrc/again.lrc',
      },
      {
        name: "Sugar",
        artist: 'Maroon5',
        url: '/music/Maroon5-sugar.mp3',
        cover: '/img/sugar.jpg',
        lrc: '/lrc/Sugar.lrc',
      },
      {
        name: "Move like jagger",
        artist: 'Maroon5',
        url: '/music/Move like jagger.mp3',
        cover: '/img/mlj.jpg',
        lrc: '/lrc/Moves Like Jagger.lrc',
      },
      {
        name: "I am yours",
        artist: 'Jason Mraz',
        url: '/music/I am yours.mp3',
        cover: '/img/imy.jpg',
        lrc: "/lrc/I'm Yours.lrc",
      }
    ]
});

