

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuNavTop } from "../menus/menuNavTop/MenuNavTop";

interface IModalContext {
  showModal: 'open' | 'close';
  handleClickOpen: () => void;
};

const ModalContext = createContext({} as IModalContext)

export const openModal = () => {
  return useContext(ModalContext);
}

export const LoginModal: React.FC = () => {

  console.log('aslkdjfklasjdlfkjklasjdlkfjklasjdçlkfj');
  

  const [showModal, setOpen] = useState<'open' | 'close'>('open');

  const handleClickOpen = useCallback(() => {
    setOpen(oldOpt => oldOpt === 'open' ? 'close' : 'open');
  }, [])

  const handleClose = () => {
    setOpen('close')
  }

  const open = useMemo(() => {
    if (showModal === 'open') return true;
    return false;
  }, [showModal]);

  return (
    <ModalContext.Provider value={{ showModal: 'open', handleClickOpen }}>
      <Dialog open={open} onClose={handleClose}  >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </ModalContext.Provider>
  );
}
