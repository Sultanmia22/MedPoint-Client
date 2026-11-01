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

export interface DoctorFilters {
  search: string;
  specialties: string[];
  location: string;
  gender: "Male" | "Female" | "Any";
  availability: string;
  maxFee: number;
  experience: string[];
  minRating: number | null;
  sortBy: string;
}

export const defaultFilters: DoctorFilters = {
  search: "",
  specialties: [],
  location: "All Cities",
  gender: "Any",
  availability: "Today",
  maxFee: 5000,
  experience: [],
  minRating: null,
  sortBy: "Relevance",
};