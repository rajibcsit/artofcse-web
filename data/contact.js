import api from "./api/api";

const ContactUsAPI = {
    
    ContactFrom: async (name, email, phone,message,website) => {
  
        const response =  await api.post("/contact", { 
             name:name, 
             email:email,
             phone:phone,
             message:message,
             website:website
            })
          return response.data;
      }

};

export default ContactUsAPI;
