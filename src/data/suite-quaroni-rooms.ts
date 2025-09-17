export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  maxGuests: number;
  size: number;
  images: string[];
  amenities: {
    icon: string;
    label: string;
  }[];
  features: string[];
  landmark: {
    name: string;
    description: string;
  };
  location: {
    floor: string;
    view: string;
    special?: string;
  };
  popular?: boolean;
}

// Servizi comuni a tutte le camere Suite Quaroni
const commonAmenities = [
  { icon: "ac_unit", label: "Aria condizionata e riscaldamento indipendente" },
  { icon: "wifi", label: "Wi-Fi alta velocità" },
  { icon: "king_bed", label: "Letto matrimoniale con materasso in memory foam" },
  { icon: "lock", label: "Cassaforte" },
  { icon: "coffee", label: "Macchina da caffé Nespresso con cialde di benvenuto" },
  { icon: "local_cafe", label: "Bollitore con selezione di Té e infusi" },
  { icon: "shower", label: "Bagno in camera con doccia" },
  { icon: "soap", label: "Kit di cortesia Pascal completo" },
  { icon: "hotel", label: "Dotazione di pantofoline" },
  { icon: "local_bar", label: "Frigo bar con soda, snack e spumante" },
  { icon: "tv", label: "Smart-TV 42\" con canali satellitari" },
  { icon: "desk", label: "Scrittoio con sedie" },
  { icon: "closet", label: "Armadio" }
];

