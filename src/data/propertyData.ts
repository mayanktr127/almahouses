import type { HouseProperty, RoomStage, MaterialDetail, SpecificationItem } from '../types';

export const BRAND = {
  name: 'ALMA',
  tagline: 'Houses by the water',
  concept: 'Four private residences shaped around water, light and quiet architectural living.',
  location: 'North Spit, Coastal Sound',
  viewingHours: 'Fridays and Saturdays, 16:30 to 18:30',
  whatsappNumber: '18005550199', // International demo number
  contactEmail: 'concierge@alma-residences.com',
  coordinates: '29°22\'14.2"N 48°05\'48.1"E',
};

export const SPECIFICATIONS: SpecificationItem[] = [
  {
    value: '4',
    label: 'houses on the water',
    detail: 'Each oriented to a private water horizon',
  },
  {
    value: '750 m²',
    label: 'plot, walled',
    detail: 'Monolithic travertine perimeter walls for total seclusion',
  },
  {
    value: '14 m',
    label: 'pool on the terrace',
    detail: 'Linear dark infinity pool extending to the water line',
  },
  {
    value: '1',
    label: 'left to sell',
    detail: 'House IV: prime point orientation towards the sunset',
  },
];

export const ROOMS: RoomStage[] = [
  {
    id: 'living',
    index: '01',
    name: 'Living',
    tagline: 'Glass to the floor on the lagoon side, travertine on the other.',
    description: 'Double-height volume framing unbroken reflections of coastal water, anchored by a monolithic vein-cut travertine hearth.',
    image: '/assets/images/interior/01-living.jpg',
    materialsUsed: ['Roman Travertine', 'Architectural Glass', 'Smoked Oak'],
  },
  {
    id: 'dining',
    index: '02',
    name: 'Dining',
    tagline: 'A table for twelve under a ceiling two storeys high.',
    description: 'Generous entertaining space designed with acoustic warmth, illuminated by custom sculptural bronze luminaires suspended above solid timber.',
    image: '/assets/images/interior/02-dining.jpg',
    materialsUsed: ['Burmese Teak', 'Acoustic Lime Plaster', 'Fluted Glass'],
  },
  {
    id: 'bedrooms',
    index: '03',
    name: 'Bedrooms',
    tagline: 'Five, and from each bed the lagoon through the curtains.',
    description: 'Private upper suites featuring bespoke low-profile platform beds, Belgian linen textiles, and deep terrace overhangs buffering the midday sun.',
    image: '/assets/images/interior/03-bedroom.jpg',
    materialsUsed: ['Belgian Linen', 'Honed Limestone', 'Oiled Walnut'],
  },
  {
    id: 'stairs',
    index: '04',
    name: 'Stairs',
    tagline: 'Travertine treads that sit on the wall, lit from under at night.',
    description: 'Cantilevered monolithic stone treads emerging directly from the textured core, glowing with subtle concealed cove illumination after dusk.',
    image: '/assets/images/interior/04-stairs.jpg',
    materialsUsed: ['Solid Travertine', 'Concealed LED Warm 2700K', 'Raw Bronze'],
  },
];

