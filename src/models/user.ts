export interface User {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];
  cars: Car[]
}


export interface Car {
  plate: string
  details: CarDetails
  info?: CarInfo | null
}

export interface CarDetails {
  make: string
  model: string
  seats?: number
}

export interface CarInfo {
  colour?: string | null
}