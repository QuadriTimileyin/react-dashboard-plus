import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'
import Modal from 'react-modal'
import MapComponent from '../components/map-component/MapComponent'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    const location = {
        lat: 37.7749, // Replace with your actual latitude
        lng: -122.4194, // Replace with your actual longitude
      };
    
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row">
                   
                        <div className="row">
                            {
                                data.summary.map((item, index) => (
                                    <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }
                        </div>
                 
                    {/* <div className="col-4 hide-md">
                        <SummaryBoxSpecial item={data.revenueSummary} />
                    </div> */}
                </div>
                <div className="row">
                <div className="col-12" onClick={openModal} style={{ cursor: 'pointer' }}>
                
          <Box>
            {/* Replace with your actual Google Maps Static API key */}
            <div className="summary-box__info__title">
                 
                        <div>Deployed Locations</div>
                    </div>
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=11&size=900x150&key=AIzaSyB9U3ZoFqzhNN8O_pISaNp7x6JoO7zzvYY`}
              alt="Static Map"
            />
          </Box>
          </div>
                </div>
                <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <MapComponent lat={location.lat} lng={location.lng} />
      </Modal>
            </DashboardWrapperMain>
            <DashboardWrapperRight>
                {/* <div className="title mb">Overall</div>
                <div className="mb">
                    <OverallList />
                </div>
                <div className="title mb">Revenue by channel</div>
                <div className="mb">
                    <RevenueList />
                </div> */}
            </DashboardWrapperRight>
        </DashboardWrapper>
    )
}

export default Dashboard

const RevenueByMonthsChart = () => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: colors.orange,
                borderRadius: 20,
                borderSkipped: 'bottom'
            }
        }
    }

    const chartData = {
        labels: data.revenueByMonths.labels,
        datasets: [
            {
                label: 'Revenue',
                data: data.revenueByMonths.data
            }
        ]
    }
    return (
        <>
            <div className="title mb">
                Revenue by months
            </div>
            <div>
                <Bar options={chartOptions} data={chartData} height={`300px`} />
            </div>
        </>
    )
}