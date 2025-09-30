export interface ILead {
  id: number;              
  name: string;           
  email: string;          
  phone: string;          
  role?: string;           
  birthDate?: string;     
  message?: string;        
  tracking?: ITrackingData; 
  createdAt?: string;      
  updatedAt?: string;  
  position: string;    
}

export interface ITrackingData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
}

export type ILeadForm = Partial<Omit<ILead, 'id'>> & { id?: number };