export const MATERIALS: MaterialDetail[] = [
  {
    id: 'travertine',
    name: 'Vein-Cut Travertine',
    origin: 'Tivoli, Italy',
    application: 'Monolithic load-bearing walls and cantilevered stairs',
    description: 'Selected for its porosity, geological texture, and natural response to low-angle evening sunlight. Unfilled and honed to remain tactile and cool to the touch.',
    textureImage: '/assets/images/materials/travertine.jpg',
    hotspot: { x: 28, y: 52 },
  },
  {
    id: 'teak',
    name: 'Natural Teak',
    origin: 'Sustainable Certified Old Growth',
    application: 'Pivot entrance gates, soffits, and terrace decking',
    description: 'Vertical solid slats with subtle shadow gaps. Left natural with matte organic oil sealant to silver gracefully over seasons beside salt water.',
    textureImage: '/assets/images/materials/teak.jpg',
    hotspot: { x: 50, y: 48 },
  },
  {
    id: 'glass',
    name: 'Low-Iron Structural Glass',
    origin: 'Saint-Gobain Diamant',
    application: 'Full-height motorized sliding façade panels',
    description: 'Ultra-clear panoramic panes without the standard green cast. Thermal acoustic barrier with seamless concealed sub-floor drainage tracks.',
    textureImage: '/assets/images/materials/glass.jpg',
    hotspot: { x: 74, y: 38 },
  },
  {
    id: 'bronze',
    name: 'Hand-Patinated Bronze',
    origin: 'Bespoke Architectural Casting',
    application: 'Door pulls, recessed shadow reveals, and exterior fixtures',
    description: 'Hand-burnished dark architectural bronze with a living finish that reacts subtly to coastal sea air and deepens with time.',
    textureImage: '/assets/images/materials/bronze.jpg',
    hotspot: { x: 42, y: 82 },
  },
];

export const HOUSES: HouseProperty[] = [
  {
    id: 'house-1',
    number: '1',
    romanNumeral: 'House I',
    status: 'sold',
    bedrooms: 5,
    plotSize: 750,
    builtArea: 520,
    faces: 'West',
    frontImage: '/assets/images/properties/house-1-front.jpg',
    backImage: '/assets/images/properties/house-1-back.jpg',
    summary: 'The inaugural residence on the southern boundary, sheltered by an ancient olive courtyard and private lagoon cove.',
    features: ['5 En-suite Bedrooms', '750 m² Walled Plot', '14 m Dark Reflection Pool', 'Private Boat Moorings'],
  },
  {
    id: 'house-2',
    number: '2',
    romanNumeral: 'House II',
    status: 'sold',
    bedrooms: 5,
    plotSize: 750,
    builtArea: 520,
    faces: 'South-West',
    frontImage: '/assets/images/properties/house-2-front.jpg',
    backImage: '/assets/images/properties/house-2-back.jpg',
    summary: 'Oriented towards the sweeping shoreline dunes with expansive horizontal cantilever overhangs.',
    features: ['5 En-suite Bedrooms', 'Dual Living Pavilions', 'Travertine Sunken Fire Lounge', 'Private Sunset Terrace'],
  },
  {
    id: 'house-3',
    number: '3',
    romanNumeral: 'House III',
    status: 'reserved',
    bedrooms: 5,
    plotSize: 750,
    builtArea: 540,
    faces: 'West',
    frontImage: '/assets/images/properties/house-3-front.jpg',
    backImage: '/assets/images/properties/house-3-back.jpg',
    summary: 'Expanded 540 m² footprint with automated teak louvers providing dynamic privacy and filtered daylight.',
    features: ['5 En-suite Bedrooms', '540 m² Built Area', 'Motorized Louver Facade', 'Outdoor Kitchen Pavilion'],
  },
  {
    id: 'house-4',
    number: '4',
    romanNumeral: 'House IV',
    status: 'available',
    bedrooms: 5,
    plotSize: 750,
    builtArea: 540,
    faces: 'North-West',
    price: '4,450,000 USD',
    frontImage: '/assets/images/properties/house-4-front.jpg',
    backImage: '/assets/images/properties/house-4-back.jpg',
    summary: 'The pinnacle position at the point of the spit with unbroken 270-degree sunset views and maximum water frontage.',
    features: ['5 En-suite Bedrooms', 'Prime Point Lagoon Orientation', '14 m Heated Infinity Pool', 'Sub-level Wine Cellar'],
  },
];

export const VIEWING_DAYS = [
  { id: 'friday', label: 'Friday' },
  { id: 'saturday', label: 'Saturday' },
];

export const VIEWING_TIMES = [
  { id: '16:30', label: '16:30', note: 'First golden hour light' },
  { id: '17:15', label: '17:15', note: 'Sunset over lagoon' },
  { id: '18:00', label: '18:00', note: 'Blue hour and illuminated architecture' },
];
