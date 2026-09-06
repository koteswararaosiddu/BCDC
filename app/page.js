"use client";
import {useState,useEffect} from "react";
import {Heart,Sparkles,Gift,BookOpen,Cross,Star,ArrowDown,X,Quote,Sun,ChevronRight} from "lucide-react";

const verses = [
    [
      "Matthew 5:16",
      "Let your light so shine before men, that they may see your good works.\n\nమనుష్యుల యెదుట మీ వెలుగు ప్రకాశింపనియ్యుడి; అప్పుడు వారు మీ సత్క్రియలను చూచి పరలోకమందున్న మీ తండ్రిని మహిమపరచుదురు.",
      "A life of service can become a light for many people. Your kindness, prayers and good works can show others the love of God.\n\nసేవతో నిండిన జీవితం ఎంతోమందికి వెలుగుగా మారుతుంది. మీ ప్రేమ, ప్రార్థనలు మరియు మంచిపనుల ద్వారా అనేకమందికి దేవుని ప్రేమను చూపించవచ్చు."
    ],
  
    [
      "Galatians 6:9",
      "Let us not be weary in well doing: for in due season we shall reap.\n\nమేలు చేయుటలో అలసిపోకుదము; మనము విసుకకుండినయెడల తగినకాలమందు కోయుదుము.",
      "Serving people is not always easy. Keep doing good with patience. God sees work that people may never see.\n\nఇతరులకు సేవ చేయడం ఎల్లప్పుడూ సులభంగా ఉండదు. ఓర్పుతో మేలు చేస్తూనే ఉండండి. మనుష్యులు చూడని పనిని కూడా దేవుడు చూస్తాడు."
    ],
  
    [
      "1 Thessalonians 5:11",
      "Comfort yourselves together, and edify one another.\n\nకాబట్టి మీరు ఒకరినొకరు ఆదరించుచు, ఒకరినొకరు క్షేమాభివృద్ధి పరచుకొనుడి.",
      "Your words of encouragement can lift a tired heart, strengthen a young person and help a family continue with hope.\n\nమీ ప్రోత్సాహకరమైన మాటలు అలసిపోయిన హృదయానికి బలాన్ని ఇవ్వగలవు, ఒక యువకుడికి ధైర్యాన్ని ఇవ్వగలవు మరియు ఒక కుటుంబం ఆశతో ముందుకు సాగడానికి సహాయపడగలవు."
    ],
  
    [
      "Proverbs 22:6",
      "Train up a child in the way he should go.\n\nబాలుడు నడువవలసిన మార్గమును వానికి నేర్పుము; వాడు వృద్ధుడైనను దానినుండి తొలగిపోడు.",
      "Caring for children is an investment in the next generation. Love, guidance and prayer can leave a lasting foundation.\n\nపిల్లలను ప్రేమతో చూసుకోవడం రాబోయే తరానికి చేసే గొప్ప పెట్టుబడి. ప్రేమ, మార్గదర్శకత్వం మరియు ప్రార్థన వారి జీవితానికి బలమైన పునాదిగా నిలుస్తాయి."
    ],
  
    [
      "Philippians 2:4",
      "Look not every man on his own things, but every man also on the things of others.\n\nమీలో ప్రతివాడును తన సొంత కార్యములను మాత్రము కాక, ఇతరుల కార్యములను కూడ చూడవలెను.",
      "Looking after others is a beautiful picture of humility, compassion and Christ-like service.\n\nఇతరుల అవసరాలను పట్టించుకోవడం వినయం, కనికరం మరియు క్రీస్తు ప్రేమతో కూడిన సేవకు అందమైన ఉదాహరణ."
    ],
  
    [
      "Hebrews 10:24",
      "Let us consider one another to provoke unto love and to good works.\n\nప్రేమ చూపుటకును సత్కార్యములు చేయుటకును ఒకరినొకరు ప్రేరేపించుకొనుటకు శ్రద్ధ చూపుదము.",
      "Good leadership does not only speak; it inspires people to love, serve and become a blessing.\n\nమంచి నాయకత్వం కేవలం మాటలతో ముగియదు. అది ఇతరులను ప్రేమించడానికి, సేవ చేయడానికి మరియు ఇతరులకు ఆశీర్వాదంగా మారడానికి ప్రేరేపిస్తుంది."
    ],
  
    [
      "Isaiah 40:31",
      "They that wait upon the LORD shall renew their strength.\n\nయెహోవాకొరకు ఎదురు చూచువారు నూతన బలము పొందుదురు.",
      "When ministry feels heavy, may God renew your strength and give you fresh energy to continue serving.\n\nసేవలో కొన్నిసార్లు అలసట మరియు భారమైన పరిస్థితులు ఎదురవుతాయి. అలాంటి సమయంలో దేవుడు మీకు నూతన బలాన్ని, తాజా ఉత్సాహాన్ని మరియు ముందుకు సాగడానికి కావలసిన శక్తిని ఇవ్వాలి."
    ],
  
    [
      "Joshua 1:9",
      "Be strong and of a good courage; be not afraid.\n\nనీవు బలవంతుడవై ధైర్యముగా నుండుము; భయపడకుము, దిగులుపడకుము.",
      "May God give courage for every conversation, prayer, decision and new responsibility.\n\nప్రతి సంభాషణలో, ప్రతి ప్రార్థనలో, ప్రతి నిర్ణయంలో మరియు ప్రతి కొత్త బాధ్యతలో దేవుడు మీకు ధైర్యాన్ని ఇవ్వాలి. విశ్వాసంతో ముందుకు సాగడానికి ఆయన మీకు బలమివ్వాలి."
    ],
  
    [
      "Colossians 3:23",
      "And whatsoever ye do, do it heartily, as to the Lord.\n\nమీరు ఏ పని చేసినను మనుష్యులకొరకు కాదు, ప్రభువు కొరకే అన్నట్టు మనస్ఫూర్తిగా చేయుడి.",
      "Every small act matters: visiting, listening, teaching, praying, helping, encouraging and caring.\n\nచిన్నదైనా ప్రతి సేవ ముఖ్యమైనదే. ఒకరిని కలవడం, వారి మాట వినడం, బోధించడం, ప్రార్థించడం, సహాయం చేయడం, ప్రోత్సహించడం మరియు ప్రేమతో చూసుకోవడం — ఇవన్నీ విలువైన సేవలే."
    ],
  
    [
      "Micah 6:8",
      "What doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?\n\nన్యాయముగా ప్రవర్తించుట, కనికరమును ప్రేమించుట, నీ దేవునితో దీనమనస్సుతో నడుచుట తప్ప యెహోవా నీ యొద్ద ఏమి కోరుచున్నాడు?",
      "Justice, mercy and humility are powerful forms of service that can influence generations.\n\nన్యాయం, కనికరం మరియు వినయం ఎంతో శక్తివంతమైన సేవా రూపాలు. ఈ విలువలు మన చుట్టూ ఉన్నవారినే కాకుండా రాబోయే తరాలను కూడా ప్రభావితం చేయగలవు."
    ],
  
    [
      "1 Corinthians 15:58",
      "Be ye stedfast, unmoveable, always abounding in the work of the Lord.\n\nకాబట్టి నా ప్రియ సహోదరులారా, స్థిరులును, కదలనివారునై, ప్రభువు కార్యమందు ఎల్లప్పుడు అభివృద్ధి పొందుచుండుడి.",
      "Stay faithful. The seeds planted in people today may become fruit in their lives for many years.\n\nవిశ్వాసంగా కొనసాగండి. ఈ రోజు మనుష్యుల జీవితాల్లో మీరు నాటే మంచి విత్తనాలు రాబోయే ఎన్నో సంవత్సరాల్లో వారి జీవితాల్లో మంచి ఫలాలను ఇవ్వవచ్చు."
    ],
  
    [
      "Psalm 121:1-2",
      "I will lift up mine eyes unto the hills, from whence cometh my help.\n\nపర్వతముల తట్టు నా కన్నులు ఎత్తి చూచుచున్నాను; నాకు సహాయము ఎక్కడనుండి వచ్చును?",
      "May your strength always come from God, especially when you carry the needs and hopes of many people.\n\nఎంతోమంది ప్రజల అవసరాలు, బాధ్యతలు మరియు ఆశలను మోస్తున్నప్పుడు మీ బలం ఎల్లప్పుడూ దేవుని నుండే రావాలి. ప్రతి రోజూ ఆయన మీకు శాంతిని, జ్ఞానాన్ని, బలాన్ని మరియు సేవ చేయడానికి కావలసిన కృపను ఇవ్వాలి."
    ]
  ];

