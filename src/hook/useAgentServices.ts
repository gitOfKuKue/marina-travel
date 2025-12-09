import { create } from "zustand";

// Importing Fontawesome icons
import { SERVICES_DATA } from "../data/services";

interface SubService {
  title: string;
  icon: any;
  description: string;
  details: string;
}

interface Service {
  title: string;
  description: string;
  subServices: SubService[];
}

interface AgentServicesStore {
  services: Service[];
  convertTitleToLink: (title: string) => string;
}

const useAgentServices = create<AgentServicesStore>((set) => ({
  services: SERVICES_DATA,

  convertTitleToLink: (title: string): string => {
    return title.toLowerCase().replaceAll(" ", "-");
  },
}));

export default useAgentServices;
