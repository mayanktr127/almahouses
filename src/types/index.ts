export interface HouseProperty {
  id: string;
  number: string;
  romanNumeral: string;
  status: 'sold' | 'reserved' | 'available';
  bedrooms: number;
  plotSize: number; // in m²
  builtArea: number; // in m²
  faces: string;
  price?: string; // e.g., '4,250,000 USD' or '445,000 KWD'
  frontImage: string;
  backImage: string;
  summary: string;
  features: string[];
}

export interface RoomStage {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  materialsUsed: string[];
}

export interface MaterialDetail {
  id: string;
  name: string;
  origin: string;
  application: string;
  description: string;
  textureImage: string;
  hotspot: { x: number; y: number };
}

export interface SpecificationItem {
  value: string;
  label: string;
  detail: string;
}
