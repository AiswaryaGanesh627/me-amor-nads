import { useState, useEffect, useCallback } from 'react';
import './App.css';
import './styles/LoveBackground.css';
import MemoryCollage from './components/MemoryCollage';

// Custom Video Component with Poster Image
const VideoWithPoster = ({ videoSrc, posterSrc, title }) => {
  const [showVideo, setShowVideo] = useState(false);
  
  const handleClick = () => {
    setShowVideo(true);
  };
  
  // Extract video ID from Google Drive URL if it's a Google Drive link
  const getEmbedUrl = (url) => {
    if (url.includes('drive.google.com')) {
      // For Google Drive links
      const fileId = url.match(/\/d\/([^/]+)/)?.[1] || url.match(/id=([^&]+)/)?.[1];
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return url;
  };
  
  return (
    <div className="birthday-video-container">
      {!showVideo ? (
        <div 
          className="video-poster-container" 
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={posterSrc} 
            alt={title} 
            className="video-poster" 
          />
          <div className="play-icon" style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '4rem',
            opacity: 0.9,
            color: 'white',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
            zIndex: 2
          }}>▶️</div>
        </div>
      ) : (
        <iframe
          className="birthday-video"
          src={getEmbedUrl(videoSrc)}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      )}
    </div>
  );
};

