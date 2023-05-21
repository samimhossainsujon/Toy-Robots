import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TransformingRobots from './TabCart/TransformingRobots';
import RemoteControlRobots from './TabCart/RemoteControlRobots';
import ProgrammableRobots from './TabCart/ProgrammableRobots';

const Rect_Tabs = () => {
  const [ReactTabs, setReactTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("Programmable");

  useEffect(() => {
    fetch(`https://assignment-11-server-blue.vercel.app/allToy/${activeTab}?limit=3`)
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
    <div className='mt-5 mb-5'>
      <div className='text-center font-extrabold text-3xl mt-5 mb-5 underline'>
      <h1>Shop By Category</h1>
      </div>

      <Tabs>
        <TabList className='flex items-center justify-center'>
          <Tab onClick={() => handleTabClick("Programmable")}>Programmable Robots</Tab>
          <Tab onClick={() => handleTabClick("RemoteControl")}>Remote Control Robots</Tab>
          <Tab onClick={() => handleTabClick("TransformingRobots")}>Transforming Robots</Tab>
        </TabList>

        <TabPanel>
          <div className='w-11/12 md:10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-3 gap-5 mt-10 py-3 px-3'>
            {ReactTabs.map(ReactTab => <ProgrammableRobots
              key={ReactTab}
              ReactTab={ReactTab}
            ></ProgrammableRobots>)}
          </div>
        </TabPanel>


        <TabPanel>
          <div className='w-11/12 md:10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-3 gap-5 mt-10 py-3 px-3'>
            {ReactTabs.map(ReactTab => <RemoteControlRobots
              key={ReactTab}
              ReactTab={ReactTab}
            ></RemoteControlRobots>)}
          </div>
        </TabPanel>



        <TabPanel>
          <div className='w-11/12 md:10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-3 gap-5 mt-10 py-3 px-3'>
            {ReactTabs.map(ReactTab => <TransformingRobots
              key={ReactTab}
              ReactTab={ReactTab}
            ></TransformingRobots>)}
          </div>
        </TabPanel>


      </Tabs>
    </div>
  );
};

export default Rect_Tabs;
