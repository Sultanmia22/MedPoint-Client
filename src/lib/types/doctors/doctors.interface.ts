export interface IDoctorCardData {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: number;
  location: string;
  fee: number;
  image: string;
}

export interface IDoctorFilters {
  search: string;
  specialties: string[] | null;
  location: string;
  gender: "male" | "female" | "any";
  availability: string;
  maxFee: number;
  experience: string[] | null;
  minRating: number | null;
  sortBy: string;
}
