export interface Location {
  id: number;
  name: string;
  description: string;
  coordinates: [number, number];
}

export interface MapComponentProps {
  locations: Location[];
  center?: [number, number];
  zoom?: number;
  children?: React.ReactNode;
}

export interface FlyToComponentProps {
  isLocation: Location;
  setIsToggle: (value: boolean) => void;
}

export interface SidebarComponentProps {
  locations: Location[];
}

export interface SidebarButtonProps {
  setIsToggle: (value: boolean) => void;
  isToggle: boolean;
}