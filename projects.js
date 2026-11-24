/* =========================================================
   PROJECTS.JS: i progetti di Sara (usati da index.html e project.html)

   Testi in due lingue: {it:"...", en:"..."}. Una sola stringa = uguale in entrambe.
   Campi vuoti ("") non vengono mostrati (es. year:"" nasconde l'anno).

   card:   immagine della griglia in home (4:5)
   loop:   clip corta muta che parte da sola su card e copertina
   cover:  immagine grande in cima alla pagina progetto (16:9)
   rows:   la galleria, riga per riga: 1, 2 o 3 immagini per riga (non vengono ritagliate)
   video:  video completo (file .mp4, oppure link Vimeo/YouTube). vertical:true se è 9:16
   link:   indirizzo del progetto online (mostra "Visita il sito")
   palette, result, credits: facoltativi
   ========================================================= */
/* V: aumenta questo numero quando cambi un'immagine, così il browser non mostra la versione vecchia */
const V = 12;
const A = p => "assets/" + p + "?v=" + V;

const PROJECTS = [
  {
    slug:"video-coreografia", name:{it:"Video coreografia",en:"Choreography video"},
    context:{it:"Progetto esterno",en:"External project"},
    tags:{it:["Video","Montaggio"],en:["Video","Editing"]},
    client:"", year:"", location:"Alla Dance",
    services:{it:["Riprese","Montaggio"],en:["Filming","Editing"]},
    wish:{it:"Raccontare la coreografia di Chiara La Rocca, danzata da due ballerine, in un video verticale, pensato per essere visto sul telefono.",
          en:"Telling Chiara La Rocca's choreography, performed by two dancers, through a vertical video, made to be watched on a phone."},
    approach:{it:"Ho ripreso le due ballerine nella sala di Alla Dance alternando inquadrature d'insieme e momenti più ravvicinati, poi ho montato il video seguendo il ritmo della musica. Il formato 9:16 e la luce viola tengono insieme tutto il racconto.",
              en:"I filmed the two dancers in the Alla Dance studio, alternating wide shots with closer moments, then edited the video to the rhythm of the music. The 9:16 format and the purple light hold the whole piece together."},
    result:{it:["Due ballerine,","un solo ritmo,","novanta secondi."],en:["Two dancers,","one rhythm,","ninety seconds."]},
    card:A("princess/card.jpg"), loop:A("princess/loop.mp4"), cover:A("princess/cover.jpg"),
    video:A("princess/princess.mp4"), poster:A("princess/poster.jpg"), vertical:true, duration:"1'29\"",
    credits:[[{it:"Riprese e montaggio",en:"Filming & editing"},"Sara Murru"],[{it:"Coreografia",en:"Choreography"},"Chiara La Rocca"]],
    rows:[[A("princess/still-1.jpg"),A("princess/still-4.jpg"),A("princess/still-3.jpg")]]
  },
  {
    slug:"coca-cola", name:"Coca-Cola — Taste the Collection",
    context:{it:"IED Roma · 1° anno",en:"IED Rome · 1st year"},
    tags:{it:["Campagna","UX/UI"],en:["Campaign","UX/UI"]},
    client:"Coca-Cola (concept)", year:"", location:"Milano",
    services:{it:["Campagna integrata","App UX/UI","Billboard","Social"],en:["Integrated campaign","App UX/UI","Billboards","Social media"]},
    wish:{it:"Lanciare una collezione di gusti in edizione limitata durante la Milano Fashion Week, portando la campagna dalla strada fino allo smartphone.",
          en:"Launching a limited-edition flavour collection during Milan Fashion Week, carrying the campaign from the street all the way to the smartphone."},
    approach:{it:"Ho progettato un sistema su più punti di contatto: billboard in città e in metropolitana, un flyer d'invito per VIP e influencer con un'area grattabile e un QR code che porta al calendario degli eventi, storie Instagram e un'app in cui si collezionano i gusti e si partecipa ai premi.",
              en:"I designed a system across several touchpoints: billboards around the city and in the metro, an invitation flyer for VIPs and influencers with a scratch-off area and a QR code leading to the event calendar, Instagram stories and an app where people collect the flavours and enter to win prizes."},
    result:{it:["Dal cartellone","allo schermo,","un'unica esperienza."],en:["From billboard","to screen,","one experience."]},
    card:A("coca-cola/card.jpg"), cover:A("coca-cola/billboard-duomo.jpg"),
    rows:[[A("coca-cola/app.jpg")],
          [A("coca-cola/billboard-metro.jpg"),A("coca-cola/billboard-edicola.jpg")],
          [A("coca-cola/flyer.jpg")],
          [A("coca-cola/stories-1.jpg"),A("coca-cola/stories-2.jpg"),A("coca-cola/stories-3.jpg")]]
  },
  {
    slug:"touchdesigner", name:{it:"Studi in TouchDesigner",en:"TouchDesigner studies"},
    context:{it:"IED Roma · 2° anno",en:"IED Rome · 2nd year"},
    tags:{it:["Interattivo","TouchDesigner"],en:["Interactive","TouchDesigner"]},
    client:"", year:"", location:"",
    services:{it:["TouchDesigner","Visual audioreattivi","Webcam interattiva"],en:["TouchDesigner","Audio-reactive visuals","Interactive webcam"]},
    wish:{it:"Far reagire l'immagine a quello che si ascolta e a chi la guarda: il suono e il corpo come strumenti per disegnare.",
          en:"Making the image react to what you hear and to whoever is watching: sound and the body as drawing tools."},
    approach:{it:"Tre studi in TouchDesigner. Nel primo la rete analizza la musica in tempo reale e la usa per scomporre e ricomporre l'immagine di un pappagallo. Negli altri due l'ingresso è la webcam: in uno la distorsione colpisce tutto ciò che si muove, lasciando scie che si sciolgono come pittura liquida; nell'altro, a tempo, l'intera inquadratura si scompone in una marmorizzazione e poi si ricompone. L'immagine non è mai uguale: dipende da chi c'è e da cosa suona.",
              en:"Three TouchDesigner studies. In the first, the network analyses the music in real time and uses it to break apart and rebuild the image of a parrot. In the other two, the input is the webcam: in one, the distortion hits everything that moves, leaving trails that melt like liquid paint; in the other, on a timed cycle, the whole frame breaks down into marbling and then recomposes. The image is never the same: it depends on who is there and what is playing."},
    card:A("touchdesigner/card.jpg"), loop:A("touchdesigner/loop.mp4"), cover:A("touchdesigner/still-1.jpg"),
    films:[
      {src:A("touchdesigner/video.mp4"), poster:A("touchdesigner/still-1.jpg"), duration:"0'15\"",
       label:{it:"Studio 01 · Audioreattivo",en:"Study 01 · Audio-reactive"},
       text:{it:"Con l'audio acceso: quando la musica cresce, l'immagine si scompone in onde.",en:"With sound on: when the music builds, the image breaks into waves."}},
      {src:A("touchdesigner/webcam.mp4"), poster:A("touchdesigner/webcam-3.jpg"), duration:"0'16\"",
       label:{it:"Studio 02 · Webcam",en:"Study 02 · Webcam"},
       text:{it:"La distorsione agisce su tutto ciò che si muove davanti alla webcam: ogni movimento lascia una scia che si deforma e si scioglie.",en:"The distortion acts on everything that moves in front of the webcam: every movement leaves a trail that warps and melts."}},
      {src:A("touchdesigner/webcam2.mp4"), poster:A("touchdesigner/webcam2-2.jpg"), duration:"0'10\"",
       label:{it:"Studio 03 · Webcam",en:"Study 03 · Webcam"},
       text:{it:"A intervalli regolari l'immagine della webcam si scompone in una superficie fluida, come una marmorizzazione, e poi si ricompone. Il ciclo riparte da solo.",en:"At regular intervals the webcam image breaks down into a fluid, marbled surface and then recomposes. The cycle restarts on its own."}}
    ],
    rows:[[A("touchdesigner/still-2.jpg"),A("touchdesigner/still-4.jpg")],
          [A("touchdesigner/webcam-1.jpg"),A("touchdesigner/webcam-3.jpg")],
          [A("touchdesigner/webcam2-1.jpg"),A("touchdesigner/webcam2-2.jpg")]]
  },
  {
    slug:"ostia-academy", name:"Ostia Academy",
    context:{it:"Lavoro esterno per una palestra",en:"Freelance work for a gym"},
    tags:{it:["Web","Identità"],en:["Web","Identity"]},
    client:"ASD Taekwondo Ostia Academy", year:"", location:{it:"Ostia, Roma",en:"Ostia, Rome"},
    services:{it:["Sito web","Logo e identità","Social"],en:["Website","Logo & identity","Social media"]},
    link:"https://taekwondoostia.it",
    wish:{it:"Una palestra di taekwondo di Ostia che aveva bisogno di un'immagine riconoscibile e di un sito per farsi trovare da bambini, ragazzi e adulti.",
          en:"A taekwondo school in Ostia that needed a recognisable image and a website to reach children, teenagers and adults."},
    approach:{it:"Ho disegnato il logo circolare con l'atleta in calcio volante, il lettering e una palette di antracite, azzurro e giallo, poi ho portato l'identità sul sito: corsi, galleria, news e un modulo per prenotare la prova gratuita.",
              en:"I designed the circular logo with the athlete mid-kick, the lettering and a palette of charcoal, light blue and yellow, then carried the identity onto the website: classes, gallery, news and a form to book a free trial lesson."},
    palette:["#252426","#6EA9F0","#FFFFFF","#F4E38A"],
    result:{it:["Un calcio volante","diventato","un'identità."],en:["A flying kick","that became","an identity."]},
    card:A("ostia-academy/card.jpg"), cover:A("ostia-academy/sito-home.jpg"),
    rows:[[A("ostia-academy/logo.jpg"),A("ostia-academy/varianti.jpg")],
          [A("ostia-academy/sito-prova.jpg")],
          [A("ostia-academy/nome.jpg"),A("ostia-academy/palette.jpg")]]
  },
  {
    slug:"yes-i-ied", name:"Yes, I IED",
    context:{it:"IED Roma · 1° anno",en:"IED Rome · 1st year"},
    tags:{it:["Manifesti","Tipografia"],en:["Posters","Typography"]},
    client:"IED", year:"", location:{it:"Roma",en:"Rome"},
    services:{it:["Manifesti","Tipografia","Fotomontaggio"],en:["Posters","Typography","Photo montage"]},
    wish:{it:"Una serie di manifesti per comunicare i corsi triennali dello IED.",
          en:"A series of posters promoting IED's three-year courses."},
    approach:{it:"Ho lavorato su due linee. Quella tipografica spezza il nome di ogni corso in blocchi di lettere su un colore pieno diverso per ogni indirizzo. Quella fotografica usa volti strappati che lasciano emergere il claim \"Yes, I IED\".",
              en:"I worked on two lines. The typographic one breaks each course name into blocks of letters on a different solid colour for each programme. The photographic one uses torn faces that let the \"Yes, I IED\" claim emerge."},
    card:A("manifesti/card.jpg"), cover:A("manifesti/cover.jpg"),
    rows:[[A("manifesti/tipo-1.jpg"),A("manifesti/tipo-2.jpg"),A("manifesti/tipo-3.jpg")],
          [A("manifesti/foto-1.jpg"),A("manifesti/foto-2.jpg")]]
  },
  {
    slug:"copertine", name:{it:"Copertine",en:"Album covers"},
    context:{it:"IED Roma · 1° anno",en:"IED Rome · 1st year"},
    tags:{it:["Grafica","Musica"],en:["Graphic","Music"]},
    client:"Concept", year:"", location:"",
    services:{it:["Copertine","Trattamento foto","Lettering"],en:["Cover art","Photo treatment","Lettering"]},
    wish:{it:"Una serie di copertine in stile playlist per sei artisti che ascolto, pensate come una collezione coerente.",
          en:"A series of playlist-style covers for six artists I listen to, designed as one coherent collection."},
    approach:{it:"Ogni copertina parte da una foto dell'artista trattata in bicromia con un colore dominante diverso, e da un lettering in rilievo che riprende lo stesso tono. Cambia il colore, resta il sistema.",
              en:"Each cover starts from a photo of the artist, treated in duotone with a different dominant colour, and an embossed lettering in the same tone. The colour changes, the system stays."},
    card:A("copertine/card.jpg"), cover:A("copertine/cover.jpg"),
    rows:[[A("copertine/cover-1.jpg"),A("copertine/cover-2.jpg"),A("copertine/cover-3.jpg")],
          [A("copertine/cover-4.jpg"),A("copertine/cover-5.jpg"),A("copertine/cover-6.jpg")]]
  },
  {
    slug:"poster", name:"Poster",
    context:{it:"IED Roma · 1° anno",en:"IED Rome · 1st year"},
    tags:{it:["Poster","Fotomontaggio"],en:["Posters","Photo montage"]},
    client:"", year:"", location:"",
    services:{it:["Poster","Fotomontaggio","Tipografia"],en:["Posters","Photo montage","Typography"]},
    wish:{it:"Una raccolta di poster nati da brief diversi: una città, un marchio, uno sport.",
          en:"A collection of posters born from different briefs: a city, a brand, a sport."},
    approach:{it:"Fotomontaggio, tipografia e illustrazione mescolati di volta in volta: L'Aquila Capitale italiana della cultura 2026, una campagna IKEA, una Vans che si infila come una seconda pelle, un poster per il basket.",
              en:"Photo montage, typography and illustration mixed differently each time: L'Aquila Italian Capital of Culture 2026, an IKEA campaign, a pair of Vans worn like a second skin, a basketball poster."},
    card:A("poster/card.jpg"), cover:A("poster/cover.jpg"),
    rows:[[A("poster/poster-5.jpg"),A("poster/poster-3.jpg")],
          [A("poster/poster-2.jpg"),A("poster/poster-sport-basket.jpg")],
          [A("poster/poster-1.jpg"),A("poster/poster-4.jpg")]]
  },
  {
    slug:"collage", name:"Collage",
    context:{it:"IED Roma · 1° anno",en:"IED Rome · 1st year"},
    tags:{it:["Collage","Illustrazione"],en:["Collage","Illustration"]},
    client:"", year:"", location:"",
    services:{it:["Collage digitale","Illustrazione"],en:["Digital collage","Illustration"]},
    wish:{it:"Mondi impossibili costruiti a ritagli: paesaggi surreali e ritratti che si aprono come una mente.",
          en:"Impossible worlds built from cut-outs: surreal landscapes and portraits that open up like a mind."},
    approach:{it:"Parto da fotografie e materiali d'archivio e li ricompongo in scene nuove. Nei ritratti, quello che una persona pensa e ama esce dalla testa sotto forma di oggetti, fiori e animali.",
              en:"I start from photographs and archive material and recompose them into new scenes. In the portraits, what a person thinks and loves comes out of their head as objects, flowers and animals."},
    card:A("collage/card.jpg"), cover:A("collage/collage-1.jpg"),
    rows:[[A("collage/illustra-1.jpg"),A("collage/illustra-2.jpg"),A("collage/illustra-3.jpg")],
          [A("collage/collage-2.jpg")]]
  },
];