export const suiteQuaroniRooms: Room[] = [
  {
    id: "1",
    name: "La Cala",
    slug: "la-cala",
    description: "La Cala è una camera intima ed accogliente, dotata di tutti i comfort necessari alla qualità del soggiorno. Arricchita da una splendida foto che ritrae uno scorcio della Cala, porto storico di Palermo, è ideale per chi ha necessità di soggiornare in centro storico per esigenze di lavoro e vuole girare a piedi, lasciando la macchina nel vicino parcheggio convenzionato. Anche le coppie che vogliono visitare Palermo troveranno la sistemazione ideale presso la Cala di Suite Quaroni.",
    shortDescription: "Camera intima con dettagli di design e vista sul cortile interno di Palazzo Quaroni",
    price: 150,
    maxGuests: 2,
    size: 20,
    images: [
      "/images/rooms/cala/cala-gallery-01.jpg",
      "/images/rooms/cala/cala-gallery-02.jpg",
      "/images/rooms/cala/cala-gallery-04.jpg",
      "/images/rooms/cala/cala-gallery-05.jpg",
      "/images/rooms/cala/cala-gallery-06.jpg",
      "/images/rooms/cala/cala-gallery-07.jpg",
      "/images/rooms/cala/cala-gallery-010.jpg",
      "/images/rooms/cala/cala-gallery-011.jpg",
      "/images/rooms/cala/cala-gallery-012.jpg"
    ],
    amenities: [
      ...commonAmenities,
      { icon: "volume_off", label: "Sistema di insonorizzazione" },
      { icon: "yard", label: "Vista cortile interno Palazzo Quaroni" }
    ],
    features: [
      "Intimità degli spazi",
      "Piacevoli dettagli di design",
      "Accesso alla Galleria Commerciale Quaroni",
      "Parcheggio convenzionato nelle vicinanze",
      "Ideale per viaggi di lavoro e coppie"
    ],
    landmark: {
      name: "La Cala",
      description: "Porto storico di Palermo, antico approdo delle barche da diporto nel cuore della città"
    },
    location: {
      floor: "Piano superiore",
      view: "Cortile interno di Palazzo Quaroni",
      special: "Accesso diretto alla Galleria Commerciale Quaroni"
    }
  },
  {
    id: "2", 
    name: "Quattro Canti",
    slug: "quattro-canti",
    description: "La camera Quattro Canti è dedicata al centro storico della città di Palermo, il crocevia che divide in quattro Palermo. Luminosa e confortevole, la camera, è ideale per la coppia in viaggio alla scoperta del vero centro storico della città di Palermo, capitale UNESCO. La Camera è dotata di un Terrazzino privato prospiciente alla Galleria Quaroni: lo spazio ideale per un aperitivo improvvisato, dopo una giornata in giro per la città ad acquistare prelibatezze tipiche siciliane.",
    shortDescription: "Camera luminosa per coppie con terrazzino privato sulla Galleria Quaroni",
    price: 165,
    maxGuests: 2,
    size: 25,
    images: [
      "/images/rooms/quattro-canti/quattro-canti-gallery-01.jpg",
      "/images/rooms/quattro-canti/quattro-canti-gallery-02.jpg",
      "/images/rooms/quattro-canti/quattro-canti-gallery-03.jpg",
      "/images/rooms/quattro-canti/quattro-canti-gallery-04.jpg",
      "/images/rooms/quattro-canti/quattro-canti-gallery-05.jpg",
      "/images/rooms/quattro-canti/quattro-canti-gallery-06.jpg"
    ],
    amenities: [
      ...commonAmenities,
      { icon: "deck", label: "Terrazzino privato" },
      { icon: "light_mode", label: "Camera luminosa e confortevole" },
      { icon: "volume_off", label: "Sistema di insonorizzazione" }
    ],
    features: [
      "Terrazzino privato sulla Galleria Quaroni",
      "Ideale per aperitivi improvvisati", 
      "Perfetta per coppie in viaggio culturale",
      "Centro del centro storico UNESCO",
      "Comfort per businessmen"
    ],
    landmark: {
      name: "Quattro Canti",
      description: "Il crocevia barocco che divide Palermo in quattro mandamenti, cuore pulsante del centro storico"
    },
    location: {
      floor: "Piano principale",
      view: "Galleria Quaroni",
      special: "Terrazzino privato per aperitivi"
    },
    popular: true
  },
  {
    id: "3",
    name: "La Cattedrale", 
    slug: "la-cattedrale",
    description: "La camera Cattedrale, dedicata ad uno dei monumenti simbolo di Palermo, è la sistemazione adatta per la coppia amante dell'arte e della cultura che vuole trascorrere una vacanza scoprendo i luoghi di Palermo città UNESCO e per chi si trova a Palermo per affari ed ha bisogno di una sitemazione in centro facilmente raggiungibile. La vista su Via Maqueda vi darà dei bellissimi scorci di Palermo e vi farà conoscere le sue forme molteplici, preservando però il vostro riposo grazie all'insonorizzazione delle camere e alla qualità di letti e materassi.",
    shortDescription: "Camera elegante con vista su Via Maqueda, dedicata al monumento simbolo di Palermo",
    price: 175,
    maxGuests: 2,
    size: 28,
    images: [
      "/images/rooms/cattedrale/cattedrale-gallery-01.jpg",
      "/images/rooms/cattedrale/cattedrale-gallery-03.jpg",
      "/images/rooms/cattedrale/cattedrale-gallery-04.jpg",
      "/images/rooms/cattedrale/cattedrale-gallery-05.jpg",
      "/images/rooms/cattedrale/cattedrale-gallery-06.jpg",
      "/images/rooms/cattedrale/cattedrale-gallery-07.jpg",
      "/images/rooms/cattedrale/cattedrale-gallery-09.jpg",
      "/images/rooms/cattedrale/cattedrale-gallery-010.jpg",
      "/images/rooms/cattedrale/cattedrale-gallery-11.jpg"
    ],
    amenities: [
      ...commonAmenities,
      { icon: "location_city", label: "Vista su Via Maqueda" },
      { icon: "church", label: "Tema dedicato alla Cattedrale" },
      { icon: "volume_off", label: "Sistema di insonorizzazione avanzata" },
      { icon: "palette", label: "Gigantografia fotografica del monumento" }
    ],
    features: [
      "Vista suggestiva su Via Maqueda",
      "Scorci molteplici della città",
      "Ideale per amanti dell'arte e cultura", 
      "Perfetta per viaggi d'affari",
      "Facilmente raggiungibile nel centro",
      "Gigantografia della Cattedrale come testata"
    ],
    landmark: {
      name: "Cattedrale di Palermo",
      description: "Uno dei monumenti simbolo di Palermo, esempio di architettura arabo-normanna patrimonio UNESCO"
    },
    location: {
      floor: "Piano principale", 
      view: "Via Maqueda con scorci della città",
      special: "Gigantografia della Cattedrale come testata del letto"
    }
  },
  {
    id: "4",
    name: "Teatro Massimo",
    slug: "teatro-massimo", 
    description: "Dedicata allo splendido e monumentale Teatro Massimo, questa camera di Suite Quaroni è accogliente, luminosa e comoda. La posizione di Suite Quaroni rende il B&B ideale come punto di partenza per visitare la città di Palermo muovendosi a piedi, scoprendo gli itinerari UNESCO o andando in giro alla scoperta dei mercati storici e delle prelibatezze enogastronomiche siciliane. Gli alti tetti la differenziano dalle altre comode camere di Suite Quaroni e le conferiscono un ampio respiro rendendola ideale per lunghi soggiorni, per la coppia che vuole conoscere Palermo e i dintorni.",
    shortDescription: "Camera raffinata con alti tetti e atmosfera rilassante, ideale per lunghi soggiorni",
    price: 185,
    maxGuests: 2,
    size: 32,
    images: [
      "/images/rooms/teatro-massimo/teatro-massimo-gallery-01.jpg",
      "/images/rooms/teatro-massimo/teatro-massimo-gallery-02.jpg",
      "/images/rooms/teatro-massimo/teatro-massimo-gallery-03.jpg",
      "/images/rooms/teatro-massimo/teatro-massimo-gallery-04.jpg",
      "/images/rooms/teatro-massimo/teatro-massimo-gallery-05.jpg",
      "/images/rooms/teatro-massimo/teatro-massimo-gallery-06.jpg",
      "/images/rooms/teatro-massimo/teatro-massimo-gallery-07.jpg",
      "/images/rooms/teatro-massimo/teatro-massimo-gallery-08.jpg",
      "/images/rooms/teatro-massimo/teatro-massimo-gallery-09.jpg"
    ],
    amenities: [
      ...commonAmenities,
      { icon: "height", label: "Alti tetti per ampio respiro" },
      { icon: "location_city", label: "Vista su Via Maqueda" },
      { icon: "theater_comedy", label: "Tema Teatro Massimo" },
      { icon: "volume_off", label: "Insonorizzazione di qualità" },
      { icon: "schedule", label: "Ideale per lunghi soggiorni" }
    ],
    features: [
      "Alti tetti che conferiscono ampio respiro",
      "Punto di partenza ideale per itinerari UNESCO",
      "Vicina ai mercati storici",
      "Perfetta per scoprire prelibatezze siciliane",
      "Ideale per coppie in soggiorno lungo",
      "Atmosfera rilassante e raffinata"
    ],
    landmark: {
      name: "Teatro Massimo",
      description: "Splendido e monumentale teatro lirico, espressione unica del Liberty palermitano"
    },
    location: {
      floor: "Piano superiore",
      view: "Via Maqueda con scorci suggestivi",
      special: "Alti tetti per atmosfera ariosa e rilassante"
    }
  },
  {
    id: "5",
    name: "Monreale",
    slug: "monreale",
    description: "Se siete una famiglia con un bimbo a seguito o un piccolo gruppo di amici, la camera Monreale è ideale per la Vostra vacanza a Palermo. È dedicata a Monreale, splendida cittadina poco fuori Palermo, famosa per il bellissimo Duomo ed il suo Chiostro. Le famiglie o piccoli gruppi di amici che vogliono visitare Palermo partendo dal centro storico, muovendosi comodamente a piedi, sceglieranno la luminosa e confortevole camera Monreale di Suite Quaroni. Dotata di tutti i comfort necessari ad un soggiorno, anche lungo, Monreale è adatta a tre persone grazie al comodo e funzionale divano letto.",
    shortDescription: "Camera spaziosa per famiglie e gruppi fino a 3 persone con divano letto funzionale",
    price: 190,
    maxGuests: 3,
    size: 35,
    images: [
      "/images/rooms/monreale/monreale-gallery-01.jpg",
      "/images/rooms/monreale/monreale-gallery-02.jpg", 
      "/images/rooms/monreale/monreale-gallery-03.jpg",
      "/images/rooms/monreale/monreale-gallery-04.jpg",
      "/images/rooms/monreale/monreale-gallery-05.jpg",
      "/images/rooms/monreale/monreale-gallery-06.jpg"
    ],
    amenities: [
      ...commonAmenities,
      { icon: "family_restroom", label: "Adatta per famiglie e gruppi" },
      { icon: "bed", label: "Divano letto funzionale per terza persona" },
      { icon: "child_friendly", label: "Comfort per bambini e adulti" },
      { icon: "volume_off", label: "Insonorizzazione per riposo tranquillo" },
      { icon: "local_parking", label: "Parcheggio convenzionato vicino" }
    ],
    features: [
      "Ideale per famiglie con bambini",
      "Perfetta per piccoli gruppi di amici",
      "Divano letto comodo e funzionale",  
      "Adatta per soggiorni anche lunghi",
      "Partenza ideale per esplorare a piedi",
      "Parcheggio convenzionato nelle vicinanze"
    ],
    landmark: {
      name: "Monreale", 
      description: "Splendida cittadina vicino Palermo, famosa per il magnifico Duomo e il Chiostro benedettino"
    },
    location: {
      floor: "Piano principale",
      view: "Galleria commerciale Quaroni",
      special: "Spazio ottimizzato per famiglie e gruppi"
    }
  },
  {
    id: "6",
    name: "Pretoria",
    slug: "pretoria",
    description: "La libertà di viaggiare in autonomia, muovendosi a piedi per le vie, i mercati ed i vicoli del centro storico di Palermo, insieme ai propri amici o in famiglia, è quello che vi può offrire Suite Quaroni con le sue camere comode, accoglienti e dotate di tutti i comfort necessari per soggiorni lunghi o anche per un weekend alla scoperta di Palermo, città patrimonio UNESCO. La camera Pretoria di Suite Quaroni è dedicata ad uno dei luoghi più belli di Palermo, Piazza Pretoria, celebre per la splendida fontana detta \"della vergogna\". Un delizioso terrazzino privato si apre dalla camera sulla piazza interna della galleria commerciale Quaroni.",
    shortDescription: "Camera spaziosa per famiglie con terrazzino privato sulla galleria interna",
    price: 195,
    maxGuests: 3,
    size: 38,
    images: [
      "/images/rooms/pretoria/pretoria-gallery-01.jpg",
      "/images/rooms/pretoria/pretoria-gallery-02.jpg",
      "/images/rooms/pretoria/pretoria-gallery-04.jpg", 
      "/images/rooms/pretoria/pretoria-gallery-05.jpg",
      "/images/rooms/pretoria/pretoria-gallery-07.jpg",
      "/images/rooms/pretoria/pretoria-gallery-08.jpg",
      "/images/rooms/pretoria/pretoria-gallery-09.jpg",
      "/images/rooms/pretoria/pretoria-gallery-010.jpg",
      "/images/rooms/pretoria/pretoria-gallery-11.jpg"
    ],
    amenities: [
      ...commonAmenities,
      { icon: "deck", label: "Terrazzino privato su galleria interna" },
      { icon: "family_restroom", label: "Ideale per famiglie e gruppi" },
      { icon: "bed", label: "Letto matrimoniale + divano letto" },
      { icon: "local_dining", label: "Spazio per gustare prelibatezze locali" },
      { icon: "local_parking", label: "Parcheggio convenzionato vicino" }
    ],
    features: [
      "Terrazzino privato sulla galleria Quaroni",
      "Spazio ideale per momenti di relax",
      "Perfetta per gustare prelibatezze gastronomiche",
      "Ideale per viaggi in famiglia",
      "Libertà di esplorare a piedi",
      "Comoda per weekend e soggiorni lunghi"
    ],
    landmark: {
      name: "Piazza Pretoria",
      description: "Uno dei luoghi più belli di Palermo con la celebre Fontana della Vergogna"
    },
    location: {
      floor: "Piano principale", 
      view: "Piazza interna galleria commerciale",
      special: "Terrazzino privato per momenti di relax"
    }
  }
];

// Funzione helper per ottenere una camera per slug
export function getRoomBySlug(slug: string): Room | undefined {
  return suiteQuaroniRooms.find(room => room.slug === slug);
}

// Funzione helper per ottenere le camere più popolari
export function getPopularRooms(): Room[] {
  return suiteQuaroniRooms.filter(room => room.popular);
}

// Funzione helper per ottenere camere per numero di ospiti
export function getRoomsByGuests(guests: number): Room[] {
  return suiteQuaroniRooms.filter(room => room.maxGuests >= guests);
}

// Prezzi base per le camere (potrebbero variare in base alla stagione)
export const roomPricing = {
  lowSeason: 0.9,    // 10% di sconto
  highSeason: 1.2,   // 20% di aumento
  peakSeason: 1.4    // 40% di aumento
};