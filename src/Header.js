import React from 'react';
import { Circle } from 'react-circle';

const Header = ({items}) => {
  
  const totalTasks = items.length;
  const completedTasks = items.filter(item => item.checked).length;
  const progress=Math.floor((completedTasks/totalTasks)*100);
  
 

  return (
   

    <header className="bg-purple-500 h-32 text-white p-4 flex justify-between items-center relative">
    <h1 className="lg:text-4xl font-bold p-4 shadow-lg sm:text-sm">To Do List</h1>
    <div className="flex items-center">
      <p className="mr-4 md:text-sm sm:text-xs">Your Progress :</p>
      <div className="relative group last:">
        <Circle
          progress={progress}
          size={100}
          responsive={false}
          lineWidth={40}
          bgColor="#D1D5DB"
          textColor="white"
          showPercentage
        />
       
      </div>
    </div>
  </header>
);
};
  

export default Header;