const memories = [
  {
    id: 'welcome',
    title: '🎉 Happy Birthday, Nadraj!',
    content: (
      <>
        <p>Happiest Birthday to my most precious gem❤️ Oruthar oda siripukku en life ah colorful ah maathra power irukum nu na nenakave illa. En life oda unexpected blessing nee.</p>
        <p>I am glad you were born. I don't think I can ever love someone the way I love you. Ini unnoda ella birthdays kum un kooda naanum irukanum nu aasa padren pa. Life full ah.</p>
        <p>Ne sirikratha paathukite. Ne azharapo un kanna thodachukite. Ne kova padrapo una samathana paduthikite. Eppovume un kooda.</p>
        <p>I love you pa. Solla mudiyatha alavuku love panren una❤️</p>
      </>
    ),
    images: [
      {
        url: '/images/Us-4.jpeg',
        alt: 'Romantic moment',
        rotation: -5,
        caption: 'Epovume enaku nee than😘'
      },
      {
        url: '/images/Nadraj-2.jpeg',
        alt: 'Looking forward',
        rotation: 3,
        caption: 'Yen pa ivlo azhaga iruka ❤️'
      },
      {
        url: '/images/Nadraj-3.jpeg',
        alt: 'First meet',
        rotation: 2,
        caption: 'Ivlo cuteness thaangathu 🥰'
      }
    ]
  },
  {
    id: 'first-text',
    title: '💬 Our First Conversation',
    content: (
        <>
          <p>Feb 29, 2024❤️Ennoda life changing day. Ne enaku anaki text pannala apdina life la na ennoda most important person ah miss pannirpen pa. Thank you for coming into my life pa😘</p>
          <p>Apo text panna start pannom. Neraya pesnom. Pesikite irundhom. Un texts ku naduvula unnoda genuine aana character ayum ponnungalku ne kudutha respect ayum enaku na naana iruka ne kudutha space ayum paathu enaku un mela periya maryadha vandhiduchu.</p>
          <p>Andha maryadha enaku un mela love ah paasam ah maarichu. Unna na nerla paakala un mukham kooda perusa enaku nyaabagam illa. Unnoda habits and manners enaku apo theriyathu. Una pathi na full ah therinjukaamaye unna na love pana start panniten.</p>
          <p>Un messages kaaga wait pana start pannen. Unaku good night sollama enaku thookam varathu. Gradually, you became a part of my life. You became a part of me paa❤️</p>
        </>
    ),
    images: [
      {
        url: '/images/first-message.png',
        alt: 'First message screenshot',
        rotation: -3,
        caption: 'Nama mudhal message ❤️'
      },
      {
        url: '/images/conversation-1.png',
        alt: 'Text message bubbles',
        rotation: 4,
        caption: 'Our conversations 💖'
      },
      {
        url: '/images/conversation-2.png',
        alt: 'Smiling at phone',
        rotation: 1,
        caption: 'Ne sirchite irundhen pa 😍'
      }
    ]
  },
  {
    id: 'athena-decision',
    title: '🏢 The Athena Decision',
    content: (
        <>
          <p>Un life la un lifeaye maathra maari oru change vandhichu. Athuku na unnoda stepping stone ah irundhen. Unnoda career oda next phase. Athena ku ne vandha nalla irukum nu enaku epovume thonum</p>
          <p>Naama neraya discuss panni onna decide pannom athena will be a better choice nu. Unnoda life-changing moment. But unaku onu theriyuma pa. That was a life-changing moment for me as well😢</p>
          <p>Ne athena ku vandha aprm ennoda confusions doubts ellam maranchu na un mela vechirka kadhal evlo aazhamaanathu nu enake apo than purinjuchu</p>
          <p>Athena happened to you... You happened to me pa💓</p>
        </>
    ),
    images: [
      {
        url: '/images/conversation-3.png',
        alt: 'Modern office space',
        rotation: 1,
        caption: 'Athena pathina convos '
      },
      {
        url: '/images/athena-1.jpg',
        alt: 'Office building',
        rotation: -3,
        caption: 'Unnoda difficult decision😢'
      },
      {
        url: '/images/athena-2.png',
        alt: 'Office desk',
        rotation: 2,
        caption: 'Namma workplace 💓'
      }
    ]
  },
  {
    id: 'first-meet',
    title: '👀 Our Initial Days',
    content: (
        <>
          <p>Aprm enna... Ennoda azhagana one sided love thaaaan😂 Initially, ithellam verum attraction infatuation nu nenachen pa.😂 Un kooda pazhaga pazhaga una paaka paaka ennoda doubts lam kaanama poyiruchu.</p>
          <p>Una unake theriyama sight adikrathu photo edukrathu video edukrathu. Matha ponnunga una paatha avangalku warning tharathu😂Un pinnadi unake theriyama suthnen pa.</p>
          <p>Ennoda oru thalai kadhal oru nalla feeling. Unnoda happiness than enoda happiness. But neraya valiyum kuduthichu. Ne ena love pannala nu clear ah unoda actions la theriyum.</p>
          <p>But andha pain ayum thaandi enaku ne important nu thonichu pa. Ennoda top most priority ah nee maarna. Oru person kaaga ennala ivlo panna mudiyuma nu un kita than na pathen.</p>
          <p>I love you so much❤️ But ennoda love ah full ah unaku explain panna indha words pathatheyy pa</p>
        </>
    ),    images: [
      {
        url: '/images/Us-8.jpeg',
        alt: 'Two people meeting',
        rotation: -2,
        caption: 'Namma sema pair la😂'
      },
      {
        url: '/images/conversation-4.png',
        alt: 'First date',
        rotation: 3,
        caption: 'Namma teams convos❤️'
      },
      {
        url: '/images/Us-10.jpeg',
        alt: 'Smiling face',
        rotation: -1,
        caption: 'My happiness🌹'
      }
    ]
  },
  {
    id: 'becoming-friends',
    title: '👫 Becoming Best Friends',
    content: (
        <>
          <p>Ennoda best friend ah ennoda partner ah na unna paaka start pannen. Ne illatha oru life imagine panrathe kashtama maarichu.🥲</p>
          <p>Ethu na temporary feelings nu nenacheno athu ennaye maraka vekra love ah maarichu. Unnoda happiness epo enaku ennoda happiness ah vidu perusu nu thona aarambichichu nu theriyala. But ennoda ellavuma ne maarita pa💘</p>
          <p>Ennoda life la oru part illa nee. Enakulla oru part ah iruka. Una ivlo love pannuven nu na nenakave illa. Unnoda oru chinna siripu ennoda life ah azhaga maathum nu na nenakave ila.❤️</p>
        </>
    ),    images: [
      {
        url: '/images/Us-5.jpeg',
        alt: 'Friends laughing together',
        rotation: -2,
        caption: 'Namma Coffee time💞'
      },
      {
        url: '/images/Us-6.jpeg',
        alt: 'Friends having coffee',
        rotation: 3,
        caption: 'Impromptu video calls😍'
      },
      {
        url: '/images/Us-7.jpeg',
        alt: 'Texting on phone',
        rotation: -1,
        caption: 'Just you and me💞'
      }
    ]
  },
  {
    id: 'office-days',
    title: '💼 Office Days',
    content: (
        <>
         <p>Unmaya sollanum na. The best days of my life😢❤️ Un kooda time spend panrathe namma office la than. Ne athena varalana na neraya enoda life la miss pannirpen.</p>
        <p>Una pakkathila ukkandhu torture panrathu... Un laptop ah moodi una tension aakrathu😉Un specs ah pudungrathu😂 Un ears ah pudichu thirukrathu...Ne ponnunga pera solli ena verupethrathu😏</p>
        <p>Ithellamey enoda happy moments pa.In fact nee en kooda pesama amaithiya irundhalum un kooda chumma ukkarave enaku avlooo pudikum pa.</p>
          <p>Unaku theriyum en life la work and family thavara onnum irundhathu ila. Inimey nee, family and work avlo than. In fact work na kooda athulayum ne than iruka pa. What will I do without you in my life?😂</p>
        </>
    ),    images: [
      {
        url: '/images/Us-9.jpeg',
        alt: 'Colleagues working together',
        rotation: 1,
        caption: 'Ne handsome pa🤌❤️'
      },
      {
        url: '/images/Us-12.jpeg',
        alt: 'Team meeting',
        rotation: -3,
        caption: 'Na unaketha pair than pa😎'
      },
      {
        url: '/images/Us-11.jpeg',
        alt: 'Office view',
        rotation: 2,
        caption: 'Ivlo azhaga irundha ena na pannuven😥'
      }
    ]
  },
  {
    id: 'shared-likes',
    title: '❤️ I Like What You Like',
    content: (
      <>
        <p>Unaku pidichathu lam enakum pidika aarambichuchu. Ne rasikratha paathu naa una rasika aarambichen. Ne virat kohli Ab De Villiers ah pathi pesrapo un eyes shine aagum.😂</p>
        <p>Oru remote control car ah paakrapo un kannula theriyara andha kozhandhathanamaana santhosham. Filter coffee kudikrapo...Gym poyi nalla pump kedarapo...</p>
        <p>Calorie calorie nu sollitu kunafa, waffle, dragon paneer, tender coconut juice, margherita pizza ithellam rashichu cute ah saapdrapo..saaaaami evlo azhaga iruka theriyuma satti nee😭❤️🤌</p>
        <p>En heart en kita illa poooo...Ne unaku pudichathu pannanum.Un koodave irundhu unnoda happiness ah paathu na rasikanum.❤️</p>
      </>
    ),
    images: [
      {
        url: '/images/Love-1.png',
        alt: 'Music',
        rotation: -8,
        caption: 'Your VK and ABD❤️',
        xOffset: -20,
        yOffset: -10
      },
      {
        url: '/images/Love-2.png',
        alt: 'Pizza',
        rotation: 5,
        caption: 'Lotus Biscoff kunafa 😂',
        xOffset: 15,
        yOffset: 10
      },
      {
        url: '/images/Love-3.png',
        alt: 'Books',
        rotation: -3,
        caption: 'Unnoda most favourite thing on earth☕',
        xOffset: -10,
        yOffset: 20
      },
      {
        url: '/images/Love-4.png',
        alt: 'Sunsets',
        rotation: 7,
        caption: 'Power lifting machiiii🏋️',
        xOffset: 20,
        yOffset: -15
      },
      {
        url: '/images/Love-5.jpeg',
        alt: 'Laughter',
        rotation: -2,
        caption: 'Hulk 💪',
        xOffset: -15,
        yOffset: 10
      },
      {
        url: '/images/Love-6.jpeg',
        alt: 'Laughter',
        rotation: -2,
        caption: 'Unnoda fav yezdi🚲💨',
        xOffset: -15,
        yOffset: 10
      }
    ]
  },
  {
    id: 'waiting',
    title: 'Your Important People ❤️',
    content: (
        <>
          <p>Un life la unnoda most important people... Ne illana vaazhkaye illanu nenakra amma appa, un mela uyiraye vechiruka manickam anna, un mela paasama iruka college friends and oor pasanga❤️</p>
          <p>Un mela affectionate ah irukra unnoda cousins, friends and relatives. Ipdi una suthi un mela paasam veka neraya per irukanga pa. Life la unaku paasam neraya iruku❣️Epovume unaku ivlo love kedaikanum🤞</p>
          <p>Unnoda important people la na oruthi nu theriyum😂But evlo important nu theriyala. Unnoda most important person ah irukanum nu aasaya iruku pa. Irukalama?</p>
        </>
    ),    images: [
      {
        url: '/images/Imp-1.jpeg',
        alt: 'Person looking at distance',
        rotation: 1,
        caption: 'Namma amma appa ❤️'
      },
      {
        url: '/images/Imp-4.jpeg',
        alt: 'Clock',
        rotation: -3,
        caption: 'Manikam anna❤️'
      },
      {
        url: '/images/Imp-2.jpeg',
        alt: 'Hopeful',
        rotation: 2,
        caption: 'Unnoda college friends❤️'
      },
      {
        url: '/images/Imp-3.jpeg',
        alt: 'Sunsets',
        rotation: 7,
        caption: 'Chocku abhish❤️',
        xOffset: 20,
        yOffset: -15
      },
      {
        url: '/images/Imp-5.jpeg',
        alt: 'Laughter',
        rotation: -2,
        caption: 'Unnoda boys❤️',
        xOffset: -15,
        yOffset: 10
      },
      {
        url: '/images/Imp-6.jpeg',
        alt: 'Laughter',
        rotation: -2,
        caption: 'Cute kutties❤️',
        xOffset: -15,
        yOffset: 10
      }
    ]
  },
  {
    id: 'birthday-wish',
    title: '🎂 Happy Birthday, Paaa!',
    content: (
      <div className="birthday-content confession">
        <p>Happy birthday, Paaa!❤️ I am glad you were born. Thank you for coming into my life. Life la unnoda ella birthdayskum un kooda naanum irukanum nu aasa padren pa.</p>
        <p>Ti amo🌹</p>

        <VideoWithPoster
            videoSrc="https://drive.google.com/uc?id=14glAHM-89RZawqH5IvCPlE7YzdQP3GvS&export=download"
            posterSrc="/images/poster-2.jpeg"
            title="Birthday video"
        />

        <p className="birthday-message">
          Indha varsham unaku ella santhoshathayum kudukanum. Ne aasa padrathu ellame unaku kedaikanum💖
          <br/>Ne epovume happy ah sirichikite irukanum. Atha na un kooda irundhu paathu rasikanum.😘
        </p>
      </div>
    ),
    images: []
  },
  {
    id: 'confession',
    title: 'I love you, Nadraj❤️',
    content: (
        <div className="birthday-content confession">
          <p>Una na love panren pa... Rombaaa... Enaku evlo valichalum evlo insecurities and self-doubts irundhalum na una mela vechiruka kadhal ellatha vidayum strong aanathu.</p>
          <p>Ennala epovume un mela love ah thavara ethayume kaata mudiyathu pa. I am in love with you. I keep falling more and more every single day❤️</p>

          <VideoWithPoster 
            videoSrc="https://drive.google.com/uc?id=1zxb4h1TRI0TBHv6XbxTR1vQoh2H0kcFn&export=download"
            posterSrc="/images/poster-1.jpeg"
            title="Confession video"
          />

          <p className="birthday-message">
            Ennoda Best friend ah, enaku doubts varapo ennoda mentor ah, na vizharapo ena thangi pudikra soulmate ah,
            na sogama irukrapo ena sirika vekra ennoda happy pill ah, ennoda stress buster ah, enaku problem nu varapo atha handle panra ennoda guardian ah,
            ennoda life ah share pannikra life partner ah, enoda boyfriend ah, ennoda husband ah, ennoda kids ku appa va nee irukanum nu aasa padren pa.
            <br/>Irupiya pa?
            <span className="signature">With lots of kadhal,<br />Aiswarya ❤️</span>
          </p>
        </div>
    ),
    images: []
  }
];

