import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyTabCard from './ToyTabCard';

const Rect_Tabs = () => {
  const [ReactTabs, setReactTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("Programmable");

  useEffect(() => {
    fetch(`http://localhost:5000/allToy/${activeTab}`)
      .then(response => response.json())
      .then(data => {
        setReactTabs(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='flex justify-center items-center mt-5 mb-5'>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleTabClick("Programmable")}>Programmable Robots</Tab>
          <Tab onClick={() => handleTabClick("RemoteControl")}>Remote Control Robots</Tab>
          <Tab onClick={() => handleTabClick("TransformingRobots")}>Transforming Robots</Tab>
        </TabList>

        <TabPanel>
          {ReactTabs.map(job => (
            <div key={job.id}>
              <h2>{job.title}</h2>
            
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          {ReactTabs.map(job => (
            <div key={job.id}>
              <h2>{job.title}</h2>
             
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          {ReactTabs.map(ReactTab => <ToyTabCard
          key={ReactTab}
          ReactTab ={ReactTab}
          ></ToyTabCard>)}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Rect_Tabs;
