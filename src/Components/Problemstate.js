import React, { useState } from 'react';
import './css/Problemstate.css';

const ProblemStatement = () => {
  const [activeTab, setActiveTab] = useState('AIML');
  const [activeSubTab, setActiveSubTab] = useState('AIML_1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setActiveSubTab(`${tabName}_1`);
  };

  const handleSubTabClick = (subTabName) => {
    const [mainTab, subTabIndex] = subTabName.split('_');
    setActiveTab(mainTab);
    setActiveSubTab(subTabName);
  
    const subTabElements = document.querySelectorAll(`.sub-tab-contents[id^="${mainTab}_"]`);
    subTabElements.forEach((element) => {
      element.classList.remove('active-sub-tab');
    });
  
    const activeSubTabElement = document.getElementById(subTabName);
    if (activeSubTabElement) {
      activeSubTabElement.classList.add('active-sub-tab');
    }
  };

  return (
    <section className="Problem-Statements w-full max-w-3xl m-auto text-gray-100" data-section-name={"s-three"} id={"Problem-Statements"}> 
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="Problem-Statements">
            <h1 className="subtitle">Problem Statements</h1>
            <br></br>
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'AIML' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('AIML')}
              >
                AI & ML
              </p>
              <p
                className={`tab-links ${activeTab === 'IoT' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('IoT')}
              >
                IoT
              </p>
              <p
                className={`tab-links ${activeTab === 'Cyber' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('Cyber')}
              >
                Cyber Security
              </p>
              <p
                className={`tab-links ${activeTab === 'Open' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('Open')}
              >
                Open Innovation
              </p>
            </div>
            
            <div className={`tab-contents ${activeTab === 'AIML' ? 'active-tab' : ''}`} id="AIML">
            <div>
              <p
                className={`tab-links ${activeSubTab === 'AIML_1' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('AIML_1')}
              >
                Problem Statement 1
              </p>
              <p
                className={`tab-links ${activeSubTab === 'AIML_2' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('AIML_2')}
              >
                Problem Statement 2
              </p>
              <p
                className={`tab-links ${activeSubTab === 'AIML_3' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('AIML_3')}
              >
                Problem Statement 3
              </p>
              <p
                className={`tab-links ${activeSubTab === 'AIML_4' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('AIML_4')}
              >
                Problem Statement 4
              </p>
              <p
                className={`tab-links ${activeSubTab === 'AIML_5' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('AIML_5')}
              >
                Problem Statement 5
              </p>
            </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'AIML_1' ? 'active-sub-tab' : ''}`}
                id="AIML_1"
              >
                <p><span>Title: </span>AI-Powered Healthcare Assistant</p>
                <br></br>
                <p><span>Description: </span>Develop an AI-powered healthcare assistant that can help diagnose common medical conditions, provide personalized health recommendations, and assist in monitoring patient health metrics. The solution should incorporate natural language processing for patient interaction and machine learning for accurate diagnosis suggestions.</p>
                
              </div>
        
              <div
                className={`sub-tab-contents ${activeSubTab === 'AIML_2' ? 'active-sub-tab' : ''}`}
                id="AIML_2"
              >
                <p><span>Title: </span>Smart Education Platform with AI</p>
                <br></br>
                <p><span>Description: </span>Create an intelligent education platform that uses AI to personalize learning paths, identify knowledge gaps, and provide targeted recommendations for students. The system should adapt to individual learning styles and pace.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'AIML_3' ? 'active-sub-tab' : ''}`}
                id="AIML_3"
              >
                <p><span>Title: </span>AI for Environmental Conservation</p>
                <br></br>
                <p><span>Description: </span>Develop an AI solution for environmental monitoring and conservation. This could include wildlife tracking, pollution detection, or climate change impact assessment using machine learning models and sensor data.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'AIML_4' ? 'active-sub-tab' : ''}`}
                id="AIML_4"
              >
                <p><span>Title: </span> Accurate Medical Concept Extraction from Clinical Notes ⚕</p>
                <br></br>
                <p><span>Description: </span> 
                Develop a custom LLM capable of accurately extracting and interpreting medical concepts, such as diagnoses, symptoms, and treatments, 
                from unstructured clinical notes. The LLM should be fine-tuned on a diverse corpus of electronic health records (EHRs) and medical literature, 
                and should be able to handle domain-specific terminology, abbreviations, and contextual nuances. Furthermore, you are provided with multiple prompting challenges on the hack day 
                which must ensure the LLM must not reveal SPIIs and other sensitive data in its response. Information on datasets and compute resources will be provided soon.</p>
                
              </div>
           
              <div
                className={`sub-tab-contents ${activeSubTab === 'AIML_5' ? 'active-sub-tab' : ''}`}
                id="AIML_5"
              >
                <p><span>Title: </span> Develop an open-source AI-based mobile app data scraper</p>
                <br></br>
                <p><span>Description: </span>
                Many companies now offer services and products exclusively through mobile apps without traditional websites, presenting challenges for data collection and analysis. 
                This hackathon aims to develop an open-source, AI-based mobile app data scraper that can extract relevant data from apps with user consent and privacy preservation.
                The scraper should navigate app interfaces using computer vision and AI, intelligently identify and extract data through NLP and information extraction techniques, 
                structure extracted data, handle cross-platform compatibility, ensure scalability and efficiency, and incorporate secure user consent and authorization mechanisms. 
                Bonus task: Target a particular app and build a Tableau-like dashboard.</p>
                
              </div>
            </div>
            
            <div className={`tab-contents ${activeTab === 'IoT' ? 'active-tab' : ''}`} id="IoT">
            <div>
              <p
                className={`tab-links ${activeSubTab === 'IoT_1' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('IoT_1')}
              >
                Problem Statement 1
              </p>
              <p
                className={`tab-links ${activeSubTab === 'IoT_2' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('IoT_2')}
              >
                Problem Statement 2
              </p>
              <p
                className={`tab-links ${activeSubTab === 'IoT_3' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('IoT_3')}
              >
                Problem Statement 3
              </p>
              <p
                className={`tab-links ${activeSubTab === 'IoT_4' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('IoT_4')}
              >
                Problem Statement 4
              </p>
              <p
                className={`tab-links ${activeSubTab === 'IoT_5' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('IoT_5')}
              >
                Problem Statement 5
              </p>
            </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'IoT_1' ? 'active-sub-tab' : ''}`}
                id="IoT_1"
              >
                <p><span>Title: </span>Smart Agriculture System</p>
                <br></br>
                <p><span>Description: </span>Design an IoT-based smart agriculture system that monitors soil conditions, weather patterns, and crop health. The system should provide automated irrigation, pest detection, and yield prediction capabilities.</p>
                
              </div>
      
    
              <div
                className={`sub-tab-contents ${activeSubTab === 'IoT_2' ? 'active-sub-tab' : ''}`}
                id="IoT_2"
              >
                <p><span>Title: </span>Smart City Waste Management</p>
                <br></br>
                <p><span>Description: </span>Create an IoT solution for efficient waste management in smart cities. The system should include smart bins with fill-level monitoring, optimized collection routes, and waste segregation tracking.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'IoT_3' ? 'active-sub-tab' : ''}`}
                id="IoT_3"
              >
                <p><span>Title: </span>Industrial IoT Monitoring</p>
                <br></br>
                <p><span>Description: </span>Develop an industrial IoT system for real-time equipment monitoring, predictive maintenance, and energy optimization in manufacturing facilities.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'IoT_4' ? 'active-sub-tab' : ''}`}
                id="IoT_4"
              >
                <p><span>Title: </span>VR Training for Emergency Response and public awarness: Simulating Disasters for Realistic Preparedness</p>
                <br></br>
                <p><span>Description: </span> 
                This statement proposes using virtual reality (VR) technology to create training simulations for emergency responders. These simulations would realistically replicate disaster scenarios, 
                allowing responders to practice their skills and improve preparedness.
                </p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'IoT_5' ? 'active-sub-tab' : ''}`}
                id="IoT_5"
              >
                <p><span>Title: </span>Gamified Digitization and Archival Workflows for Cultural Heritage Preservation.</p>
                <br></br>
                <p><span>Description: </span>
                Enhancing engagement in digitization and archival processes is crucial for preserving cultural heritage and making historical records accessible. 
                Traditional methods often struggle to maintain the motivation and meticulous attention required for these tasks.
                </p>
                
              </div>
            </div>
            <div className={`tab-contents ${activeTab === 'Cyber' ? 'active-tab' : ''}`} id="Cyber">
            <div>
              <p
                className={`tab-links ${activeSubTab === 'Cyber_1' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('Cyber_1')}
              >
                Problem Statement 1
              </p>
              <p
                className={`tab-links ${activeSubTab === 'Cyber_2' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('Cyber_2')}
              >
                Problem Statement 2
              </p>
              <p
                className={`tab-links ${activeSubTab === 'Cyber_3' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('Cyber_3')}
              >
                Problem Statement 3
              </p>
              <p
                className={`tab-links ${activeSubTab === 'Cyber_4' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('Cyber_4')}
              >
                Problem Statement 4
              </p>
              <p
                className={`tab-links ${activeSubTab === 'Cyber_5' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('Cyber_5')}
              >
                Problem Statement 5
              </p>
            </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'Cyber_1' ? 'active-sub-tab' : ''}`}
                id="Cyber_1"
              >
                <p><span>Title: </span>Zero Trust Security Framework</p>
                <br></br>
                <p><span>Description: </span>Design and implement a zero trust security framework for modern enterprise environments. The solution should include continuous authentication, least privilege access, and real-time threat detection.</p>
                
              </div>
      
    
              <div
                className={`sub-tab-contents ${activeSubTab === 'Cyber_2' ? 'active-sub-tab' : ''}`}
                id="Cyber_2"
              >
                <p><span>Title: </span>Blockchain Security Platform</p>
                <br></br>
                <p><span>Description: </span>Create a security platform for blockchain applications that includes smart contract vulnerability detection, transaction monitoring, and fraud prevention mechanisms.</p>
                 
              </div>
          
              <div
                className={`sub-tab-contents ${activeSubTab === 'Cyber_3' ? 'active-sub-tab' : ''}`}
                id="Cyber_3"
              >
                <p><span>Title: </span>IoT Security Solution</p>
                <br></br>
                <p><span>Description: </span>Develop a comprehensive security solution for IoT devices and networks, including device authentication, encrypted communication, and intrusion detection systems.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'Cyber_4' ? 'active-sub-tab' : ''}`}
                id="Cyber_4"
              >
                <p><span>Title: </span>Dark Web Reconnaissance and Data Breach Monitoring</p>
                <br></br>
                <p><span>Description: </span> 
                Develop a solution to perform reconnaissance on the dark web and other data sources, such as hacked databases and logs, 
                to gather intelligence about potential data breaches and exposure of sensitive information. The system should allow users to search for specific identifiers 
                (e.g., email addresses, names, or company names) and provide a comprehensive report on any exposed data, including passwords, personal details, 
                or sensitive information found across these sources.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'Cyber_5' ? 'active-sub-tab' : ''}`}
                id="Cyber_5"
              >
                <p><span>Title: </span> Develop secure End-to-end Production AI system solutions</p>
                <br></br>
                <p><span>Description: </span>
                Develop a comprehensive solution to secure the entire machine learning (ML) workflow, from data ingestion and ETL (Extract, Transform, Load) processes to model inference, ensuring the protection of sensitive data and model weights. 
                The solution should address potential vulnerabilities and threats that could compromise the integrity, confidentiality, and availability of data and models throughout the ML lifecycle. 
                The solution should provide tools or services to safeguard production AI engines that monitor various possible attack surfaces and prevent system jailbreaks.</p>
                
              </div>
            </div>
            <div className={`tab-contents ${activeTab === 'Open' ? 'active-tab' : ''}`} id="Open">
            <div>
              <p
                className={`tab-links ${activeSubTab === 'Open_1' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('Open_1')}
              >
                Problem Statement 1
              </p>
              <p
                className={`tab-links ${activeSubTab === 'Open_2' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('Open_2')}
              >
                Problem Statement 2
              </p>
              <p
                className={`tab-links ${activeSubTab === 'Open_3' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('Open_3')}
              >
                Problem Statement 3
              </p>
              <p
                className={`tab-links ${activeSubTab === 'Open_4' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('Open_4')}
              >
                Problem Statement 4
              </p>
              <p
                className={`tab-links ${activeSubTab === 'Open_5' ? 'active-link' : ''}`}
                onClick={() => handleSubTabClick('Open_5')}
              >
                Problem Statement 5
              </p>
            </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'Open_1' ? 'active-sub-tab' : ''}`}
                id="Open_1"
              >
                <p><span>Title: </span>Sustainable Energy Solutions</p>
                <br></br>
                <p><span>Description: </span>Develop innovative solutions for renewable energy generation, storage, or distribution. Projects could include smart grid technologies, energy efficiency systems, or new sustainable energy sources.</p>
                
              </div>
            
              <div
                className={`sub-tab-contents ${activeSubTab === 'Open_2' ? 'active-sub-tab' : ''}`}
                id="Open_2"
              >
                <p><span>Title: </span>Digital Financial Inclusion</p>
                <br></br>
                <p><span>Description: </span> In many jurisdictions, the public often lacks easy access to comprehensive and up-to-date information about registered sex offenders and individuals convicted of fraud-related crimes. This lack of transparency can put communities at risk and undermine efforts to protect vulnerable populations.
                </p>
                
              </div>
           
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_3' ? 'active-sub-tab' : ''}`}
                id="web3_3"
              >
                <p><span>Title: </span>Reimagining Knowledge: A Decentralized, Community-Driven Information Platform</p>
                <br></br>
                <p><span>Description: </span> Wikipedia, a cornerstone of online information access, faces challenges in maintaining neutrality and combating bias.  Centralized control and reliance on editor reputation can hinder diverse representation and lead to information manipulation, as highlighted in the Lex Fridman and Balaji podcast discussion.
                The limitations of centralized information platforms like Wikipedia necessitate a next-generation solution built on Web 3.0 principles. This new platform should address these issues by employing: Decentralized Governance, shifting editorial control from a single entity to a distributed network of users.  Consensus-Driven Curation would be fostered through a robust mechanism (to be determined) for collaboratively validating information accuracy and resolving disputes.  To Incentivize Diverse Participation, the platform would reward users for contributing credible information and actively engaging in the governance process. Finally, Transparency and Immutability would be maintained by leveraging blockchain technology to ensure the information record remains uncensored and verifiable.</p>
                
              </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_4' ? 'active-sub-tab' : ''}`}
                id="web3_4"
              >
                <p><span>Title: </span> Democratizing Web3 Access- A Phone-Centric Wallet with Seamless User Experience</p>
                <br></br>
                <p><span>Description: </span> 
                Current crypto wallets often require complex seed phrases or private keys, creating a barrier to entry for the average user. Additionally, traditional KYC (Know Your Customer) processes can be cumbersome and deter new entrants to the Web3 space. 
                Integrating user experience (UX) elements commonly seen in successful mobile payment apps (like UPI) is also lacking in many crypto wallets, hindering mainstream adoption.
                </p>
                
              </div>
              <div
                className={`sub-tab-contents ${activeSubTab === 'web3_5' ? 'active-sub-tab' : ''}`}
                id="web3_5"
              >
                <p><span>Title: </span> Decentralized Platform for Transparent Carbon Offsetting and Global Impact.</p>
                <br></br>
                <p><span>Description: </span>
                The current carbon credit market lacks transparency, accessibility, and data cohesion. This hinders effective climate action and discourages broader participation. 
                We need a system that incentivizes sustainable practices, fosters trust through transparent tracking, and empowers individuals and organizations to contribute to a global carbon market.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
      
  );
};

export default ProblemStatement;