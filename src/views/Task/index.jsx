import { useState } from 'react';
import Dropdown from './Dropdown';
import { Button } from "../../components";
import Accordion from './Accordion';

const Task = () => {

  return(
    <>
      <div className='w-full h-auto flex justify-between items-center py-6 px-8'>
        <Dropdown/>
        <Button type="button" value="New Task"/>
      </div>
      <div className='mb-6 px-8 overflow-y-auto'>
       <Accordion/>
       <Accordion/>
      </div>
    </>
  )

};

export default Task;