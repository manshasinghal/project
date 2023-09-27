import { Banner } from './Banner';
import React from 'react';
import About from './About';
import Section3 from './Section3';
import Projects from './Projects';
import Footer from './Footer'
import Client from './Clients';
import Services from './Services';
import Card from './Cards/Card'
import Teams from './Teams';
import AccordionPages from './AccordionPages'
import Contact from './Contact';
import Career from './Career'
export default function Home() {

  
return (
<div className='overflow-x-hidden overflow-y-hidden'>
    
<Banner />
<About/>
<Services/>
<Section3 />
      
{/* <Steps /> */}
<Projects />
<Card/>
<Client/>
<Teams/>
<Contact/>
<AccordionPages/>
<Career/>
<Footer />
</div>
   
)
}
