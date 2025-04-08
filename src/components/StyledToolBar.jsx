import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 1,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
  }));

export default StyledToolBar;