
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouseChimney, faTerminal, faDiagramNext, faMusic,faVolleyball, faChess, faMasksTheater,faDumbbell, faJedi, 
    faPersonSnowboarding, faFileVideo, faHeadset, faTheaterMasks} from '@fortawesome/free-solid-svg-icons'

export const logo = 'https://img.icons8.com/?size=512&id=19318&format=png';
export const search = 'https://img.icons8.com/?size=512&id=VE2uMI9aCgiC&format=png';


const Envelope = <FontAwesomeIcon icon={faEnvelope} />

export const categories = [
    { name: 'New', icon: <FontAwesomeIcon icon={faHouseChimney} height={15} width={15} />, },
    { name: 'Coding', icon: <FontAwesomeIcon icon={faTerminal} height={15} width={15}/>, },
    { name: 'Next JS', icon: <FontAwesomeIcon icon={faDiagramNext} height={15} width={15}/>, },
    { name: 'Music', icon: <FontAwesomeIcon icon={faMusic} height={15} width={15}/>, },
    { name: 'Sports', icon: <FontAwesomeIcon icon={faVolleyball} height={15} width={15}/>, },
    { name: 'Chess', icon: <FontAwesomeIcon icon={faChess} height={15} width={15}/>, },
    { name: 'Live', icon: <FontAwesomeIcon icon={faTheaterMasks} height={15} width={15}/>, },
    { name: 'Gym', icon: <FontAwesomeIcon icon={faDumbbell} height={15} width={15}/>, },
    { name: 'Yoga', icon: <FontAwesomeIcon icon={faJedi} height={15} width={15}/>, },
    { name: 'Olympics', icon: <FontAwesomeIcon icon={faPersonSnowboarding} height={15} width={15}/>, },
    { name: 'Covid', icon: <FontAwesomeIcon icon={faMasksTheater} height={15} width={15}/>, },
    { name: 'Movies', icon: <FontAwesomeIcon icon={faFileVideo} height={15} width={15}/>, },
    { name: 'Gaming', icon: <FontAwesomeIcon icon={faHeadset} height={15} width={15}/>, },
   

  
  ];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'