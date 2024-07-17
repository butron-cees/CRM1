import React from 'react';
import { Grafico } from '../../Components/Graficos/Grafico';
import { Grafico2 } from '../../Components/Graficos/Grafico2';
import { Metricas } from '../../Components/Metricas/Metricas';
import { ProgressBarUsageExample } from '../../Components/Card/CostoAdCl';
import { CardSaless } from '../../Components/Card/CardSaless';
import { ProgressCircleUsageExample } from '../../Components/Card/CardChurn';
import { MarkerBarRangeUsageExample } from '../../Components/Card/Promoter';
import { Tab, TabList, TabPanels, TabPanel, TabGroup } from '@tremor/react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='container mx-auto pt-10'>
      <h2 className='titulo'>Dashboard</h2>
      <hr className="mb-3 mx-3 border-top-2 border-bottom-1 linea" />

      <TabGroup defaultIndex={0}>
        <TabList variant="line">
          <Tab value="1">Metricas</Tab>
          <Tab value="2">Cards</Tab>
          <Tab value="3">Graficos</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="1">
            <div className='grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols'>
              <Metricas />
              <Metricas />
              <Metricas />
            </div>
          </TabPanel>

          <TabPanel value="2">
            <div className='container mx-auto pt-10 '>
              <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
                <ProgressBarUsageExample />
                <ProgressCircleUsageExample />
                <MarkerBarRangeUsageExample />
                <CardSaless/>
              </div>
            </div>
          </TabPanel>

          <TabPanel value="3">
            <div className='graficas'>
              <div className='container mx-auto pt-10'>
                <div className='grid gap-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                  <Grafico />
                  <Grafico2 />
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

export default Dashboard;