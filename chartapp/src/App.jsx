import { useState, useEffect } from "react";
import {PieChart, Pie,} from 'recharts';
import Slider from "./Slider";
const BankDashboard=()=>{
  const [loanData, setLoanData] = useState({
    homevalue:3000,
    downPayment:600,
    loanAmount:2400,
    interestRate:5,
    loanTerm:5,

  })

  const [monthlyPayment,setMonthlyPayment]=useState(0);
  const[chartData,setChartData] = useState([]);

  const calculateLoanDetails = ()=>{
    const {loanAmount, interestRate, loanTerm} = loanData;
    const totalLoanMonths = loanTerm*12;
    const monthlyRate = interestRate/100/12;
    const monthlyPayment = ((loanAmount * interestPerMonth *(1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1));
    const totalInterest = monthlyPayment*totalLoanMonths-loanAmount;
    setMonthlyPayment(monthlyPayment);
    setChartData([
      {name:'Principal',value:loanAmount},
      {name:'Interest', value:totalInterest},
    ]);
  };
};

useEffect(()=>{
  calculateLoanDetails();
},[loanData]);

const handleSliderChange = (name,value)=>{
  setLoanData(prevData=>{
    const newData = {...prevData,[name]:value[0]};
    if(name==='homeValue' || name==='downPayment'){
      newData.loanAmount = newData.homeValue-newData.downPayment;
    }
    return newData;
  })
}
