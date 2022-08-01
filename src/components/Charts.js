import React, { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { adsCollectionRef } from '../lib/firestore.collections';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export default function Charts(){    

    const [dataTotal, setDataTotal] = useState([]);
    
    useEffect(() => {
        const unsubscribe = onSnapshot(adsCollectionRef, snapshot => {
            setDataTotal(snapshot.docs.map(doc => ({ id: doc.id, numClicks: doc.data().numClicks, sales: doc.data().sale, category: doc.data().category})))
        })
        return () => {
            unsubscribe();
        }
    },[]);

    function checkSaleMakeup(ads, category, sale) {
        var numClicksCat = 0; 
        console.log(ads);
        ads.forEach(ad => {
            if(ad.category === category && ad.sales === sale)
            {
                numClicksCat += Number(ad.numClicks);
            }
        });
        console.log(numClicksCat);
        return numClicksCat;
    }

const dataBar = {
  labels: ['Makeup', 'Toys', 'Clothes', 'Furniture'],
  datasets: [{
    label: 'Sale Ads',
    data: [checkSaleMakeup(dataTotal, 'Makeup', true), checkSaleMakeup(dataTotal, 'Toys', true), checkSaleMakeup(dataTotal, 'Clothe', true), checkSaleMakeup(dataTotal, 'Furniture', true)],
    backgroundColor: [
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgb(153, 102, 255)'
    ],
    borderWidth: 1
  },
  {
    label: 'New Collection Ads',
    data: [checkSaleMakeup(dataTotal, 'Makeup', false), checkSaleMakeup(dataTotal, 'Toys', false), checkSaleMakeup(dataTotal, 'Clothe', false), checkSaleMakeup(dataTotal, 'Furniture', false)],
    backgroundColor: [
      'rgba(54, 162, 235, 0.2)'
    ],
    borderColor: [
      'rgb(54, 162, 235)'
    ],
    borderWidth: 1
  },
]
};

    return (
        <>
        <div className='modal-bar-chart'>
            <br></br>
            <h1 style={{color: 'gray', fontSize: '25px'}}>Advertising Analysis</h1>
            <Bar data= {dataBar} />
        </div>
        </>
    )
}