/* immagini per il mosaico in copertina della home */
const MOSAIC = ["cc-app","cc-duomo","cc-metro","cc-stories","col-collage-1","col-collage-2","col-illustra-1","col-illustra-2","col-illustra-3",
  "cover-1","cover-2","cover-3","cover-4","cover-5","cover-6","man-manifesti-foto-1","man-manifesti-foto-2","man-manifesti-tipo-1",
  "man-manifesti-tipo-2","man-manifesti-tipo-3","pos-poster-1","pos-poster-2","pos-poster-3","pos-poster-4","pos-poster-5",
  "pos-poster-sport-basket","princess-4","princess-20","princess-42","princess-62","princess-46","td-1","td-2","td-3","td-4","td-5","tkd-logo","tkd-sito"].map(n=>A(`mosaic/${n}.jpg`));

/* il nome in alto diventa chiaro sopra le sezioni blu */
function initLogoColor(){
  const logo=document.querySelector(".logo-sm"); if(!logo) return;
  const tick=()=>{
    const y=logo.getBoundingClientRect().top+10;
    const onDark=[...document.querySelectorAll("[data-dark]")].some(el=>{const r=el.getBoundingClientRect();return r.top<=y&&r.bottom>=y});
    logo.classList.toggle("on-dark",onDark);
  };
  addEventListener("scroll",tick,{passive:true}); addEventListener("resize",tick); setInterval(tick,400); tick();
}

/* tema giorno (sole, Blu Klein) / notte (luna, blu notte), condiviso tra le pagine */
function initTheme(){
  initLogoColor();
  const KEY="sm-theme", tg=document.getElementById("toggle");
  const set=night=>{
    document.body.classList.toggle("night",night);
    if(tg){ tg.setAttribute("aria-pressed",night); tg.title=t(night?"nav.themeDay":"nav.themeNight"); }
  };
  try{ set(localStorage.getItem(KEY)==="night"); }catch(e){ set(false); }
  if(tg) tg.onclick=()=>{
    const night=!document.body.classList.contains("night");
    set(night);
    try{ localStorage.setItem(KEY, night?"night":"day"); }catch(e){}
  };
}