const ministry=[
["👨‍👩‍👧‍👦","Supporting Families","Being available when families need a listening ear, encouragement, prayer, guidance and practical support."],
["🌟","Building the Youth","Encouraging young boys and girls to choose hope, good values, confidence and a meaningful future."],
["📖","Teaching & Encouraging","Sharing God's Word with patience and helping people grow spiritually, emotionally and personally."],
["🙏","Prayer & Intercession","Standing with people in prayer during difficult seasons, celebrating their joys and trusting God for their future."],
["🧒","Caring for Children","Giving children attention, love, guidance and a positive environment where they can learn and grow."],
["🤲","Service & Compassion","Serving people without expecting recognition. Seeing a need and responding with kindness, time and effort."],
["🤝","Believers & Seekers","Welcoming believers and people who are searching, listening without judgment and sharing hope with respect."],
["⛪","Creating Servants","Encouraging people to become leaders, pastors, volunteers and servants who can care for others."],
["🏠","A Place of Belonging","Helping people feel accepted, valued and connected so they can share, learn and grow."],
["💬","Motivation & Counsel","Speaking hope when someone is discouraged, giving wise direction and helping them take the next right step."],
["🎓","Developing Leaders","Recognizing potential and encouraging people to learn, lead with humility and serve with character."],
["❤️","Love in Action","Turning faith into practical love through presence, compassion, patience, generosity and consistent care."]
];

