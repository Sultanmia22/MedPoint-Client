export type DoctorAvailabilityDay =
  | "Saturday"
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";
  
export type DoctorTimeSlot = {
  startTime: string;
  endTime: string;
  slotMinutes: number;
};

export type DoctorAvailability = Partial<Record<DoctorAvailabilityDay, DoctorTimeSlot[]>
>;