function App() {
  const [currentMemory, setCurrentMemory] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Add keyframes style for gradient animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const nextMemory = useCallback(() => {
    if (currentMemory < memories.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMemory(prev => prev + 1);
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentMemory, isTransitioning]);

  const prevMemory = useCallback(() => {
    if (currentMemory > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMemory(prev => prev - 1);
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentMemory, isTransitioning]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextMemory();
      } else if (e.key === 'ArrowLeft') {
        prevMemory();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentMemory, isTransitioning, nextMemory, prevMemory]);

  return (
    <div className="app">
      <div className="heart-bg"></div>
      {memories.map((memory, index) => (
        <MemoryCollage
          key={memory.id}
          title={memory.title}
          content={memory.id === 'birthday-wish' ? (
            <>
              <p>{memory.content}</p>
              <p className="highlight">I love you more than words can say ❤️</p>
            </>
          ) : memory.content}
          images={memory.images}
          isActive={index === currentMemory}
        />
      ))}

      <div className="navigation">
        <button 
          onClick={prevMemory} 
          className={`nav-button ${currentMemory === 0 ? 'disabled' : ''}`}
          disabled={currentMemory === 0}
        >
          ←
        </button>
        <button 
          onClick={nextMemory} 
          className={`nav-button ${currentMemory === memories.length - 1 ? 'disabled' : ''}`}
          disabled={currentMemory === memories.length - 1}
        >
          {currentMemory === memories.length - 1 ? '' : '→'}
        </button>
      </div>
    </div>
  );
}

export default App;