const moments = [
    [
      "Family Care",
      "Supporting homes with prayer, encouragement and a caring heart. Standing beside families when they are going through difficult situations, listening to their concerns, giving them hope and helping them find strength. Caring not only about their spiritual life, but also about their happiness, relationships, children and everyday needs. Creating an environment where every family feels respected, valued, supported and never alone.",
      "👨‍👩‍👧"
    ],
  
    [
      "Youth Guidance",
      "Listening to young boys and girls, understanding their dreams, questions, struggles and challenges without judging them. Encouraging them to believe in themselves, make wise decisions and discover the purpose God has placed in their lives. Helping young people overcome fear, confusion and discouragement while teaching them good values, responsibility, confidence and compassion. Investing time in the next generation so they can grow into strong, wise and caring people.",
      "🌟"
    ],
  
    [
      "Children's Care",
      "Creating happy, safe and meaningful moments for children while making them feel loved, important and cared for. Teaching them kindness, respect, honesty, faith and good values through simple words and actions they can understand. Paying attention to their needs, encouraging their talents and helping them grow with confidence. Planting good seeds in young hearts today so they can become responsible, loving and compassionate people tomorrow.",
      "🧒"
    ],
  
    [
      "Prayer",
      "Standing with people and families through prayer, especially when they are facing difficult situations, uncertainty, pain or important decisions. Taking their concerns seriously and bringing them before God with faith and hope. Encouraging people not to give up when circumstances become difficult and reminding them that they can always turn to God for strength, peace and guidance. Making prayer a source of comfort, courage and hope for everyone who comes seeking support.",
      "🙏"
    ],
  
    [
      "Teaching",
      "Sharing God's Word in a simple, clear and practical way that people can understand and apply in their everyday lives. Helping believers grow in their knowledge, faith, character and relationship with God. Connecting biblical teachings with real-life situations so that God's Word becomes something people can live, not simply something they hear. Encouraging children, youth, families and believers to learn, ask questions, grow spiritually and become examples to others through their lives.",
      "📖"
    ],
  
    [
      "Leadership",
      "Helping future servants, pastors and leaders discover their calling and understand the responsibility that comes with serving others. Recognizing potential in people, encouraging them when they doubt themselves and giving them opportunities to learn, serve and grow. Teaching leadership through humility, patience, responsibility, prayer, compassion and example. Investing in people today so that they can become strong leaders who guide, encourage and serve the next generation with a genuine heart.",
      "🔥"
    ],
  
    [
      "Seva",
      "Serving quietly, kindly and consistently wherever help is needed, without expecting praise or recognition. Understanding that true service is not always about doing something big, but also about noticing someone's need, giving time, listening to someone, helping a family, encouraging a young person or simply being present when someone needs support. Showing through actions that love becomes meaningful when it is put into practice. Serving people with humility, compassion, patience and a willing heart.",
      "🤲"
    ],
  
    [
      "Hope",
      "Giving someone a reason to smile, continue and believe again when they feel discouraged or are going through a difficult season. Speaking words that bring courage when people feel weak and reminding them that one difficult chapter does not define their whole life. Helping people see possibilities where they only see problems and encouraging them to take another step forward with faith and confidence. Bringing hope to families, youth, children, believers and every person who needs someone to say, 'You can continue. Do not give up.'",
      "🌸"
    ]
  ];

