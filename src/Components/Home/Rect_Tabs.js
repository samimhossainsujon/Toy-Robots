import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyTabCard from './ToyTabCard';

const Rect_Tabs = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("option1");

  useEffect(() => {
    fetch(`http://localhost:5000/dataToy/${activeTab}`)
      .then(response => response.json())
      .then(data => {
        setToys(data);
      })
      .catch(error => {
        console.error('Error fetching toys:', error);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <h1 className="title text-center mt-5 p-5">Available Toys</h1>
      <div className="tab-container text-center">
        <Tabs>
          <TabList>
            <Tab onClick={() => handleTabClick("option1")} className={activeTab === "option1" ? "active" : ""}>Option 1</Tab>
            <Tab onClick={() => handleTabClick("option2")} className={activeTab === "option2" ? "active" : ""}>Option 2</Tab>
          </TabList>
          <TabPanel>
            <div className="jobs-container mt-5 row">
              {toys.map((toy) => (
                <ToyTabCard key={toy.id} toy={toy} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="jobs-container mt-5 row">
              {toys.map((toy) => (
                <ToyTabCard key={toy.id} toy={toy} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Rect_Tabs;
