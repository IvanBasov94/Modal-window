import React, { useState } from 'react';

import './index.scss';

import Modal from './components/Modal';

const App: React.FC = () => {

   const [open, setOpen] = useState<boolean>(false);

   return (
      <div className="App">
         <button
            onClick={() => setOpen(true)}
            className="open-modal-btn"
         >
            ✨ Открыть окно
         </button>
         <Modal
            open={open}
            setOpen={setOpen}
         />
      </div>
   );
};

export default App;