export default function Home(){
 const [surprise,setSurprise]=useState(false),[verse,setVerse]=useState(null),[active,setActive]=useState(0),[petals,setPetals]=useState([]);
 useEffect(()=>setPetals(Array.from({length:34},(_,i)=>({id:i,left:Math.random()*100,delay:Math.random()*8,duration:7+Math.random()*7,size:10+Math.random()*13}))),[]);
 return <main>
  <div className="petals">{petals.map(p=><span key={p.id} style={{left:p.left+"%",animationDelay:p.delay+"s",animationDuration:p.duration+"s",fontSize:p.size+"px"}}>✿</span>)}</div>
  <div className="orb orb1"/><div className="orb orb2"/>
  <header className="hero">
   <div className="topBadge"><Cross size={15}/> A celebration of faith, love & service</div>
   <div className="goldCross"><Cross size={36}/></div>
   <p className="eyebrow">WITH RESPECT • LOVE • GRATITUDE</p>
   <h1>Pastor <span>Vijaykumar</span><br/><i>& Hepsibha</i></h1>
   <p className="heroLead">Two lives dedicated to encouraging people, strengthening families, guiding the youth, caring for children, building servants and sharing hope through faith and service.</p>
   <div className="heroActions"><button className="primary" onClick={()=>setSurprise(true)}><Gift size={19}/> Open Your Surprise</button><a className="secondary" href="#ministry">Explore their service <ChevronRight size={17}/></a></div>
   <div className="scroll"><ArrowDown size={15}/> A story of service in many directions</div>
  </header>

  <section className="section intro">
   <div className="ornament">✦</div><p className="eyebrow">MORE THAN A TITLE</p><h2>Servants who make faith visible.</h2>
   <p>Being a pastor is not only standing before people. It is also standing beside people. It is listening when someone is hurting, praying when someone has no words, encouraging a young person who has lost confidence, caring for children, supporting families, teaching God's Word, developing new servants and showing compassion in everyday life.</p>
   <p>Vijaykumar and Hepsibha are celebrated for serving with a heart that reaches in many directions — towards families, youth, children, believers, seekers, leaders and people who simply need someone to care.</p>
  </section>

  <section id="ministry" className="section ministry"><div className="heading"><p className="eyebrow">THE MANY SIDES OF SERVICE</p><h2>Where love becomes action.</h2><p>Every card represents one part of a life of caring and serving.</p></div>
   <div className="ministryGrid">{ministry.map(([icon,title,text],i)=><article className="ministryCard" key={title}><div className="ministryIcon">{icon}</div><span className="cardNumber">{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
  </section>

  <section className="scripture"><div className="section"><div className="heading"><BookOpen className="bookIcon"/><p className="eyebrow">BIBLE • CHAPTER & VERSE</p><h2>Scripture for the journey</h2><p>Tap any verse for a simple message connected to service.</p></div>
   <div className="verseGrid">{verses.map(([ref,text,msg],i)=><button className="verseCard" key={ref} onClick={()=>setVerse({ref,text,msg})}><span className="verseNum">{String(i+1).padStart(2,"0")}</span><BookOpen size={20}/><h3>{ref}</h3><p>“{text}”</p><small>Open message →</small></button>)}</div>
  </div></section>

  <section className="section people"><div className="heading"><p className="eyebrow">THE PEOPLE AT THE HEART</p><h2>Many lives. One heart of service.</h2></div>
   <div className="peopleStrip">{["Families","Young Boys & Girls","Children","Believers","Non-Believers","Pastors","Future Leaders","People in Need"].map((x,i)=><div className="personPill" key={x}><span>{["🏠","🌟","🧒","📖","🌱","⛪","🔥","❤️"][i]}</span>{x}</div>)}</div>
  </section>

  <section className="moments"><div className="section"><div className="heading"><p className="eyebrow">A VISUAL STORY</p><h2>Little moments that matter.</h2><p>Click each moment to see the thought behind it.</p></div>
   <div className="momentLayout"><div className="momentList">{moments.map(([title,text,icon],i)=><button key={title} className={active===i?"moment active":"moment"} onClick={()=>setActive(i)}><span>{icon}</span><b>{title}</b><ChevronRight size={16}/></button>)}</div>
   <div className="momentDisplay"><div className="flowerBig">✿</div><span className="displayIcon">{moments[active][2]}</span><p className="eyebrow">SERVICE IN ACTION</p><h3>{moments[active][0]}</h3><p>{moments[active][1]}</p><div className="sparkleLine">✦　✧　✦</div></div></div>
  </div></section>

  <section className="section photoSection">
  <div className="heading">
    <p className="eyebrow">YOUR MEMORIES</p>
  </div>

  <div className="photoGrid">
    {Array.from({ length: 20 }, (_, i) => (
      <div className="photoSlot" key={i}>
        <img
          src={`/photos/photo-${String(i + 1).padStart(2, "0")}.jpg`}
          alt={`Memory ${i + 1}`}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.classList.add("empty");
          }}
        />

        <div className="photoPlaceholder">
          <Heart size={20} />
          <span>Memory {String(i + 1).padStart(2, "0")}</span>
        </div>
      </div>
    ))}
  </div>
</section>

  <section className="quoteSection"><Quote size={34}/><h2>“A servant does not only speak about love. A servant shows love through a life of service.”</h2><p>May every prayer, conversation, helping hand and encouraging word continue to touch lives.</p></section>

  <section className="section blessing"><div className="blessingCard"><Sun className="sunIcon" size={31}/><p className="eyebrow">A PRAYER FOR BOTH OF YOU</p><h2>May God strengthen your hands and enlarge your hearts.</h2>
   <p>May God give you wisdom for every family, patience for every conversation, courage for every challenge, compassion for every child, understanding for every young person and strength for every responsibility.</p>
   <p>May your home be filled with peace. May your ministry be filled with grace. May new pastors, leaders and servants rise through the encouragement you give. May people who are far from faith find a safe place to ask questions and discover hope.</p><div className="stars">✦　✧　✦　✧　✦</div>
  </div></section>

  <section className="final"><div className="finalCard"><div className="heartRing"><Heart fill="currentColor" size={29}/></div><p className="eyebrow">WITH DEEP GRATITUDE</p><h2>Dear Vijaykumar & Hepsibha,</h2>
   <p>Thank you for choosing a life that reaches beyond yourselves. Thank you for caring when people need care, listening when people need to speak, praying when people need hope, teaching when people need direction, and encouraging when people feel like giving up.</p>
   <p>Thank you for believing in young people, caring for children, standing with families, encouraging believers and welcoming people who are still searching. Thank you for helping create pastors, leaders and servants who can continue blessing others.</p>
   <p>Your work may happen in small moments, but small moments can change entire lives. A word can restore confidence. A prayer can bring peace. A helping hand can give someone courage. A caring heart can make someone feel seen.</p>
   <strong>May God bless you, protect you, guide you and give you many more years to serve with joy. 🙏</strong><div className="signature">With love, respect & gratitude ❤️</div>
  </div></section>
  <footer className="footer">
  <p>Made with ❤️ and faith</p>
  <p>Created by <strong>Koti Brothers</strong></p>
</footer>

  {surprise&&<div className="modalBack" onClick={()=>setSurprise(false)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setSurprise(false)}><X/></button><div className="surpriseFlowers">✿　🌸　✿</div><div className="modalIcon"><Gift size={31}/></div><p className="eyebrow">A SURPRISE FROM THE HEART</p><h2>Thank you for being a blessing. ❤️</h2><p>Pastor Vijaykumar & Hepsibha, may every person you have encouraged remember the hope you gave them. May every family you supported feel stronger. May every young person you guided walk with confidence.</p><p>May every child you cared for remember kindness. May every future pastor and servant you encouraged become a blessing to many more people.</p><div className="highlight">Keep serving. Keep praying. Keep encouraging. Keep shining. ✨</div><button className="primary" onClick={()=>setSurprise(false)}>Close with gratitude</button></div></div>}

  {verse&&<div className="modalBack" onClick={()=>setVerse(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setVerse(null)}><X/></button><div className="modalIcon"><BookOpen size={29}/></div><p className="eyebrow">{verse.ref}</p><h2>“{verse.text}”</h2><p>{verse.msg}</p><button className="primary" onClick={()=>setVerse(null)}>Close verse</button></div></div>}
 </main>
}