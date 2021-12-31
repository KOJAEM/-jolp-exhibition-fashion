import React, { useState } from 'react';
import Musinsa from "./musinsa/Musinsa";
import Covernat from "./covernat/Covernat";
import Kirsh from "./kirsh/Kirsh";
import Lmc from "./lmc/Lmc";
import Gallery from "./gallery/Gallery";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const KojaemRouter = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Route
          render={({ location }) => (
        <AnimateSharedLayout>
            <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/"
            render={() => <Gallery selected={selected} setSelected={setSelected}/>}
            >
          </Route>
          <Route path="/MUSINSA"
            render={() => <Musinsa selected={selected} setSelected={setSelected}/>}
          />
          <Route path="/COVERNAT" 
            render={() => <Covernat selected={selected} setSelected={setSelected}/>}   
          />
          <Route path="/KIRSH"
            render={() => <Kirsh selected={selected} setSelected={setSelected}/>}   
          />
          <Route path="/LMC"
            render={() => <Lmc selected={selected} setSelected={setSelected}/>}   
          />
        </Switch>
        </AnimatePresence>
        </AnimateSharedLayout>
        
          )}
          
          />
      </>
  );


};

export default KojaemRouter;

