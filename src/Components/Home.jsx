import { ArrowDownwardOutlined } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import React from "react";

const Home = () => {
  const dummyList = ["List 1", "List 2", "List 3", "List 4"];
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDownwardOutlined />}>
        Crypto 1
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {dummyList.map((elem)=>{
            return <li>{elem}</li>
          })}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default Home;
